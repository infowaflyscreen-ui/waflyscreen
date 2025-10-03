import React from "react";

const terms = [
  {
    title: "Services",
    content: [
      "Wa Flyscreen provides mobile flyscreen repairs, installations, and custom-made screens across Perth and Peel.",
      "We aim to deliver high-quality, reliable, and safe solutions for homes and businesses."
    ]
  },
  {
    title: "Booking and Appointments",
    content: [
      "Appointments can be scheduled via phone, email, or our online contact form.",
      "We strive to arrive on time. However, delays may occur due to traffic or unforeseen circumstances. Wa Flyscreen will notify you in case of any changes."
    ]
  },
  {
    title: "Pricing and Payments",
    content: [
      "All prices for services will be communicated clearly before work begins.",
      "Payment is due upon completion of the service unless otherwise agreed.",
      "We accept [Insert Payment Methods: Cash, Bank Transfer, Credit Card, etc.]."
    ]
  },
  {
    title: "Warranty and Quality",
    content: [
      "Wa Flyscreen guarantees workmanship for [Insert Warranty Period, e.g., 12 months] from the date of installation or repair.",
      "Our products are made from high-quality materials; however, natural wear and tear, misuse, or accidental damage is not covered."
    ]
  },
  {
    title: "Customer Responsibilities",
    content: [
      "Customers must provide safe access to doors and windows for installations or repairs.",
      "Any structural issues with the property that affect installation must be disclosed prior to service."
    ]
  },
  {
    title: "Liability",
    content: [
      "Wa Flyscreen is not liable for indirect or consequential damages.",
      "We are committed to providing professional and safe services; however, we are not responsible for pre-existing property damage."
    ]
  },
  {
    title: "Cancellations and Rescheduling",
    content: [
      "Cancellations must be made at least [Insert Time, e.g., 24 hours] prior to the appointment.",
      "Wa Flyscreen reserves the right to reschedule appointments due to emergencies, severe weather, or operational reasons."
    ]
  },
  {
    title: "Privacy",
    content: [
      "Any personal information collected (name, contact, property details) will only be used for providing services and will be kept confidential."
    ]
  },
  {
    title: "Changes to Terms",
    content: [
      "Wa Flyscreen reserves the right to update or modify these terms at any time.",
      "Changes will be posted on this page and become effective immediately upon publication."
    ]
  }
];

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-Josefin">
      {/* Animated Heading */}
      <div className="text-center mb-10 group w-full mt-32">
        <h2 className="text-4xl font-bold text-[#122632] relative inline-block font-Marcellus">
          Terms & Conditions
          <span
            className="block h-1 bg-gray-900 mx-auto 
                       w-16 transition-all duration-900 
                       group-hover:w-full"
          ></span>
        </h2>
      </div>

      <p className="mb-6 text-gray-700">
        Welcome to Wa Flyscreen. By using our website or services, you agree to
        the following Terms and Conditions. Please read them carefully.
      </p>

      {terms.map((section, idx) => (
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

      {/* Contact Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2 text-[#122632]">
          Contact Us
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Phone: +61 468 444 748</li>
          <li>Email: support@waflyscreen.com</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
