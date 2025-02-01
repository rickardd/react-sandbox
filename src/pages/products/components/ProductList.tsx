import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import ProductCard from "./ProductRow";

const ProductList: React.FC = () => {
  const filteredProducts = useStore((state) => state.filteredProducts);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const fetchProducts = useStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="product-grid">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
