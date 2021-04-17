import { useState } from "react";
import { Row, Col } from "antd";
import { Select, Descriptions, Empty } from "antd";
import AddToCartComplex from "./AddToCartComplex";
import Previous from "./previousPage";
import TableDetailImg from "./TableDetailImg";

const { Option } = Select;

function ProductDetail({ product }) {
  const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
  const [img, setImg] = useState(product.image);

  return (
    <div>
      <Row>
        <Col lg={{ span: 8, offset: 1 }}>
          <Previous />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col lg={{ span: 8, offset: 4 }} md={{ span: 6 }}>
          <img alt="" className="product-image" src={img} />

          <Descriptions title="購買資訊">
            <Descriptions.Item label={product.description_payment[0]}>
              {product.description_payment[1]}, {product.description_payment[2]}
            </Descriptions.Item>
            <Descriptions.Item label={product.description_payment[3]}>
              {product.description_payment[4]}, {product.description_payment[5]}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col lg={{ span: 8, offset: 1 }}>
          <div>
            <h1 className="product-name product-name--large">{product.name}</h1>
            <p className="product-description--border">
              {product.description.map((description) => (
                <div className="product-description">{description}</div>
              ))}
            </p>
            <div className="product-price-wrap">
              <p className="product-price product-price--large">
                ${product.price}.00
              </p>
              <p className="product-status">
                商品囤貨: {product.countInStock > 0 ? "尚有存貨" : "已售罄"}
              </p>
              <div className="product-qty">
                數量:
                <Select
                  defaultValue={qty}
                  className="select-style"
                  onChange={(val) => setQty(val)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <Option key={x + 1} value={x + 1}>
                      {x + 1}
                    </Option>
                  ))}
                </Select>
              </div>
              <p className="product-qty">總價: ${product.price * qty}</p>
            </div>
            <AddToCartComplex product={product} qty={qty} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 10, offset: 7 }}>
          {product.isTable === true ? (
            <TableDetailImg />
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
