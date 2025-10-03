// import React, { useState, useEffect } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { API_BASE_URL } from "../api";
// import AdminLayout from "../components/AdminLayout";
// import { Mail, Trash2, Download } from "lucide-react";

// const AdminContacts = () => {
//   const { token } = useAuth();
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     if (token) {
//       fetchContacts();
//     }
//   }, [token]);

//   const fetchContacts = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}getcontact.php`, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//       });

//       const data = await response.json();
//       if (data && data.status !== "error") {
//         setContacts(data.contacts || []);
//       } else {
//         setError(data?.message || "Failed to fetch contacts");
//       }
//     } catch {
//       setError("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteContact = async (id) => {
//     if (!window.confirm("Delete this contact?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}deletecontact.php`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//         body: JSON.stringify({ id }),
//       });
//       const data = await response.json();
//       if (data.status === "success") fetchContacts();
//       else alert("Failed to delete");
//     } catch {
//       alert("Network error");
//     }
//   };

//   const downloadCSV = () => {
//     const headers = ["Name", "Email", "Phone", "Message", "Submitted On"];
//     const rows = contacts.map((c) => [
//       c.name,
//       c.email,
//       c.phone,
//       c.message,
//       c.created_at,
//     ]);
//     const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "contacts.csv");
//     link.click();
//   };

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentItems = contacts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(contacts.length / itemsPerPage);

//   return (
//     <AdminLayout>
//       <div className="mb-8 flex justify-between items-center">
//         <div>
//           <h2 className="text-3xl font-bold text-white mb-2">All Contacts</h2>
//           <p className="text-gray-400">View and manage contact form submissions</p>
//         </div>
//         {contacts.length > 0 && (
//           <button
//             onClick={downloadCSV}
//             className="flex items-center gap-2 px-4 py-2 bg-[#122632] text-white rounded-lg hover:bg-[#0f1f29]"
//           >
//             <Download className="w-4 h-4" />
//             Download CSV
//           </button>
//         )}
//       </div>

//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         {loading ? (
//           <div className="text-center py-16">Loading...</div>
//         ) : error ? (
//           <div className="p-6 text-red-600">{error}</div>
//         ) : contacts.length > 0 ? (
//           <>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     {["Name", "Email", "Phone", "Message", "Submitted On", "Action"].map((h) => (
//                       <th
//                         key={h}
//                         className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase"
//                       >
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {currentItems.map((c) => (
//                     <tr key={c.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4">{c.name || "N/A"}</td>
//                       <td className="px-6 py-4">{c.email || "N/A"}</td>
//                       <td className="px-6 py-4">{c.phone || "N/A"}</td>
//                       <td className="px-6 py-4">{c.message || "N/A"}</td>
//                       <td className="px-6 py-4">{c.created_at || "N/A"}</td>
//                       <td className="px-6 py-4 text-right">
//                         <button
//                           onClick={() => deleteContact(c.id)}
//                           className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                         >
//                           <Trash2 className="w-4 h-4 inline mr-1" />
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-between items-center p-4 border-t">
//               <p className="text-sm text-gray-500">
//                 Showing {indexOfFirst + 1} to {Math.min(indexOfLast, contacts.length)} of{" "}
//                 {contacts.length}
//               </p>
//               <div className="flex gap-2">
//                 <button
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage((p) => p - 1)}
//                   className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//                 <button
//                   disabled={currentPage === totalPages}
//                   onClick={() => setCurrentPage((p) => p + 1)}
//                   className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="text-center py-16">
//             <Mail className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//             No contacts found
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminContacts;


import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL } from "../api";
import AdminLayout from "../components/AdminLayout";
import { Mail, Trash2, Download } from "lucide-react";

const AdminContacts = () => {
  const { token } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: "created_at", direction: "desc" });

  useEffect(() => {
    if (token) fetchContacts();
  }, [token]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}getcontact.php`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      const data = await response.json();
      if (data && data.status !== "error") setContacts(data.contacts || []);
      else setError(data?.message || "Failed to fetch contacts");
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}deletecontact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.status === "success") fetchContacts();
      else alert("Failed to delete");
    } catch {
      alert("Network error");
    }
  };

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Phone", "Message", "Submitted On"];
    const rows = contacts.map((c) => [c.name, c.email, c.phone, c.message, c.created_at]);
    const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contacts.csv");
    link.click();
  };

  // Sorting logic
  const sortedContacts = [...contacts].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let valA = a[sortConfig.key] || "";
    let valB = b[sortConfig.key] || "";
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();
    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedContacts.length / itemsPerPage);

  const getPageNumbers = () => {
    const maxButtons = 5;
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxButtons + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">All Contacts</h2>
          <p className="text-gray-400">View and manage contact form submissions</p>
        </div>
        {contacts.length > 0 && (
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-[#122632] text-white rounded-lg hover:bg-[#0f1f29] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CSV
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {loading ? (
          <div className="text-center py-16">Loading...</div>
        ) : error ? (
          <div className="p-6 text-red-600">{error}</div>
        ) : contacts.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {["name", "email", "phone", "message", "created_at"].map((key, i) => {
                      const titles = ["Name", "Email", "Phone", "Message", "Submitted On"];
                      return (
                        <th
                          key={key}
                          onClick={() => requestSort(key)}
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer select-none"
                        >
                          {titles[i]} {sortConfig.key === key ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                      );
                    })}
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{c.name || "N/A"}</td>
                      <td className="px-6 py-4">{c.email || "N/A"}</td>
                      <td className="px-6 py-4">{c.phone || "N/A"}</td>
                      <td className="px-6 py-4">{c.message || "N/A"}</td>
                      <td className="px-6 py-4">{c.created_at || "N/A"}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors" onClick={() => deleteContact(c.id)}>
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 border-t flex-wrap gap-3">
              <p className="text-sm text-gray-500">
                Showing {indexOfFirst + 1} to {Math.min(indexOfLast, sortedContacts.length)} of {sortedContacts.length}
              </p>
              <div className="flex gap-1 items-center">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {currentPage > 3 && totalPages > 5 && <span className="px-2">...</span>}

                {getPageNumbers().map((i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === i ? "bg-[#122632] text-white" : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {i}
                  </button>
                ))}

                {currentPage < totalPages - 2 && totalPages > 5 && <span className="px-2">...</span>}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Mail className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            No contacts found
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;


