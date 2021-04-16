import { Layout } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function DetailPage(match) {
  const product = Products.find((x) => x.id === match.params.id);
  return (
    <Layout className="container main-layout">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <ProductDetail product={product} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DetailPage;
