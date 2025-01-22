import StudentList from "@/components/data student";

const UserPage = () => {
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5 bg-[#F6F6F6] w-auto rounded-xl mb-12">
        <h1 className="text-2xl text-[#F45846] font-semibold p-2">Manage student data</h1>
        <hr className="border=1 border-[#A8A8A8] w-full" />
        <StudentList />
      </div>
      
    </div>
  );
};

export default UserPage;
