import React, { useEffect } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMoro, WrapperProduct, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import *as ProductServices from '../../services/ProductServices';
import { getUserbyEmail } from "../../services/UserServices";


const HomePage = () => {
    const arr=['Điện thoại', 'Ipad', 'LapTop']


    


    
    return(
        <>
        <div style={{width:'1270px', margin:'0 auto'}}>
        <WrapperTypeProduct style={{gap:'24px', padding:'10px 0 0 0'}}>
            {arr.map((item) => {
                return(
                    <TypeProduct name={item} key={item}/>
                )
            })}
        </WrapperTypeProduct>
        </div>
        <div className='body' style={{width:'100%', backgroundColor:'#efefef'}}>
            <div id='container' style={{width:'1270px', margin:'0 auto', height:'1000px'}}>
                <SliderComponent arrImages = {[slider1, slider2, slider3]} />
                <WrapperProduct>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProduct>
                <div style={{ width:'100%', display:'flex', justifyContent:'center', marginTop:'10px' }}>
                    <WrapperButtonMoro textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color:'rgb(11, 116, 229)', width:'240px',
                        height:'38px', borderRiadius: '4px'
                    }}  styleTextButton={{fontWeight: 500 }}/>
                </div>
            </div>
        </div>
        </>

    )
}

export default HomePage