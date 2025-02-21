import ManagerTemplate from "@/components/managerTamplate";

import { title } from "process";
import MenuList from "../menuList";

export const metadata = {
  title: "Transaksi | Ordering System",
  description: "Transaksi page for manager Ordering System",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <ManagerTemplate title="Dashboard" id="dashboard" menuList={MenuList}>
      {children}
    </ManagerTemplate>
  );
};

export default RootLayout;