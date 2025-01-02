import { ProductCardProps } from '@/models/product'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../productos.module.css'

export const ProductCard = ({ product, onProductSelect }: ProductCardProps) => {
    return (
        <div className={styles.productCard}>
            <Image
                src={product.foto}
                alt={product.nombre}
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
                            onClick={() => onProductSelect(product)}
                        >
                            Detalle
                        </button>
                    </>
                ) : (
                    <>
                        <label>Sin stock</label>
                    </>
                ) }
            </div>
        </div>
    )
}