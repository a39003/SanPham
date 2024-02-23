import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../../utils";
import { AppstoreOutlined} from '@ant-design/icons'
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AdminProduct from "../../components/AdminProduct/AdminProduct";


const AdminPage = () => {
  const items = [

    getItem('Sản phẩm', 'product', <AppstoreOutlined />), 


  ];

  
  const [keySelected, setkeySelected] = useState('')

  const renderPage = (key) => {
    switch(key) {
      case 'product':
        return (
          <AdminProduct/>
        )
        default:
          <></>
    }
  }
  
  const handleOnCLick = ({key}) => {
    setkeySelected(key)
  }
  console.log('keySelected', keySelected)
    return(
      <>
        <HeaderComponent isHiddenSearch />
        <div style={{display: 'flex',width:'256px'}}>
          <Menu
            mode="inline"
            style={{
              with:256,
              height:'100vh',
              boxShadow: '1px 1px 2px #ccc'
            }}
            items={items}
            onClick={handleOnCLick}/>
            <div style={{ flex: 1, padding:'15px'}}>
              {renderPage(keySelected)}
            </div>
          </div>
        </>
    )
}

export default AdminPage