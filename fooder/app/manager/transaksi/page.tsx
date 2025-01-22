const TransaksiPage = () => {
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5  w-auto rounded-xl mb-12 flex">

        <div className="h-screen w-screen bg-gray-50 p-5 rounded-xl">
          <div className="flex gap-10 justify-between">


            <div className="flex gap-2">
              <div className="rounded-full w-6 h-6 bg-black" />
              <div>
                <p className="font-semibold text-lg mb-1">1,000,000</p>
                <p className="text-xs text-gray-400">Jumlah Pengguna Telkom Society</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="rounded-full w-6 h-6 bg-black" />
              <div>
                <p className="font-semibold text-lg mb-1">Rp 54,000,000</p>
                <p className="text-xs text-gray-400">Total Pedapatan Saat Ini</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="rounded-full w-6 h-6 bg-black" />
              <div>
                <p className="font-semibold text-lg mb-1">240</p>
                <p className="text-xs text-gray-400">Jumlah Kontributor</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="rounded-full w-6 h-6 bg-black" />
              <div>
                <p className="font-semibold text-lg mb-1">Rp 12,000,000</p>
                <p className="text-xs text-gray-400">Jumlah Pendapatan Setiap Bulan</p>
              </div>
            </div>

            <div className="flex gap-2">\
              <div>
                
                <p className="text-xs text-gray-400">Jumlah Pendapatan Setiap Bulan</p>
              </div>
            </div>

          </div>
        </div>

        <div className="h-screen w-2/5 bg-blue-100">
        </div>
      </div>
    </div>
  );
};

export default TransaksiPage;
