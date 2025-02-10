import ManagerTemplate from "@/components/managerTamplate";
import MenuList from "../menuList";
import { title } from "process";

export const metadata = {
  title: "User | Ordering System",
  description: "User page for manager Ordering System",
};

type PropsLayout = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
  return (
    <ManagerTemplate title="User Data" id="user" menuList={MenuList}>
      {children}
    </ManagerTemplate>
  );
};

export default RootLayout;
