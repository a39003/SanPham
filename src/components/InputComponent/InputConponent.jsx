import { Input } from "antd";
import React from "react";


const InpuComponent = ({size, bordered, placeholder, style, ...rests}) => {
    return(
        <Input 
        size={size} 
        bordered={bordered} 
        placeholder={placeholder} 
        style={style}
        {...rests} 
    />
    )
}

export default InpuComponent