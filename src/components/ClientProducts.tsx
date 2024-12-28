'use client';
import { useState } from 'react';
import { ProductCard } from '@/app/productos/components/ProductCard';
import ProductModal from '@/app/productos/components/ProductModal';

export default function ClientProducts({ products }: { products: any[] }) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <>
      {Array.isArray(products) && products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onProductSelect={setSelectedProduct} 
        />
      ))}
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
