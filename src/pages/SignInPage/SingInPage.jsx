import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForn";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from "../../assets/images/logo.png";
import { Image } from "antd";
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserServices'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Peding from "../../components/PendingComponent/Pending";
import * as message from '../../components/Message/Message'


const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnchangeEmail = ( value) => {
        setEmail(value)
    }

    const handleOnchangePassword = ( value) => {
        setPassword(value)
    }

    const navigate = useNavigate()

   const mutation = useMutationHooks(
    //form ở đây truyền vào
     data => UserService.loginUser(data)
     
   )

   const {data, isPending, isError, isSuccess} = mutation

   useEffect(() => {
    if(data?.status === true) {
        message.success(data.resD)
        navigate("/")
    }else if(data?.status === false) {
        message.error(data.resD)
    }
   }, [isSuccess,isError])
    

    const handleNavigateSingup = () => {
        navigate('/sign-up')
    }
    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
        console.log('sign-in', email, password)
    }

    return(
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
            <div style={{ width:'800px', height:'445px', borderRadius:'6px', background:'#fff', display:'flex'}}>
                <WrapperContainerLeft>
                    <h1>Xin Chào</h1>
                    <p>Đăng nhập hoặc đăng ký tài khoản</p>
                    <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" 
                       value={email} onChange={handleOnchangeEmail}/>
                    <div style={{position: 'relative'}}>
                        <span
                            onClick={ () => setIsShowPassword(!isShowPassword)} 
                            style={{
                            zIndex: 10, 
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}>{
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled />
                        )}
                        </span>
                        <InputForm placeholder="password" type={ isShowPassword ? "text" : "password"}
                            value={password} onChange={handleOnchangePassword}/>
                    </div>
                    {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                    <Peding isPending={isPending}>
                        <ButtonComponent
                        disabled={!email.length || !password.length} 
                        onClick={handleSignIn}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            with: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px',
                        }}
                        textButton={'Đăng nhập'}
                        styleText={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}>
                        </ButtonComponent>
                    </Peding>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight> </p>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSingup}>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={logo} preview={false} alt="logo" height="203px" width="203px" />
                    <h4>Mua iphon </h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignInPage