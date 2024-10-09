import Card from "../components/Card";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>No products found</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default ProductsPage;
