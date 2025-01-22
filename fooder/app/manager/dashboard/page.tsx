import AdminList from '../../../components/data admin';
import StatistikList from '../../../components/data statistik'

const DashboardPage = () => {
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5 bg-[#F6F6F6] w-auto rounded-xl mb-10">
        <h1 className="text-2xl text-[#F45846] font-semibold p-2">Statistik Data</h1>
        <hr className="border-1 border-[#A8A8A8] w-full" />
        <div className="py-6">
          <StatistikList />
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