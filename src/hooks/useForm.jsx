// import React, { useState } from "react";

// export default function CarForm({ onSubmit }) {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="brand"
//         placeholder="Mark"
//         value={formData.brand}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="model"
//         placeholder="Model"
//         value={formData.model}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="year"
//         placeholder="Year"
//         value={formData.year}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="color"
//         placeholder="Color"
//         value={formData.color}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="mileage"
//         placeholder="Mileage (km)"
//         value={formData.mileage}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="image"
//         placeholder="Image"
//         value={formData.image}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="price"
//         placeholder="Price"
//         value={formData.price}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
