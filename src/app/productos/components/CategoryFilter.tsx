import { CategoryFilterProps } from '@/models/product'
import styles from '../productos.module.css'

export const CategoryFilter = ({
    categories,
    selectedCategory,
    onCategoryChange
}: CategoryFilterProps) => {
    const handleCategoryChange = (categoria: string) => {
        console.log('Categoría seleccionada:', categoria); // Para debugging
        onCategoryChange(categoria.toLowerCase());
    };

    return (
        <div className={styles.filterContainer}>
            <button
                className={`${styles.filterButton} ${selectedCategory === 'todos' ? styles.active : ''}`}
                onClick={() => handleCategoryChange('todos')}
            >
                Todos
            </button>
            {categories.map((categoria) => (
                <button
                    key={categoria}
                    className={`${styles.filterButton} ${selectedCategory === categoria.toLowerCase() ? styles.active : ''}`}
                    onClick={() => handleCategoryChange(categoria)}
                >
                    {categoria}
                </button>
            ))}
        </div>
    )
}