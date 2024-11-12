import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/services/getProducts'
import { Button } from 'antd';


export default async function App() {
  const products = await getProducts();
  const featuredProducts = products?.slice(0, 3);
  
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.mainSection}>
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h2>Alaska</h2>
              <p>Joyas y accesorios seleccionados</p>
              <Link href="/productos">
                <button className={styles.button}>Ver todos</button>
              </Link>
            </div>
            <div className={styles.imageContent}>
              <Image
                src="/header_image.webp" // Reemplaza con tu ruta de imagen
                alt="Sistema de turnos"
                width={500}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2>Algunos de nuestros seleccionados</h2>
          <div className={styles.featuresContainer}>
            {Array.isArray(featuredProducts) && featuredProducts.map((product) => (
              <div key={product.nombre} className={styles.featureItem}>
                <img
                  src={product.foto}
                  alt={product.nombre}
                  width={200}
                  height={200}
                  className={styles.productImage}
                />
                <h3 className={styles.productTitle}>{product.nombre}</h3>
                <p className={styles.productPrice}>${product.precio}</p>
              </div>
            ))}
          </div>
          <div className={styles.viewAllContainer}>
            <Link href="/productos">
              <button className={styles.button}>Ver todos</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}