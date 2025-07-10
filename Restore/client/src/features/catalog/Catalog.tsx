import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import type { Product } from "../../app/models/product";

export default function Catalog() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5010/api/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
