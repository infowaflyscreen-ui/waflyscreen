import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL } from "../api";
import AdminLayout from "../components/AdminLayout";
import { MessageSquare, Trash2, Download, Search, ChevronUp, ChevronDown } from "lucide-react";

const AdminEnquiries = () => {
  const { token } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter/Search
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    if (token) fetchEnquiries();
  }, [token]);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}getenquiries.php`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      const data = await response.json();
      if (data && data.status !== "error") setEnquiries(data.enquiries || []);
      else setError(data?.message || "Failed to fetch enquiries");
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (enquiryId) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}deleteenq.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ id: enquiryId }),
      });
      const data = await response.json();
      if (data && data.status === "success") fetchEnquiries();
      else alert(data?.message || "Failed to delete enquiry");
    } catch {
      alert("Network error while deleting enquiry");
    }
  };

  const filteredEnquiries = enquiries.filter((e) =>
    [e.name, e.email, e.phone, e.service, e.message]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const sortedEnquiries = React.useMemo(() => {
    let sortable = [...filteredEnquiries];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const aValue = a[sortConfig.key] || "";
        const bValue = b[sortConfig.key] || "";
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [filteredEnquiries, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedEnquiries.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedEnquiries.length / itemsPerPage);

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

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Phone", "Service", "Message", "Submitted On"];
    const rows = sortedEnquiries.map((e) => [
      e.name,
      e.email,
      e.phone,
      e.service,
      e.message,
      e.created_at,
    ]);
    const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "enquiries.csv");
    link.click();
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center flex-wrap gap-3">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">All Enquiries</h2>
          <p className="text-gray-400">View, filter and manage customer enquiries</p>
        </div>
        <div className="flex gap-3">

          {enquiries.length > 0 && (
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 px-4 py-2 bg-[#122632] text-white rounded-lg hover:bg-[#0f1f29] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#122632] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading enquiries...</p>
          </div>
        ) : error ? (
          <div className="p-6 text-red-600">{error}</div>
        ) : sortedEnquiries.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {[
                      { label: "Name", key: "name" },
                      { label: "Email", key: "email" },
                      { label: "Phone", key: "phone" },
                      { label: "Service", key: "services" },
                      { label: "Message", key: "message" },
                      { label: "Submitted On", key: "created_at" },
                    ].map((header) => (
                      <th
                        key={header.key}
                        onClick={() => requestSort(header.key)}
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-1">
                          {header.label}
                          {sortConfig.key === header.key ? (
                            sortConfig.direction === "asc" ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )
                          ) : null}
                        </div>
                      </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{enquiry.name || "N/A"}</td>
                      <td className="px-6 py-4">{enquiry.email || "N/A"}</td>
                      <td className="px-6 py-4">{enquiry.phone || "N/A"}</td>
                      <td className="px-6 py-4">{enquiry.services || "N/A"}</td>
                      <td className="px-6 py-4">{enquiry.message || "N/A"}</td>
                      <td className="px-6 py-4">{enquiry.created_at || "N/A"}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteEnquiry(enquiry.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
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
                Showing {indexOfFirst + 1} to {Math.min(indexOfLast, sortedEnquiries.length)} of {sortedEnquiries.length}
              </p>
              <div className="flex gap-1 items-center">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50">
                  Prev
                </button>

                {currentPage > 3 && totalPages > 5 && <span className="px-2">...</span>}

                {getPageNumbers().map((i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === i
                        ? "bg-[#122632] text-white"
                        : "bg-white hover:bg-gray-100"
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
            <MessageSquare className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            No enquiries found
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminEnquiries;
