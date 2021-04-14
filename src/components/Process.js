import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import ProductImage from "./ProcessItem";
import arrow from "../images/right-arrow.png";

export default function Process({ products }) {
  return (
    <div className="process-layout">
      <div className="process-intro">
        <div className="process-title">機種介紹</div>
        <hr className="process-line"></hr>
        <Row className="intro-image" gutter={[32, 32]}>
          {products.map((product) => (
            <Col
              key={product.id}
              sm={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
            >
              <ProductImage product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="process-order">
        <div className="process-arrow-between"></div>
        <div className="order-number-block">
          <div className="block-circle">1</div>
          <img className="block-arrow" src={arrow}></img>
          <div className="block-circle">2</div>
          <img className="block-arrow" src={arrow}></img>
          <div className="block-circle">3</div>
          <img className="block-arrow" src={arrow}></img>
          <div className="block-circle">4</div>
        </div>
        <div className="order-number-text">
          <div class="number-intro">銷售人員與客戶簽訂產品訂購單</div>
          <div class="number-intro">專業技師現場安裝電動麻將桌</div>
          <div class="number-intro">客戶電動麻將桌實際操作,保養說明</div>
          <div class="number-intro">
            客戶收取工作單客戶聯及電
            <br />
            動麻將桌產品保固卡
          </div>
        </div>
        <Link to="/">
          <div className="order-btn">深入了解我們的服務</div>
        </Link>
      </div>
    </div>
  );
}
