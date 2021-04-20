import { Row, Col, Select } from "antd";
import { useState } from "react";
import { compareItemAdd, compareItemRemove } from "../actions"

const { Option } = Select;

export default function CompareDetail({ products }) {
  const [selectItem, setSelectItem] = useState(products[0]["name"]);
  return (
    <div>
      <h1 className="compareDetail-title">比較商品</h1>
      <Select
        defaultValue={selectItem}
        className=""
        onChange={(val) => setSelectItem(val)}
      >
        {[...Array.products].map((name) => (
          <Option val={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
