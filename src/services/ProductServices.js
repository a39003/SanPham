import axios from "axios"

export const getAllProduct = async (data) => {

    console.log(data)
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/page=1/items=5`,{
        headers: {
            'Content-Type': 'application/json' 
        }
    })
   console.log(res)
    return res.data
}


export const createProduct = async (data) => {
    // console.log(data)
    // const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/`)
    // console.log(res)
    // return res.data
    http://127.0.0.1:8000/products/
    // bỏ comment bên dưới nếu muốn data l
    console.log(data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/products/`,data,{
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
   console.log(res)
    return res.data
}

export const updateProduct = async (data) => {
   
    console.log(data)
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/products/`,data,{
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
   console.log(res)
    return res.data
}


export const deleteProduct = async (productId) => {
   
    console.log(productId)
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/products/id=${productId}`,{
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
    return res.data
}