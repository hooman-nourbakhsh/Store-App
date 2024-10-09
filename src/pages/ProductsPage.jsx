import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>No products found</p>}
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default ProductsPage;
