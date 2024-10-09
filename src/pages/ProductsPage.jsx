import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default ProductsPage;
