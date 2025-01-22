import ManagerTemplate from "@/components/managerTamplate";
import MenuList from "../menuList";
import { title } from "process";

export const metadata = {
  title: "Menu | Ordering System",
  description: "Menu page for manager Ordering System",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <ManagerTemplate title="Team Data" id="menu" menuList={MenuList}>
      {children}
    </ManagerTemplate>
  );
};

export default RootLayout;
