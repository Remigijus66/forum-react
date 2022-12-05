// import React, { useState, useContext } from 'react';
// import MainContext from "../context/MainContext";


// const Checkboxes = () => {
//   const { showOpen, setShowOpen, showClosed, setShowClosed } = useContext(MainContext)


//   const onlyOpen = () => {
//     setShowOpen(!showOpen);
//   };
//   const onlyClosed = () => {
//     setShowClosed(!showClosed);
//   };

//   return (
//     <div>
//       <Checkbox
//         label="Show OPEN"
//         value={showOpen}
//         onChange={onlyOpen}
//       />
//       <Checkbox
//         label="Show CLOSED"
//         value={showClosed}
//         onChange={onlyClosed}
//       />

//     </div>
//   );
// };

// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };



// export default Checkboxes;