import { Col, Row, Image } from "antd";
import React from "react";
import imageProduct from '../../assets/images/test.png'
import imageProductSmall from '../../assets/images/small.png'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperInformationProduct, WrapperInformationTextProduct } from "./style";

const ProductDetailsComponent = () => {
    return(
        <Row style={{ padding:'16px', backgroundColor:'#fff', borderRadius:'4px' }}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={imageProduct} alt="imge product" preview={false}/>
                <Row style={{ paddingTop:'10px', justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="imge small" preview={false}/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WrapperStyleNameProduct>IPhon 12 pro-max</WrapperStyleNameProduct>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>20.000.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperInformationProduct>
                    <div>Thông tin chi tiết sản phẩm</div>
                    <WrapperInformationTextProduct>Máy tính bảng RAM 4 GB cho khả năng xử lý đa nhiệm ổn định, bạn có thể dễ dàng chuyển đổi giữa các ứng dụng mà không có hiện tượng bị đơ hoặc lag. Dung lượng 256 GB cho không gian lưu trữ vừa phải, đủ để đáp ứng nhu cầu chụp ảnh, quay video và một số ấn phẩm đồ họa của người dùng.
                    iPadOS 16 là mảnh ghép hoàn hảo cho hiệu năng của chiếc máy tính bảng này, hệ điều hành này cung cấp một giao diện làm việc vô cùng khoa học, phát huy tối đa sức mạnh của thiết bị. Bên cạnh đó cũng bổ sung và nâng cấp về mặt tính năng như: Live Text trong video, hỗ trợ màn hình rời tốt hơn,… Máy tính bản iPad được trang bị chip Apple A14 Bionic 6 nhân với nguồn sức mạnh vượt trội hỗ trợ bạn chỉnh sửa video 4K trong iMovie, giải quyết các tác vụ đồ họa 2D, 3D với tốc độ ấn tượng. Bên cạnh hiệu năng thì con chip này còn ít tiêu tốn năng lượng quá trình vận hành giúp kéo dài thời gian sử dụng. Từ công việc, học tập cho đến giải trí điều được thực hiện một cách nhanh chóng chỉ với một thiết bị.
                    Đến iPad 10 thì Apple đã quyết định loại bỏ nút Home trên iPad 9, các cạnh được làm mỏng cho cảm giác xem không bị giới hạn. Với 4 phiên bản màu sắc là bạc, hồng, vàng và xanh đáp ứng nhiều sở thích của người dùng hơn
                    Máy tính bảng chỉ mỏng 7 mm và khối lượng 477 g không quá lớn, tương tự như một quyển sách nên bạn có thể dễ dàng để vào balo hoặc túi xách để mang theo đi học, đi làm hoặc trong những chuyến du lịch.Màn hình Retina IPS LCD có kích thước 10.9 inch đủ rộng để hiển thị các nội dung từ văn bản đến hình ảnh. Độ phân giải 1640 x 2360 Pixels mang đến những khung hình sắc nét, màu sắc rực rỡ và nhìn rất trong trẻo.
                    Chiếc máy tính bảng này còn được trang bị công nghệ True Tone có khả năng chỉnh độ sáng màn hình và nhiệt độ màu dựa vào môi trường xung quanh, mang đến cho bạn những nội dung chất lượng nhất.
                    Không chỉ cho người dùng trải nghiệm xem tuyệt vời mà thiết bị này còn cung cấp những âm thanh chân thật thông qua 4 loa ngoài và công nghệ Dolby Atmos</WrapperInformationTextProduct>
                </WrapperInformationProduct>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent