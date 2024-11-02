import React, { useState } from 'react';
import { Card, Button, Typography, Modal } from 'antd';
import style from './productCard.module.css';
import { DollarOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

interface ProductCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    price?: string;
    stock?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title = "Amazing Product",
    description = "This is a fantastic product that you'll love. It solves all your problems and makes your life easier.",
    imageUrl = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    price = "$99.99",
    stock = "si"
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src={imageUrl} className={style.productImage} />}
                className={style.productCard}
                actions={stock === "si" ? [
                    <div
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        onClick={showModal}
                    >
                        <EyeOutlined />
                        <label>Detalle</label>
                    </div>,
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DollarOutlined />
                        <Link href={`https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Me%20interesa%20el%20siguiente%20producto%20${title}`}>
                            <label>Comprar</label>
                        </Link>
                    </div>,
                ] : [
                    <div style={{ height: '35px' }} >Sin stock</div>
                ]}
            >
                <Meta title={title} description={`$${price}`} />
                {/* <Paragraph className={style.productPrice}>$ {price}</Paragraph> */}
                {/* <Title level={4} className={style.productTitle}>{title}</Title>
                <Paragraph className={style.productDescription}>{description}</Paragraph>
                <Paragraph className={style.productPrice}>$ {price}</Paragraph> */}
            </Card>

            <Modal
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <img
                    alt={title}
                    src={imageUrl}
                    style={{ width: '100%' }}
                />
            </Modal>
        </>
    );
};

export default ProductCard;
