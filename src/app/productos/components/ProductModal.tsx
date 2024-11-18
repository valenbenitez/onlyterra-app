'use client'
import Link from 'next/link';
import styles from './ProductModal.module.css'

interface ProductModalProps {
    product: {
        foto: string;
        nombre: string;
        precio: number;
        descripcion?: string;
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
                <img
                    src={product.foto}
                    alt={product.nombre}
                    className={styles.productImage}
                    style={{ height: '350px' }}
                />
                <h3 className={styles.productTitle}>{product.nombre}</h3>
                <p className={styles.productPrice}>${product.precio}</p>
                <p className={styles.productDescription}>
                    {product.descripcion || 'No hay descripción disponible'}
                </p>
                <Link target='_blank' href={`https://api.whatsapp.com/send?phone=541137777357&text=Hola!%20Queria%20consultar%20el%20precio%20acerca%20de%20${product.nombre}`}>
                    <button className={`${styles.button} ${styles.buyButton}`}>
                        Comprar
                    </button>
                </Link>
            </div>
        </div>
    )
}