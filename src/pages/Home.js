import { Layout } from 'antd';
import Appheader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import AppSlide from "../components/Carousel"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="container main-layout">
      <Layout>
      <Header className="layout-header">
          <Appheader/>
      </Header>
      <Content>
        <AppSlide />
      </Content>
      <Footer>
          <AppFooter />
      </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
