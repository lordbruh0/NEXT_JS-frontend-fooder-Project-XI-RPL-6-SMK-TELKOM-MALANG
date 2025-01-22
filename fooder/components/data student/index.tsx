import React from "react";
import { arrayStudent } from "../../components/data/student";

export default function StudentList() {
  return (
    <div>
      {arrayStudent.map((student) => (
        <div key={student.id} className="h-16 w-full flex items-center justify-between mb-2">
          <div className="w-full h-full flex items-center gap-5">
            {/* Nama */}
            <div className="w-full h-full flex items-center">
              <h1 className="text-sm">{student.nama}</h1>
            </div>

            {/* Email */}
            <div className="w-full h-full flex">
              <h1 className="text-center my-auto mx-auto text-sm">{student.email}</h1>
            </div>

            {/* Kelas */}
            <div className="w-2/5 h-full flex flex-col justify-center items-center">
              <h1 className="text-sm">{student.kelas}</h1>
            </div>

            {/* Absent */}
            <div className="w-2/5 h-full flex flex-col justify-center items-center">
              <h1 className="text-sm">{student.absent}</h1>
            </div>

            {/* Kelamin */}
            <div className="w-2/5 h-full flex flex-col justify-center items-center">
              <h1 className="text-sm">{student.kelamin}</h1>
            </div>

            {/* Action Buttons */}
            <div className="w-full h-full flex justify-end items-center gap-9">
              <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded-2xl">
                View
              </button>
              <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded-2xl">
                Edit
              </button>
              <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded-2xl">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
