'use client'
import { getProducts } from '@/services/getProducts'
import styles from './productos.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductModal from './components/ProductModal'

export default function Products() {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        getProducts().then((response: any) => {
            setProducts(response)
        })
    }, [])

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Nuestros Productos</h1>
            <div className={styles.productsGrid}>
                {Array.isArray(products) && products.map((product: any) => (
                    <div key={`${product.id}`} className={styles.productCard}>
                        <img
                            src={`${product.foto}`}
                            alt={`${product.nombre}`}
                            width={200}
                            height={200}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productTitle}>{product.nombre}</h3>
                        <p className={styles.productPrice}>${product.precio}</p>
                        <div className={styles.buttonContainer}>
                            <Link target='_blank' href={`https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Queria%20consultar%20el%20precio%20acerca%20de%20${product.nombre}`}>
                                <button className={`${styles.button} ${styles.buyButton}`}>
                                    Comprar
                                </button>
                            </Link>
                            <button
                                className={`${styles.button} ${styles.detailButton}`}
                                onClick={() => setSelectedProduct(product)}
                            >
                                Detalle
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </main>
    )
}
