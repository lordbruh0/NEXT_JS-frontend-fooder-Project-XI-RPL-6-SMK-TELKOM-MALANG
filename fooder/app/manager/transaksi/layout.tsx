import ManagerTemplate from "@/components/managerTamplate";
import MenuList from "../menuList";
import { title } from "process";

export const metadata = {
  title: "Transaksi | Ordering System",
  description: "Transaksi page for manager Ordering System",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <ManagerTemplate title="Transaksi" id="transaksi" menuList={MenuList}>
      {children}
    </ManagerTemplate>
  );
};

export default RootLayout;
