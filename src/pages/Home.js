import { Layout } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import AppSlide from "../components/Carousel";
import AppAbout from "../components/About"
import Process from "../components/Process"
import Location from "../components/Location"
import products from "../json/products.json"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <AppSlide />
          <AppAbout />
          <Process products={products} />
          <Location />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
