'use client'
import Link from 'next/link';
import styles from './productModal.module.css'
import Image from 'next/image';

interface ProductModalProps {
    product: {
        foto: string;
        nombre: string;
        precio: number;
        descripcion?: string;
        stock?: string;
    };
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
                <Image
                    src={product.foto}
                    alt={product.nombre}
                    className={styles.productImage}
                    style={{ height: '350px' }}
                    width={200}
                    height={200}
                    priority={false}
                    onError={(e: any) => {
                        e.target.src = '/placeholder.jpg'
                    }}
                />
                <h3 className={styles.productTitle}>{product.nombre}</h3>
                <p className={styles.productPrice}>${product.precio}</p>
                <p className={styles.productDescription}>
                    {product.descripcion || 'No hay descripción disponible'}
                </p>
                <Link target='_blank' href={`https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Estoy%20interesado%20en%20${product.nombre}`}>
                    <button disabled={product?.stock === 'si' ? false : true} className={`${styles.button} ${styles.buyButton}`}>
                        {product?.stock === 'si' ? 'Comprar' : 'Producto sin stock'}
                    </button>
                </Link>
            </div>
        </div>
    )
}