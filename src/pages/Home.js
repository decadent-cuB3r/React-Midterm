import { Layout } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import AppSlide from "../components/Carousel";
import AppAbout from "../components/About"
import Location from "../components/Location"

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
