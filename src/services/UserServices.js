import axios from "axios"

export const loginUser = async (data) => {
    //đây là data truyền 
    console.log(data)
    console.log(data.email)
    let res;
    try {
        res = await axios.post(`${process.env.REACT_APP_API_URL}/login/`,data,{
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        })
        
    } catch (error) {
        return{resD: error.response.data.message, status: false}
    }
    if(res.data.message === "Login success"){
        localStorage.setItem("email", data.email)
        return {resD: res.data.message, status: true}
    }
       
   
}

export const getUserbyEmail = async (email) => {
    console.log(email)
    //đây là data truyền 
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/email=${email}`)
   console.log(res?.data)
    return res?.data;
}


export const signUser = async (data) => {
    //đây là data truyền 
    console.log(data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup/`,data,{
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
   console.log(res)
    return res.data
}




