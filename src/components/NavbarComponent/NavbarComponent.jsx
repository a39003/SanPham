import React from "react";
import { WrapperContent, WrapperLableText, WrapperPrice, WrapperTextValue } from "./style";


const NavbarComponent = () => {
    const renderContent = (type, options) =>{
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'price':
                    return options.map((option) => {
                        return (
                            <WrapperPrice>{option}</WrapperPrice>
                        )
                    })
            default:
                return {}
        }
    }
    return(
        <div>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Điện Thoại', 'Ipad', 'Laptop'])}
        </WrapperContent>
        </div>
    )
}

export default NavbarComponent