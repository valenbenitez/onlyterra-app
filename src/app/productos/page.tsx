'use client'
import { getProducts } from '@/services/getProducts'
import styles from './productos.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductModal from './components/ProductModal'
import Image from 'next/image'
import { useProducts } from '@/hooks/useProducts'
import { CategoryFilter } from './components/CategoryFilter'

export default function Products() {
    const {
        products,
        categories,
        selectedCategory,
        selectedProduct,
        isLoading,
        error,
        setSelectedCategory,
        setSelectedProduct
    } = useProducts()

    if (isLoading) return <div className={styles.loading}>Cargando productos...</div>
    if (error) return <div className={styles.error}>{error}</div>

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Nuestros Productos</h1>
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <div className={styles.productsGrid}>
                {Array.isArray(products) && products.map((product: any) => (
                    <div key={`${product.id}`} className={styles.productCard}>
                        <Image
                            src={`${product.foto}`}
                            alt={`${product.nombre}`}
                            width={200}
                            height={200}
                            className={styles.productImage}
                            priority={false}
                            onError={(e: any) => {
                                e.target.src = '/placeholder.jpg'
                            }}
                        />
                        <h3 className={styles.productTitle}>{product.nombre}</h3>
                        <p className={styles.productPrice}>${product.precio}</p>
                        <div className={styles.buttonContainer}>
                            {product.stock === 'si' ? (
                                <>
                                    <Link
                                        target='_blank'
                                        href={`https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Estoy%20interesado%20en%20${product.nombre}`}
                                    >
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
                                </>
                            ) : (
                                    <label
                                        className={`${styles.button} ${styles.detailButton}`}
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        Sin stock
                                    </label>
                            )}
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
