import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL } from "../api";
import AdminLayout from "../components/AdminLayout";
import { Mail, Trash2, Download } from "lucide-react";

const AdminSubscribers = () => {
  const { token } = useAuth();
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}newsletter.php`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      const data = await response.json();
      if (data && data.status === "success") {
        setSubscribers(data.newsletters || []);
      } else {
        setError(data?.message || "Failed to fetch subscribers");
      }
    } catch (error) {
      setError(`Network error ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchSubscribers();
  }, [token]);

  const deleteSubscriber = async (id) => {
    if (!window.confirm("Delete this subscriber?")) return;

    try {
      const response = await fetch(`${API_BASE_URL}newsletter.php`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.status === "success") fetchSubscribers();
      else alert("Failed to delete");
    } catch {
      alert("Network error");
    }
  };

  const downloadCSV = () => {
    const headers = ["Email", "Subscribed On"];
    const rows = subscribers.map((s) => [s.email, s.created_at]);
    const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "subscribers.csv");
    link.click();
  };

  // Pagination logic
  const totalPages = Math.ceil(subscribers.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = subscribers.slice(indexOfFirst, indexOfLast);

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
          <h2 className="text-3xl font-bold text-white mb-2">All Subscribers</h2>
          <p className="text-gray-400">Manage newsletter subscribers</p>
        </div>
        {subscribers.length > 0 && (
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
        ) : subscribers.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Subscribed On
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{s.email || "N/A"}</td>
                      <td className="px-6 py-4">{s.created_at || "N/A"}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteSubscriber(s.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
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
                Showing {indexOfFirst + 1} to {Math.min(indexOfLast, subscribers.length)} of {subscribers.length}
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
            No subscribers found
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminSubscribers;






// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { API_BASE_URL } from '../api';
// import AdminLayout from '../components/AdminLayout';
// import { Mail, Calendar, Trash2 } from 'lucide-react';

// const AdminSubscribers = () => {
//   const { token } = useAuth();
//   const [subscribers, setSubscribers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (token) {
//       fetchSubscribers();
//     }
//   }, [token]);

//   const fetchSubscribers = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}getnewsletter.php`, {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Authorization': token ? `Bearer ${token}` : '',
//         },
//       });

//       const data = await response.json();

//       if (data && data.status !== 'error') {
//         setSubscribers(data.subscribers || []);
//       } else {
//         setError(data?.message || 'Failed to fetch subscribers');
//       }
//     } catch (err) {
//       setError('Network error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteSubscriber = async (subscriberId) => {
//     if (!window.confirm('Are you sure you want to delete this subscriber?')) {
//       return;
//     }

//     try {
//       const response = await fetch(`${API_BASE_URL}deletenewsletter.php`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': token ? `Bearer ${token}` : '',
//         },
//         body: JSON.stringify({ id: subscriberId }),
//       });

//       const data = await response.json();

//       if (data && data.status === 'success') {
//         // Refresh the subscribers list
//         fetchSubscribers();
//       } else {
//         alert(data?.message || 'Failed to delete subscriber');
//       }
//     } catch (err) {
//       alert('Network error while deleting subscriber');
//     }
//   };

//   return (
//     <AdminLayout>
//       {/* Header Section */}
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-white mb-2">All Subscribers</h2>
//         <p className="text-gray-400">View and manage newsletter subscribers</p>
//       </div>

//       {/* Content */}
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         {loading ? (
//           <div className="text-center py-16">
//             <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#122632] mx-auto"></div>
//             <p className="mt-4 text-gray-600 font-medium">Loading subscribers...</p>
//           </div>
//         ) : error ? (
//           <div className="p-6">
//             <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//                   <span className="text-white text-xs font-bold">!</span>
//                 </div>
//                 <p className="text-red-700 font-medium">{error}</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {subscribers.length > 0 ? (
//               <div className="divide-y divide-gray-200">
//                 {subscribers.map((subscriber, index) => (
//                   <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-[#122632] rounded-lg flex items-center justify-center flex-shrink-0">
//                           <Mail className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500 font-medium">Email</p>
//                           <p className="text-sm font-semibold text-gray-900">{subscriber.email || 'N/A'}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-6">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                             <Calendar className="w-5 h-5 text-[#122632]" />
//                           </div>
//                           <div>
//                             <p className="text-xs text-gray-500 font-medium">Subscribed On</p>
//                             <p className="text-sm text-gray-900">{subscriber.created_at || 'N/A'}</p>
//                           </div>
//                         </div>

//                         <button
//                           onClick={() => deleteSubscriber(subscriber.id)}
//                           className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Mail className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <p className="text-gray-500 font-medium">No subscribers found</p>
//                 <p className="text-sm text-gray-400 mt-1">Subscribers will appear here once they subscribe</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminSubscribers;
