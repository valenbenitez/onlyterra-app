import { useEffect, useState } from 'react'
import styles from './content.module.css'
import { getProducts } from '@/services/getProducts'
import ProductCard from '@/components/ProductCard'
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ContentComponent() {
    const [products, setProducts] = useState<any>([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <div className={styles.container}>
            {Array.isArray(products) && products.map((product: any) => (
                <ProductCard key={product.nombre} imageUrl={product.foto} title={product.nombre} price={product.precio} stock={product.stock} />
            ))}
            <Link href={'https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Queria%20consultar%20el%20precio%20acerca%20de...'} target='_blank' >
                <FloatButton badge={{ count: 1, color: 'red' }} icon={<WhatsAppOutlined size={24} />} />
            </Link>
        </div>
    )
}
