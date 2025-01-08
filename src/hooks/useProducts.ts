import { Product } from '@/models/product'
import { getProducts } from '@/services/getProducts'
import { useState, useEffect } from 'react'

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState('todos')
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response: any = await getProducts()
                console.log(response)
                setProducts(response)
                const uniqueCategories: any = Array.from(new Set(response.map((product: Product) => product.categoria)))
                setCategories(uniqueCategories)
            } catch (err) {
                setError('Error al cargar los productos')
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const filteredProducts = selectedCategory === 'todos' 
        ? products 
        : products.filter(product => {
            return product.categoria?.toLowerCase() === selectedCategory
        })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (a.stock === 'si' && b.stock === 'no') return -1;
        if (a.stock === 'no' && b.stock === 'si') return 1;
        return 0;
    });

    return {
        products: sortedProducts, // Retornamos los productos ordenados
        categories,
        selectedCategory,
        selectedProduct,
        isLoading,
        error,
        setSelectedCategory,
        setSelectedProduct
    }
} 