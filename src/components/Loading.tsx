import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingScreen = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f1ecdf'
        }}>
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                            color: '#8B7355'
                        }}
                        spin
                    />
                }
                tip="Cargando..."
            />
        </div>
    );
};

export default LoadingScreen;