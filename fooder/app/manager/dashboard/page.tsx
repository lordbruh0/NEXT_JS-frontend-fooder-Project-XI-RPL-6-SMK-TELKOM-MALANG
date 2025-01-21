import AdminCard from '../../../components/data admin';
import Link from 'next/link';
import { arrayAdmin } from '../../../components/data/admin'
import AdminList from '../../../components/data admin';
import StatistikCard from '../../../components/data statistik'

const DashboardPage = () => {
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5 bg-[#F6F6F6] w-auto rounded-xl mb-10">
        <h1 className="text-2xl text-[#F45846] font-semibold p-2">Statistik Data</h1>
        <hr className="border-1 border-[#A8A8A8] w-full" />
        <div className="flex  justify-between py-6">

        <StatistikCard 
          title='Number of student'
          data={1200}
        />
          <div className="bg-gray-200 p-4 w-60 rounded-xl">
            <h1 className="text-base text-black pb-5">Number of student</h1>
            <h1 className="text-6xl font-semibold text-[#F45846] pb-2">1200</h1>
            <p className="text-xs">Malang Telkom Vocational</p>
            <p className="text-xs">School Students</p>
          </div>


          <div className="bg-gray-200 p-4 w-60 rounded-xl">
            <h1 className="text-base text-black pb-5">Number of team</h1>
            <h1 className="text-6xl font-semibold text-[#F45846] pb-2">1200</h1>
            <p className="text-xs">Malang Telkom Vocational</p>
            <p className="text-xs">School Students</p>
          </div>

          <div className="bg-gray-200 p-4 w-60 rounded-xl">
            <h1 className="text-base text-black pb-5">Number of mentor</h1>
            <h1 className="text-6xl font-semibold text-[#F45846] pb-2">1200</h1>
            <p className="text-xs">Malang Telkom Vocational</p>
            <p className="text-xs">School Students</p>
          </div>

          <div className="bg-gray-200 p-4 w-60 rounded-xl">
            <h1 className="text-base text-black pb-5">Number of user</h1>
            <h1 className="text-6xl font-semibold text-[#F45846] pb-2">1200</h1>
            <p className="text-xs">Malang Telkom Vocational</p>
            <p className="text-xs">School Students</p>
          </div>

        </div>
      </div>


      <div className="px-5 bg-[#F6F6F6] w-auto rounded-xl">
        <h1 className="text-2xl text-[#F45846] font-semibold p-2">Admin Data</h1>
        <hr className="border-1 border-[#A8A8A8] w-full" />
        <div className="justify-center items-center py-6">

        <AdminList />

        </div>
      </div>



    </div>
  );
};

export default DashboardPage;
