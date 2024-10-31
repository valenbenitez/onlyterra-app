import React from 'react';
import { MenuOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
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
    // {
    //     key: '3',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //             3rd menu item (disabled)
    //         </a>
    //     ),
    //     disabled: true,
    // },
    // {
    //     key: '4',
    //     danger: true,
    //     label: 'a danger item',
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