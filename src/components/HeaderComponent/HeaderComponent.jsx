import { Col, Popover } from "antd";
import React, { useEffect, useState } from "react";
import { WrapperAccout, WrapperContentPopup, WrapperHeader, WrapperText, WrapperTextHeaderSmall } from "./style";
import {UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserbyEmail } from "../../services/UserServices";
import { getAllProduct } from "../../services/ProductServices";



const HeaderComponent = ({isHiddenSearch = false}) => {
    
    const auth  = localStorage.getItem("email")
    const [user, setUser] = useState(null);
    const [testdata, SetTestdata] = useState(null);

    console.log(user)
    const navigate = useNavigate()
    const content = (
        <div>
            <WrapperContentPopup onClick={() => navigate('/profile')}>Thông tin người dùng</WrapperContentPopup>
            <WrapperContentPopup  onClick={()=>{
                localStorage.clear();
                 navigate("/")
            }}>Đăng xuất</WrapperContentPopup>
            {user?.is_admin &&<WrapperContentPopup onClick={() => navigate('/admin')}>Quản lý hệ thống</WrapperContentPopup>}
        </div>
    );
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    console.log(user?.is_admin) // gọi ở đây

  const fetchData = async (email) => {
    const data = await getUserbyEmail(email);
    setUser(data[0])
  };

  const fetchDataProduct = async () => {
    const data = await getAllProduct();
    console.log(data)
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email)
    fetchData(email);
  }, []);
    return(
        <div >
            <WrapperHeader style={{justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset'}}>
                <Col span={6}>
                    <WrapperText  onClick={() => {
                        navigate("/")
                    }}>Shop Đức Anh - Nam Khánh</WrapperText>
                </Col>
                {!isHiddenSearch &&(
                    <Col span={12}>
                        <ButtonInputSearch
                        size="large"
                        textButton="search"  
                        placeholder="input search text"
                        enterButton
                        //onSearch={onSearch}
                        />
                </Col>
                )}

                <Col span={6} style={{display: 'flex', gap: '20px', alignItems:'center'}} >
                    <WrapperAccout>
                            <UserOutlined style={{fontSize:'30px'}}/>
                        
                            {auth != null ? 
                                <>
                                <Popover content={content} trigger="click">
                                    <div style={{ cursor:'pointer' }}>{auth}</div>
                                </Popover>
                                </> : 
                            
                            <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                            <WrapperTextHeaderSmall style={{fontSize:'12px'}}>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
                            <div>
                            <WrapperTextHeaderSmall style={{fontSize:'12px'}}>Tài khoản</WrapperTextHeaderSmall>
                           
                            <CaretDownOutlined />
                        </div>
                            </div>
                        }
                    </WrapperAccout>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent