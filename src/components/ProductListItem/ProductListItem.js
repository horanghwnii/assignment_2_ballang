import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import AddButton from '../AddButton';

export default function ProductListItem({
  id,
  img,
  brandNm,
  goodsNm,
  price,
  salePercent,
}) {
  const { isLoggedIn } = useAuth();

  return (
    <div className='mt-10  min-w-[265px] max-w-[265px]  rounded-sm overflow-hidden shadow-lg'>
      <Link to={`/product-detail/${id}`}>
        <img src={img} alt={brandNm} className='h-96 w-full' />
        <div className='flex justify-between items-center px-5'>
          <h4 className='text-sm font-bold mt-5 object-cover'>{brandNm}</h4>
        </div>
        <p className='w-full text-sm text-nowrap overflow-hidden text-ellipsis font-thin px-5'>
          {goodsNm}
        </p>
      </Link>
      <div className='flex gap-4 mt-4 justify-between px-5 py-5'>
        <div className='flex gap-4 mt-4 items-center'>
          <p>{price}원</p>
          <p className='text-red-600 font-bold'>{salePercent}%</p>
        </div>
        <div className='flex gap-4 mt-4 items-center'>
          {isLoggedIn && (
            <AddButton
              id={id}
              img={img}
              brandNm={brandNm}
              goodsNm={goodsNm}
              price={price}
              salePercent={salePercent}
            />
          )}
        </div>
      </div>
    </div>
  );
}
