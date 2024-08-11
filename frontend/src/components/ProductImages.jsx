// import { useEffect, useState } from "react";
// import { getAllImages } from "../services/ProductImage";
// import { toast } from "react-toastify";

// export default function ProductImages({ productId }) {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const data = await getAllImages();
//         console.log(data);
//         setImages(data);
//       } catch (error) {
//         console.log(error);
//         toast.error('Error Fetching Data');
//       }
//     };
//     fetchImages();
//   }, [productId]);

//   const filteredImages = images.filter((img) => img.productId === productId);

//   return (
//     <div id="carouselExampleDark" className="carousel carousel-dark slide">
//       <div className="carousel-indicators">
//         {filteredImages.filter(img=>img.product.id===productId).map((img, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             aria-current={index === 0 ? "true" : "false"}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//       <div className="carousel-inner">
//         {filteredImages.filter(img=>img.product.id===productId).map((img, index) => (
          
//           <div
//             key={img.fileName}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//             data-bs-interval="10000"
//           >
//             <img
//               src={`/api/productImage/${img.fileName}`}
//               className="d-block w-100"
//               alt={img.fileName}
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>product {index + 1} label</h5>
//               <p>Some representative placeholder content for the slide.</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleDark"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleDark"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }
