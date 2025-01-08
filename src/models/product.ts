export interface Product {
  id: string
  nombre: string
  precio: number
  foto: string
  categoria: string
  descripcion?: string
  stock?: string
  cantidad?: number
}

export interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export interface ProductCardProps {
  product: Product
  onProductSelect: (product: Product) => void
}
