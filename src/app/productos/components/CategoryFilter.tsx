import { CategoryFilterProps } from '@/models/product'
import styles from '../productos.module.css'

export const CategoryFilter = ({
    categories,
    selectedCategory,
    onCategoryChange
}: CategoryFilterProps) => {
    return (
        <div className={styles.filterContainer}>
            <button
                className={`${styles.filterButton} ${selectedCategory === 'todos' ? styles.active : ''}`}
                onClick={() => onCategoryChange('todos')}
            >
                Todos
            </button>
            {categories.map((categoria) => (
                <button
                    key={categoria}
                    className={`${styles.filterButton} ${selectedCategory === categoria ? styles.active : ''}`}
                    onClick={() => onCategoryChange(categoria)}
                >
                    {categoria}
                </button>
            ))}
        </div>
    )
}