import { message } from "antd";
import axios from "axios";

export const getProductById = async (productId) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/products/id=${productId}`
  );
  console.log(res?.data);
  return res.data;
};
export const getAllProduct = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/products/page=9/items=5`
  );
  console.log(res?.data);
  return res.data;
};

export const getUserbyEmail = async (email) => {
  console.log(email);
  //đây là data truyền
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/email=${email}`
  );
  console.log(res?.data);
  return res?.data;
};

export const createProduct = async (data) => {
  // console.log(data)
  // const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/`)
  // console.log(res)
  // return res.data
  //127.0.0.1:8000/products/
  // bỏ comment bên dưới nếu muốn data l
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/products/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    message.success("Thêm sản phẩm thành công");

    console.log(res);
    return res.data;
  } catch (error) {
    message.error("Thêm sản thất bại");
  }
};

export const updateProduct = async (data, productId) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/products/id=${productId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    message.success("Sửa sản phẩm thành công!");

    return res.data;
  } catch (error) {
    message.error("Sửa sản phẩm thất bại!");
  }
};

export const deleteProduct = async (productId) => {
  console.log(productId);
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/products/id=${productId}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    message.success("Xóa sản phẩm thành công");
    return res.data;
  } catch (error) {
    message.success("Xóa sản phẩm thất bại");
  }
};
