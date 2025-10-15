import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Gallery from "./page/pages/Gallery";
import Service1 from "./page/pages/Service1";
import ContactUs from "./page/pages/ContactUs";
import AboutUs from "./page/pages/AboutUs";
import ServiceDetails from "./page/pages/ServiceDetails";
import TermsPage from "./page/pages/terms";
import PrivacyPolicy from "./page/pages/PrivacyPolicy";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import AdminContacts from "./pages/AdminContacts";
import AdminEnquiries from "./pages/AdminEnquiries";
import AdminSubscribers from "./pages/AdminSubscribers";
import AdminQuotes from "./pages/AdminQuotes";
import ProtectedRoute from "./components/ProtectedRoute";

import BlogShow from "./page/pages/BlogShow"; // existing blog detail page

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service1 />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Blog detail route with id */}
          <Route path="/blog/:id" element={<BlogShow />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <AdminContacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/enquiries"
          element={
            <ProtectedRoute>
              <AdminEnquiries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/subscribers"
          element={
            <ProtectedRoute>
              <AdminSubscribers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/quotes"
          element={
            <ProtectedRoute>
              <AdminQuotes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
