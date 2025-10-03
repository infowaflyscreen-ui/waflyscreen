import React from "react";

const policy = [
  {
    title: "Effective Date",
    content: ["26-09-2025"]
  },
  {
    title: "Introduction",
    content: [
      "At Wa Flyscreen, we respect your privacy and are committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)."
    ]
  },
  {
    title: "Collection of Personal Information",
    content: [
      "We may collect personal information such as:",
      "• Name, phone number, and email address",
      "• Property address for installation or repair",
      "• Payment details for services provided",
      "• Any other information voluntarily provided by you",
      "This information is collected when you:",
      "• Request a quote or service",
      "• Contact us via phone, email, or website forms",
      "• Engage with our services"
    ]
  },
  {
    title: "Use of Personal Information",
    content: [
      "We use your personal information to:",
      "• Provide flyscreen services and support",
      "• Communicate with you regarding bookings, updates, or promotions",
      "• Process payments and invoices",
      "• Improve our services and customer experience"
    ]
  },
  {
    title: "Disclosure of Personal Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may disclose information to:",
      "• Service providers or contractors assisting with installations",
      "• Regulatory or legal authorities if required by law"
    ]
  },
  {
    title: "Storage and Security",
    content: [
      "Your personal information is stored securely, and we take all reasonable steps to protect it from misuse, loss, unauthorised access, modification, or disclosure."
    ]
  },
  {
    title: "Access and Correction",
    content: [
      "You have the right to:",
      "• Access your personal information held by Wa Flyscreen",
      "• Request corrections to any inaccurate or outdated information",
      "Requests can be made via email or phone, and we will respond promptly in accordance with APP requirements."
    ]
  },
  {
    title: "Cookies and Website Usage",
    content: [
      "Our website may use cookies or similar technologies to improve user experience and analyze website traffic. Cookies do not contain personal information."
    ]
  },
  {
    title: "Marketing and Communications",
    content: [
      "If you provide your contact details, we may send you service updates, promotions, or newsletters. You may opt-out at any time by contacting us or using the unsubscribe link in emails."
    ]
  },
  {
    title: "Changes to this Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated Effective Date."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "Phone: +61 468 444 748",
      "Email: support@waflyscreen.com",
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-Josefin">
      {/* Animated Heading */}
      {/* Animated Heading */}
<div className="text-center mb-10 group w-full mt-32">
  <h2 className="text-4xl font-bold text-[#122632] relative inline-block font-Marcellus">
    Privacy Policy
    <span
      className="block h-1 bg-gray-900 mx-auto w-16 transition-all duration-900 mt-2 group-hover:w-full"
    ></span>
  </h2>
</div>


      {policy.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#122632]">
            {section.title}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {section.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
