import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE_URL } from '../api';
import AdminLayout from '../components/AdminLayout';
import { MessageSquare, Mail, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const { token, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  }, [token]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}dashboard.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '',
        },
      });

      const data = await response.json();

      if (data && data.status !== 'error') {
        setDashboardData(data.summary || {});
      } else {
        setError(data?.message || 'Failed to fetch dashboard data');
      }
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const chartData = [
    { name: 'Enquiries', value: dashboardData?.total_enquiries || 0 },
    { name: 'Contacts', value: dashboardData?.total_contacts || 0 },
    { name: 'Subscribers', value: dashboardData?.total_subscribers || 0 },
  ];

  const COLORS = ['#122632', '#4A90E2', '#50E3C2'];

  return (
    <AdminLayout>
      {/* Welcome Section */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
          <p className="text-gray-400">Monitor your enquiries and contacts</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Enquiries Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#122632] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Total Enquiries</h3>
              </div>
              <p className="text-4xl font-bold text-[#122632]">
                {loading ? (
                  <span className="text-2xl text-gray-400">Loading...</span>
                ) : error ? (
                  <span className="text-2xl text-red-500">Error</span>
                ) : (
                  dashboardData?.total_enquiries || 0
                )}
              </p>
              <p className="text-sm text-gray-500 mt-2">All enquiry submissions</p>
            </div>
          </div>
        </div>

        {/* Total Contacts Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#122632] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Total Contacts</h3>
              </div>
              <p className="text-4xl font-bold text-[#122632]">
                {loading ? (
                  <span className="text-2xl text-gray-400">Loading...</span>
                ) : error ? (
                  <span className="text-2xl text-red-500">Error</span>
                ) : (
                  dashboardData?.total_contacts || 0
                )}
              </p>
              <p className="text-sm text-gray-500 mt-2">Newsletter subscribers</p>
            </div>
          </div>
        </div>
        {/* Total Subscribers Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#122632] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Subscribers</h3>
              </div>
              <p className="text-4xl font-bold text-[#122632]">
                {loading ? (
                  <span className="text-2xl text-gray-400">Loading...</span>
                ) : error ? (
                  <span className="text-2xl text-red-500">Error</span>
                ) : (
                  dashboardData?.total_subscribers || 0
                )}
              </p>
              <p className="text-sm text-gray-500 mt-2">All contact form submissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Overview Chart</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#122632" strokeWidth={4} dot={{ fill: '#122632', strokeWidth: 2, r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;