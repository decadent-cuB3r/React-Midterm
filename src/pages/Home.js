import { useContext } from "react";
import { StoreContext } from "../store"
import { Layout } from 'antd';
import AppNavBar from "../components/NavBar";
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";

const { NavBar, Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-white">
        <AppNavBar />
      </Layout>
      <Layout className="bg-white">
        <Header className="layout-header">
          <AppNavBar />
        </Header>
        <Content className="layout-content">
          <ProductList products={products} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}
