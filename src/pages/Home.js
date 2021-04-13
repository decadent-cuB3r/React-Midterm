import { Layout } from 'antd';
import AppNavBar from "../components/NavBar"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
          <AppNavBar title="test" />
      </Header>
      <Footer>
          <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
