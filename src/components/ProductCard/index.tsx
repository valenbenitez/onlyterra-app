import React from 'react';
import { Card } from 'antd';
import { DollarOutlined, EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({ imageSrc, title, price }: { imageSrc: string; title: string; price: string }) => (
    <Card
        hoverable
        style={{ width: '80%' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <EyeOutlined />
                <label>Detalle</label>
            </div>,
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <DollarOutlined />
                <label>Comprar</label>
            </div>,
        ]}
    >
        <Meta title={title} description={`Precio de $${price}`} />
    </Card>
);

export default ProductCard;