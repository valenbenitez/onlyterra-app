'use client'
import { MenuOutlined } from '@ant-design/icons';
import styles from './page.module.css'
import { Layout, Button } from 'antd';
import ContentComponent from '@/Screens/ContentScreen';
import DropdownHeader from '@/components/DropdownHeader';

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Header style={{ backgroundColor: '#f1ecdf' }}>
          <div className={styles.betweenContent}>
            <h1 style={{ fontSize: '38px', fontFamily: 'Raleway', fontWeight: 'lighter' }} >Onlyterra</h1>
            {/* <Button icon={<MenuOutlined />} /> */}
            <DropdownHeader />
          </div>
        </Header>
        <Content style={{ backgroundColor: '#FFFFFF80', minHeight: '90svh', padding: '12px' }} >
          <ContentComponent />
        </Content>
        <Footer style={{ backgroundColor: '#f1ecdf', fontFamily: 'Raleway' }}>
          Onlyterra ©{new Date().getFullYear()} Created by benitezvalentin046@gmail.com
        </Footer>
      </main>
    </Layout>
  )
}
