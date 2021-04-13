import { Layout } from 'antd';
import Appheader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
          <Appheader/>
      </Header>
      <Footer>
          <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
