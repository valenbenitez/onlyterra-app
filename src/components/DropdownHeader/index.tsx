import React from 'react';
import { MenuOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Queria%20consultar%20el%20precio%20acerca%20de...">
                Contactate con nosotros
            </a>
        ),
        icon: <QuestionCircleOutlined />,
    },
    // {
    //     key: '2',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //             2nd menu item (disabled)
    //         </a>
    //     ),
    //     icon: <SmileOutlined />,
    //     disabled: true,
    // },
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