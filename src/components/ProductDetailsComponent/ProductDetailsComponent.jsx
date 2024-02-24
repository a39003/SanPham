import { Col, Row, Image } from "antd";
import React, { useEffect, useState } from "react";
import imageProduct from "../../assets/images/test.png";
import imageProductSmall from "../../assets/images/small.png";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperInformationProduct,
  WrapperInformationTextProduct,
} from "./style";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductServices";

const ProductDetailsComponent = () => {
  const { productId } = useParams();
  const [data, setData] = useState();
  console.log(data);
  const fetchData = async () => {
    const data1 = await getProductById(productId);
    setData(data1);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Row
      style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
    >
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={data?.image} alt="imge product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={data?.image}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imge small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>{data?.name}</WrapperStyleNameProduct>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>{data?.unitPrice}</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperInformationProduct>
          <div>Thông tin chi tiết sản phẩm</div>
          <WrapperInformationTextProduct>
            {data?.description}
          </WrapperInformationTextProduct>
        </WrapperInformationProduct>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
