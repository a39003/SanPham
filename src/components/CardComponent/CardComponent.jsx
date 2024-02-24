import React, { useEffect } from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperPriceText } from "./style";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ item }) => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={<img alt="example" src={item.image} />}
    >
      <StyleNameProduct>{item.name}</StyleNameProduct>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>{item.price} d</span>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
