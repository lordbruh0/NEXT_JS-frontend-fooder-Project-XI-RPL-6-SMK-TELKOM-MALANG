const DashboardPage = () => {
  return (
    <div className="flex bg-white mx-6">
      <div className="px-5 bg-[#F6F6F6] w-screen rounded-xl">
        <h1 className="text-2xl text-[#F45846] font-semibold p-2">Statistik Data</h1>
                <hr className="border-1 border-[#A8A8A8] w-full"/>
        <div className="flex  justify-between py-6">
            <div className="bg-gray-200 p-4 w-72 rounded-xl">
              <h1 className="text-base text-black pb-5">Number of student</h1>
              <h1 className="text-6xl font-semibold text-[#F45846] pb-2">1200</h1>
              <p className="text-xs">Malang Telkom Vocational School Students</p>
            </div>
            <div className="bg-gray-200 p-2 w-72">
              <h1 className="text-base text-black">Number of student</h1>
            </div>
            <div className="bg-gray-200 p-2 w-72">
              <h1 className="text-base text-black">Number of student</h1>
            </div>
            <div className="bg-gray-200 p-2 w-72">
              <h1 className="text-base text-black">Number of student</h1>
            </div>
        </div>
      </div>
    </div>
  );
};      

export default DashboardPage;
