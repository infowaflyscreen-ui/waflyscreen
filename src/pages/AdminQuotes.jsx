import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { API_BASE_URL } from "../api";
import AdminLayout from "../components/AdminLayout";
import { FileText, Trash2, Download, X } from "lucide-react";

const AdminQuotes = () => {
  const { token } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [sortConfig, setSortConfig] = useState({ key: "created_at", direction: "desc" });

  // Modal state
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (token) fetchQuotes();
  }, [token]);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}getaquote.php`, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: token ? `Bearer ${token}` : "" },
      });
      const data = await response.json();
      setQuotes(Array.isArray(data) ? data : data.quotes || []);
    } catch (err) {
      console.error(err);
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const deleteQuote = async (id) => {
    if (!window.confirm("Delete this quote?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}deletequote.php`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: token ? `Bearer ${token}` : "" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) fetchQuotes();
      else alert(data.error || "Failed to delete");
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Phone", "Suburb", "Message", "Submitted On"];
    const rows = quotes.map((q) => [q.name, q.email, q.phone, q.suburb, q.message, q.created_at]);
    const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "quotes.csv");
    link.click();
  };

  const downloadImage = (url, filename = "image.jpg") => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const sortedQuotes = [...quotes].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let valA = a[sortConfig.key] || "";
    let valB = b[sortConfig.key] || "";
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();
    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedQuotes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedQuotes.length / itemsPerPage);

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
          <h2 className="text-3xl font-bold text-white mb-2">All Quotes</h2>
          <p className="text-gray-400">View and manage all Get A Quote submissions</p>
        </div>
        {quotes.length > 0 && (
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
        ) : quotes.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {["name", "email", "phone", "suburb", "message", "created_at", "image"].map((key, i) => {
                      const titles = ["Name", "Email", "Phone", "Suburb", "Message", "Submitted On", "Image"];
                      return (
                        <th
                          key={key}
                          onClick={key !== "image" ? () => requestSort(key) : undefined}
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer select-none"
                        >
                          {titles[i]}{" "}
                          {sortConfig.key === key ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                      );
                    })}
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((q) => (
                    <tr key={q.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{q.name || "N/A"}</td>
                      <td className="px-6 py-4">{q.email || "N/A"}</td>
                      <td className="px-6 py-4">{q.phone || "N/A"}</td>
                      <td className="px-6 py-4">{q.suburb || "N/A"}</td>
                      <td className="px-6 py-4">{q.message || "N/A"}</td>
                      <td className="px-6 py-4">{q.created_at || "N/A"}</td>
                      <td className="px-6 py-4">
                        {q.image ? (
                          <img
                            src={`${API_BASE_URL}${q.image}`}
                            alt="Quote Upload"
                            className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setModalImage(`${API_BASE_URL}${q.image}`)}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          onClick={() => deleteQuote(q.id)}
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
                Showing {indexOfFirst + 1} to {Math.min(indexOfLast, sortedQuotes.length)} of {sortedQuotes.length}
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

            {/* Image Modal */}
            {modalImage && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-full max-h-full">
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1 hover:bg-red-600"
                    onClick={() => setModalImage(null)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <img
                    src={modalImage}
                    alt="Fullscreen"
                    className="max-h-[80vh] max-w-[90vw] mx-auto rounded shadow-lg"
                  />
                  <button
                    onClick={() => downloadImage(modalImage)}
                    className="mt-2 w-full py-2 bg-[#122632] text-white rounded-lg hover:bg-[#0f1f29]"
                  >
                    Download Image
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            No quotes found
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminQuotes;
