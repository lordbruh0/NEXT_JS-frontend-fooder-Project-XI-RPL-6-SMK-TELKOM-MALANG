import React from "react";
import { arraySchool } from "../data/pengguna";

export default function SchoolList() {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-gray-400 text-sm font-medium">School Name</th>
          <th className="px-4 py-2 text-left text-gray-400 text-sm font-medium">User</th>
          <th className="px-4 py-2 text-left text-gray-400 text-sm font-medium">Unit Price</th>
          <th className="px-4 py-2 text-left text-gray-400 text-sm font-medium">Revenue</th>
          <th className="px-4 py-2 text-left text-gray-400 text-sm font-medium">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {arraySchool.map((school, index) => (
          <tr key={school.id}>
            <td className="px-4 py-2 text-base text-gray-700 font-medium flex items-center gap-2">
              <school.icon className="w-5 h-5 text-gray-500" />
              {school.SchoolName}
            </td>
            <td className="px-4 py-2 text-base text-gray-700 font-medium">{school.pengguna}</td>
            <td className="px-4 py-2 text-base text-gray-700 font-medium">${school.harga.toLocaleString("id-ID")}</td>
            <td className="px-4 py-2 text-base text-gray-700 font-medium">
              ${(school.pengguna * school.harga).toLocaleString("id-ID")}
            </td>
            <td className="px-4 py-2 text-base text-gray-700 font-medium">${school.totalHarga.toLocaleString("id-ID")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
