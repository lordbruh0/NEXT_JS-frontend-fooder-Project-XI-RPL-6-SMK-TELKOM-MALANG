import React from 'react';
import { arrayAdmin } from '../../components/data/admin';

export default function AdminList() {
  return (

        <div className="">
          {arrayAdmin.map((admin) => (
            <div
              key={admin.id}
              className="bg-gray-200 p-4 h-20 w-full rounded-xl flex items-center justify-between mb-3"
            >
              <div className="w-full h-full flex items-center gap-5">
                <div className="size-10 bg-black rounded-full"/>
                <div className="max-w-full">
                  <h1 className="text-xl">{admin.name}</h1>
                  <p>{admin.teamName}</p>
                </div>
              </div>
              <div className="w-full h-full flex">
                <h1 className="text-center my-auto mx-auto">{admin.school}</h1>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-end">
                <h1>Email</h1>
                <h1>{admin.email}</h1>
              </div>
            </div>
          ))}
        </div>
  )
}
