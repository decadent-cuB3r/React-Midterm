import { Card, Layout } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductList from "../components/ProductList";
import AppSlide from "../components/Carousel";
import products from "../json/products.json"
import AppAbout from "../components/About"
import Process from "../components/Process"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="container main-layout">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <AppSlide />
          <AppAbout />
          <Process products={products} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
