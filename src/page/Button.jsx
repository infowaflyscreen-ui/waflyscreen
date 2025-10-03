// import React from 'react';

// const ShineButton = ({ text = 'Click Me', onClick }) => {
//   return (
//     <>
//       <style>
//         {`
//           .shine-button {
//             position: relative;
//             overflow: hidden;
//           }
//           .shine-button::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(
//               90deg,
//               transparent,
//               rgba(255, 255, 255, 0.4),
//               transparent
//             );
//             transition: 0.5s;
//           }
//           .shine-button:hover::before {
//             left: 100%;
//           }
//         `}
//       </style>
//       <button
//         className="shine-button px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
//         onClick={onClick}
//       >
//         {text}
//       </button>
//     </>
//   );
// };

// export default ShineButton;


import React from 'react';

const RenderButton = () => {
  return (
    <button className="relative bg-gradient-to-r from-gray-300 to-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-900 hover:to-gray-300 transition-all duration-700 ease-in-out hover:scale-105 before:absolute before:inset-0 before:bg-black before:opacity-0 before:rounded-lg before:transition-opacity before:duration-700 hover:before:opacity-10 after:absolute after:inset-0 after:bg-white after:opacity-0 after:rounded-lg after:transition-opacity after:duration-700 hover:after:opacity-10">
      RENDER
    </button>
  );
};

export default RenderButton;