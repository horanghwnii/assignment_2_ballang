import React from 'react';
import ProductListItem from '../ProductListItem';

export default function ProductList({ products }) {
  return (
    <div className='w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20'>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          id={product.id}
          img={product.img_i}
          brandNm={product.brandnm}
          goodsNm={product.goodsnm}
          price={product.price}
          memberPrice={product.memberPrice}
          salePercent={product.sale_percent}
        />
      ))}
    </div>
  );
}
