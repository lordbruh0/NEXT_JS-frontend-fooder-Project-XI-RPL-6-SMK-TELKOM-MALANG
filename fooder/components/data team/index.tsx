// "use client";

// import React, { useState } from "react";
// import { arrayTeam, TeamItem } from "../../components/data/team";
// import TeamList from "@/components/data team";
// import { IMenu } from "@/app/types";
// import { getCookies } from "@/lib/server-cookies";
// import { BASE_API_URL, BASE_IMAGE_MENU } from "@/global";
// import { get } from "@/lib/api-bridge";
// import { AlertInfo } from "@/components/alert"; 
// import Image from "next/image";
// // import Search from "./search";


// const getMenu = async (search: string): Promise<IMenu[]> => {
//   try {
//     const TOKEN = await getCookies("token");
//     const url = `${BASE_API_URL}/menu?search=${search}`;
//     const { data } = await get(url, TOKEN);
//     let result: IMenu[] = [];
//     if (data?.status) result = [...data.data];
//     return result;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }; 

// export default function MenuList() {
//   SearchParams,
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9; // Jumlah data per halaman

//   // Hitung data untuk halaman saat ini
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = arrayTeam.slice(indexOfFirstItem, indexOfLastItem);

//   // Hitung total halaman
//   const totalPages = Math.ceil(arrayTeam.length / itemsPerPage);

//   // Fungsi untuk mengganti halaman
//   const goToPage = (page: number) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // Menampilkan jumlah data yang sedang ditampilkan
//   const startEntry = indexOfFirstItem + 1;
//   const endEntry = Math.min(indexOfLastItem, arrayTeam.length);

//   return (
//     <div className="p-6">
//       {/* Data Siswa */}
//       <div>
//         {menu.map((data, index) => (
//           <div key={`keyPresrasi${index}`} className="h-16 w-full flex items-center justify-between mb-2">
//             {/* Nama */}
//             <div className="w-full h-full flex items-center">
//             <small className="text-sm font-bold text-primary">Picture</small><br />
//                 <Image width={40} height={40} src={`${BASE_IMAGE_MENU}/${data.picture}`} className="rounded-sm overflow-hidden" alt="preview" unoptimized />
//             </div>

//             {/* Email */}
//             <div className="w-full h-full flex">
//             <small className="text-sm font-bold text-primary">Name</small><br />
//               <h1 className="text-center my-auto mx-auto text-sm">{data.name}</h1>
//             </div>

//             {/* Kelas */}
//             <div className="w-2/5 h-full flex flex-col justify-center items-center">
//             <small className="text-sm font-bold text-primary">Price</small><br />
//               <h1 className="text-sm">Rp.{data.price}</h1>
//             </div>
//             <div className="w-2/5 h-full flex flex-col justify-center items-center">
//             <small className="text-sm font-bold text-primary">Description</small><br />
//               <h1 className="text-sm">{data.description}</h1>
//             </div>
//             <div className="w-2/5 h-full flex flex-col justify-center items-center">
//             <small className="text-sm font-bold text-primary">Category</small><br />
//               <h1 className="text-sm">{data.category}</h1>
//             </div>
//             <div className="w-2/5 h-full flex flex-col justify-center items-center">
//               <h1
//                 className={`text-sm ${team.status === "open" ? "text-green-500" : "text-red-500"} text-lg font-semibold`}
//               >
//                 {team.status}
//               </h1>
//             </div>
//             <div className="w-full h-full flex justify-end items-center gap-7">
//               <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
//                 View
//               </button>
//               <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
//                 Edit
//               </button>
//               <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-10">
//         <div>
//           <p>
//             Showing {startEntry} to {endEntry} of {arrayTeam.length} Entries
//           </p>
//         </div>
//         <div className="justify-end items-center space-x-2">
//           {/* Tombol Previous */}
//           <button
//             className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>

//           {/* Nomor Halaman */}
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-[#F45846] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//               onClick={() => goToPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           {/* Tombol Next */}
//           <button
//             className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
