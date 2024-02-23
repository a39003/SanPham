import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperPriceText } from "./style";


const CardComponent = ({image, name, price}) => {
    return(
        <WrapperCardStyle
            hoverable
            headStyle={{width:'200px', height:'200px'}}
            style={{ width: 200 }}
            bodyStyle={{padding:'10px'}}
            cover={<img alt="example" src={image} />}>

            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperPriceText>
            <span style={{marginRight:'8px'}}>10.000.000 d</span>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent