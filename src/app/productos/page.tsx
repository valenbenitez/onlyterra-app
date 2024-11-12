'use client'
import { getProducts } from '@/services/getProducts'
import styles from './productos.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Products() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then((response:any) => {
            setProducts(response)
        })
    }, [])

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Nuestros Productos</h1>
            <div className={styles.productsGrid}>
                {Array.isArray(products) && products.map((product:any) => (
                    <div key={`${product.nombre}`} className={styles.productCard}>
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
                            <button className={`${styles.button} ${styles.buyButton}`}>
                                Comprar
                            </button>
                            <Link href={`/productos/${product.id}`}>
                                <button className={`${styles.button} ${styles.detailButton}`}>
                                    Detalle
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
