import React, { useEffect, useState } from "react";
import { WrapperHeader } from "../AdminProduct/style";
import {PlusCircleFilled, DeleteOutlined, EditOutlined, SearchOutlined} from "@ant-design/icons"
import { Button, Form, Input, Space } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import InpuComponent from "../InputComponent/InputConponent";
import { WrapperUploadFile } from "../../components/AdminProduct/style";
import { getBase64 } from "../../utils";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useRef } from 'react'
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../../services/ProductServices";
import * as message from '../../components/Message/Message'


const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowSelected, setRowSelected] = useState('')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);


    const [stateProduct, setSateProduct] = useState({
        name: '',
        price: '',
        image: '',
        imageFile:null,
        textarea: '',
        quantity:1,
        category:'',
        productOrigin:'',
        provider:''
    })
    console.log(stateProduct)
    const [products, setProducts] = useState([])
    const [productItem, setProductItem] = useState(null)

    const [form] = Form.useForm();

    const handleCancel = () => {
        setIsModalOpen(false)
        setSateProduct({
          name: '',
          price: '',
          image: '',
          imageFile:null,
          textarea: '',
          quantity:1,
          category:'',
          productOrigin:'',
          provider:''
        })
        form.resetFields()
    };

    // Xu ly tao san phảm mới
    const onFinish = () => {
        const data = {
            name:stateProduct.name,
            image: stateProduct.imageFile,
            unitPrice: parseInt(stateProduct.price),
            description:stateProduct.textarea,
            quantity:stateProduct.quantity,
            category:stateProduct.category,
            productOrigin:stateProduct.productOrigin,
            provider:stateProduct.provider
        }
        console.log('finish', data)

        createProduct(data);
        
    }

    const { data1 , isError, isSuccess} = 

    useEffect(() => {
      if(isSuccess && data1?.status === 'Ok') {
        message.success()
        setIsModalOpen()
      }else if(isError){
        message.error()
      }
    },[isSuccess, isError])



    // Xử ly udate sản phẩm call ở nút submit update
    const onUpdateProduct = () => {
      const data = {
          name:stateProduct.name,
          image: stateProduct.imageFile,
          unitPrice: parseInt(stateProduct.price),
          description:stateProduct.textarea,
          quantity:stateProduct.quantity,
          category:stateProduct.category,
          productOrigin:stateProduct.productOrigin,
          provider:stateProduct.provider
      }
      console.log('finish', data)

      updateProduct(data);
  }

  
    const handleOnchange = (e) => {
        setSateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    
    }

    const handleOnchangeAvatar = async (files) => {
        console.log(files)

        const file = files.fileList[0]
        if(!file){
            setSateProduct({
                ...stateProduct,
                image: null
            })
        }else if(file && !file?.url && !file?.preview) {
            file.preview = await getBase64(file.originFileObj);
            // kierm tra xem can đầu vào là gì
            setSateProduct({
                ...stateProduct,
                image: file.preview,
                imageFile:file.originFileObj
            })
            
        }
        
    }


    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    }
    const handleDeleteProduct = () => {
      // console.log(record)
        deleteProduct(productId);
    }
    
    const handleDetailsProduct = (record) => {
        console.log(record)
        setIsOpenDrawer(true)
        setSateProduct(record)
        console.log('rowSelected', rowSelected)

    }

    const fetchDataProduct = async () => {
        const data = await getAllProduct();
        setProducts(data?.data)
        console.log(data)
      };
    
    useEffect(() => {

        fetchDataProduct();
    }, []);

    useEffect(() => {
        setProductItem(stateProduct)
    }, [stateProduct,handleDetailsProduct])

   

    const [productId, setProductId] = useState();
    


    const renderAction = (record) => {
        return(
          <div>
              <DeleteOutlined style={{color:'red', fontSize:'30px', cursor:'pointer'}} onClick={() => {
                setIsModalOpenDelete(true);
                setProductId(record.id)
                console.log(record)
              }}/>
              <EditOutlined
        style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }}
        onClick={() => {
          handleDetailsProduct(record);
        }} 
      />
          </div>
        )
      }

      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
      };
      const handleReset = (clearFilters) => {
        clearFilters();
        // setSearchText('');
      };
    
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <InpuComponent
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1890ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },

      });
    

      const columns = [
        {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a,b) => a.name.lenght - b.name.lenght,
        ...getColumnSearchProps('name')
        },
        {
        title: 'Type',
        dataIndex: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            filters: [
              {
                text: '>= 50',
                value: '>=',
              },
              {
                text: '<= 50',
                value: '<=',
              }
            ],
            onFilter: (value, record) => {
              if (value === '>=') {
                return record.price >= 50
              }
              return record.price <= 50
            },
          },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text, record) => renderAction(record)
          }
    ];
    const dataTable = [
        {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        },
        {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        },
        {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        },
        {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sydney No. 1 Lake Park',
        },
    ];

    return(
        <div>
            <WrapperHeader>Quản Lý Sản Phẩm</WrapperHeader>
            <div style={{marginTop:'16px'}}>
                <Button style={{
                    height:'150px', 
                    width:'150px', 
                    borderRadius:'6px', border:'dashed'}}>
                <PlusCircleFilled style={{fontSize: '40px'}} onClick={() => setIsModalOpen(true)}/>
                </Button>
            </div>
            <div style={{marginTop:'20px', width:'1300px', height:'900px'}}>
                <TableComponent onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setRowSelected(record)
                        }
                    };
                }} columns={columns} data={products}/>
            </div>
            <ModalComponent title="Tạo sản phẩm" open={isModalOpen}  onCancel={handleCancel} footer={null} >
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item 
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                        <InpuComponent value={stateProduct.name} onChange={handleOnchange} name="name"/>
                        </Form.Item>
                    
                        <Form.Item 
                        label="Type"
                        name="category"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                        >

                        <InpuComponent  value={stateProduct.type} onChange={handleOnchange} name="category"/>
                        </Form.Item>

                        <Form.Item 
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your price!' }]}
                        >

                        <InpuComponent  value={stateProduct.price} onChange={handleOnchange} name="price"/>
                        </Form.Item>

                        <Form.Item
                        label="Product-information"
                        name="product-information"
                        rules={[{ required: true, message: 'Please input product information!' }]}
                    >
                        <Input.TextArea value={stateProduct.textarea} onChange={handleOnchange} name="textarea"/>
                    </Form.Item>

                        <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProduct?.image && (
                                <img src={stateProduct?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} alt="avatar"/>
                            )}
                        </WrapperUploadFile>
                    </Form.Item>
                    
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>

            </ModalComponent>
            <DrawerComponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="50%"> 
                <Form
                    
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="on"
                >
                    <Form.Item 
                    label="Name1"
                    name="name1"
                    
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                    <InpuComponent  defaultValue={stateProduct?.name} value={stateProduct?.name}  onChange={handleOnchange} name="name1"/>
                    </Form.Item>
                
                    <Form.Item 
                    label="Type"
                    name="category"
                    rules={[{ required: true, message: 'Please input your type!' }]}
                    >

                    <InpuComponent defaultValue={stateProduct?.category}  value={stateProduct?.type} onChange={handleOnchange} name="category"/>
                    </Form.Item>

                    <Form.Item 
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                    >

                    <InpuComponent defaultValue={stateProduct?.unitPrice}  value={stateProduct?.unitPrice} onChange={handleOnchange} name="price"/>
                    </Form.Item>

                    <Form.Item
                    label="Product-information"
                    name="product-information"
                    rules={[{ required: true, message: 'Please input product information!' }]}
                >
                    <Input.TextArea defaultValue={stateProduct?.description} value={stateProduct.textarea} onChange={handleOnchange} name="textarea"/>
                </Form.Item>

                    <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input!' }]}
                >
                    <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                        <Button>Select File</Button>
                        {stateProduct?.image && (
                            <img src={stateProduct?.image} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        )}
                    </WrapperUploadFile>
                </Form.Item>
                
                    <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </DrawerComponent>
            <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete}  onCancel={handleCancelDelete} onOk={handleDeleteProduct}  >
                <div>Bạn có chắc xóa sản phẩm này không</div>
            </ModalComponent>
        </div>
    )
}

export default AdminProduct