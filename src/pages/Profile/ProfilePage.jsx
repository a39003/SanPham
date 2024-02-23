import React, { useState } from "react";
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from "./style";
import InputForm from "../../components/InputForm/InputForn";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector } from "react-redux";


const ProfilePage = () => {
    const data = useSelector((state) => state.data) 
    const  [email, setEmail] = useState(data?.email)
    const  [passwrod, setPassword] = useState(data?.passwrod)
    const handleOnchangeEmail = () => {

    }
    const handleOnchangePassword = () => {

    }
    const handleUpdate = () => {

    }

    return(
        <div style={{ width: '1270px', margin:'0 auto', height:'500px'}}>
          <WrapperHeader>Thông tin người dùng</WrapperHeader>
          <WrapperContentProfile>
            <WrapperInput>
                <WrapperLabel htmlFor="email">Email</WrapperLabel>
                <InputForm style={{ width:'300px'}} id="email"  value={email} onChange={handleOnchangeEmail}/>
                <ButtonComponent
                
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    with: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px',
                }}
                textButton={'Cập nhập'}
                styleText={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700'}}>
                </ButtonComponent>
            </WrapperInput>
            <WrapperInput>
            <WrapperLabel htmlFor="password">PassWord</WrapperLabel>
            <InputForm style={{ width:'300px'}} id="password"  value={passwrod} onChange={handleOnchangePassword}/>
            <ButtonComponent
            
            onClick={handleUpdate}
            size={40}
            styleButton={{
                height: '30px',
                with: 'fit-content',
                borderRadius: '4px',
                padding: '2px 6px 6px',
            }}
            textButton={'Cập nhập'}
            styleText={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700'}}>
            </ButtonComponent>
        </WrapperInput>
          </WrapperContentProfile>
        </div>
    )
}

export default ProfilePage