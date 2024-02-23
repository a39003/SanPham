import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
   flex-basis: unset; 
   display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;    
`
export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px; 
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;   
    font-weight: 500; 
    padding: 10px;
`

export const WrapperInformationProduct = styled.h1`

`

export const WrapperInformationTextProduct = styled.div`
    color: rgb(36, 36, 36); 
    width: 650px;
    height: 400px;
    margin-top: 8px; 
    font-size: 15px;   
    overflow: scroll;
    padding: 10px;
    word-break: break-word;
    font-weight: 300;
`