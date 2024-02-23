import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForn";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from "../../assets/images/logo.png";
import { Image } from "antd";
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from '../../services/UserServices'
import Loading from "../../components/PendingComponent/Pending";
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnchangeEmail = ( value) => {
        setEmail(value)
    }

    const mutation = useMutationHooks(
        //form ở đây truyền vào
         data => UserService.signUser(data)
       )

    const {data, isPending, isSuccess, isError} = mutation
    

    useEffect(() => {
       
        if(data?.status === true) {
            message.success(data.message)
            handleNavigateSingIn()
        }else if(data?.status === false) {
            message.error(data.message)
        }
        console.log(isSuccess)
    }, [isSuccess, isError])

    const handleOnchangePassword = ( value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = ( value) => {
        setConfirmPassword(value)
    }

    const navigate = useNavigate()

    const handleNavigateSingIn = () => {
        navigate('/sign-in')
    }
    const handleSignUp = () => {
        mutation.mutate({email, password, confirmPassword})
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
                        <InputForm placeholder="password" style={{marginBottom: '10px'}} type={ isShowPassword ? "text" : "password"} 
                            value={password} onChange={handleOnchangePassword}/>
                    </div>
                    <div style={{position: 'relative'}}>
                        <span
                            onClick={ () => setIsShowConfirmPassword(!isShowConfirmPassword)}  
                            style={{
                            zIndex: 10, 
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}>{
                        isShowConfirmPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled />
                        )}
                        </span>
                        <InputForm placeholder="comfirm password" type={ isShowConfirmPassword ? "text" : "password"}
                          value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
                    </div>
                    {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.String}</span>}
                    <Loading isPending={isPending}>
                        <ButtonComponent 
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px',
                            }}
                        textButton={'Đăng ký'}
                        styleText={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}>
                        </ButtonComponent>
                    </Loading>
                    <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSingIn}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={logo} preview={false} alt="logo" height="203px" width="203px" />
                    <h4>Mua iphon </h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage