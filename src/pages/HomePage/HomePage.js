import React, { useEffect, useState } from 'react';
import api from '../../components/api/api';
import ProductList from '../../components/ProdutList/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([api.products.getProducts()]).then(([products]) =>
      setProducts(products)
    );
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
