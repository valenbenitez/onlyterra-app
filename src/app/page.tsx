import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/services/getProducts'
import ClientProducts from '@/components/ClientProducts';

export default async function App() {
  const products = await getProducts();
  const featuredProducts: any = products?.slice(0, 3);
  
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
                src="/new_header.webp"
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
            <ClientProducts products={featuredProducts} />
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