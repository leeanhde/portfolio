import { Layout } from "antd";
import HeaderLayout from "./HeaderLayout";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout className="h-screen overflow-hidden">
      <HeaderLayout />
      <Content className="flex-1 overflow-hidden">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
