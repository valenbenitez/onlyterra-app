'use client'
import React from 'react';
import { MenuOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Estoy%20interesado%20en%20...">
                Contactate con nosotros
            </a>
        ),
        icon: <QuestionCircleOutlined />,
    },
    {
        key: '2',
        label: (
            <Link href="/productos">
                Productos
            </Link>
        ),
        icon: <SmileOutlined />,
        disabled: false,
    },
];

const DropdownHeader: React.FC = () => (
    <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <MenuOutlined />
            </Space>
        </a>
    </Dropdown>
);

export default DropdownHeader;