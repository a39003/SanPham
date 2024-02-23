import { Button } from "antd";
import React from "react";
import {SearchOutlined } from '@ant-design/icons';
import InpuComponent from "../InputComponent/InputConponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton, bordered, 
        backgroundColorInput = "#fff", 
        backgroundColorButton = 'rgb(13, 92, 182)', colorButton ='#fff' } = props
    return(
        <div style={{display:'flex'}}>
            <InpuComponent
                size={size} bordered={bordered} 
                placeholder={placeholder} style={{background:backgroundColorInput}} 
            />
            <ButtonComponent
                size={size} 
                styleButton={{background: backgroundColorButton, border: !bordered && 'none' }} 
                icon={<SearchOutlined start={{color: colorButton}}/>}
                textButton={textButton}
                styleText={{color: colorButton}}/>
        </div>
    )
}

export default ButtonInputSearch

