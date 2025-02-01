interface ProductRowProps {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
    available: boolean;
  };
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.category}</td>
      <td>{product.available ? "Available" : "Out of Stock"}</td>
    </tr>
  );
};

export default ProductRow;
