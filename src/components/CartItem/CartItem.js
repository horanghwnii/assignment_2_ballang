import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/reducers/cart.reducer';
import { Link } from 'react-router-dom';

export default function CartItem({
  id,
  img,
  brandNm,
  goodsNm,
  count,
  price,
  salePercent,
}) {
  const dispatch = useDispatch();

  const handleClickIncreaseItem = () => {
    dispatch(addItem({ id }));
  };

  const handleClickDecreaseItem = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <div className='mt-10  min-w-[265px] max-w-[265px] rounded-sm overflow-hidden shadow-lg'>
        <div>
          <Link to={`/product-detail/${id}`}>
            <img src={img} alt={brandNm} className='h-96 w-full' />
            <div className='flex justify-between items-center px-5'>
              <h4 className='text-sm font-bold mt-5 object-cover'>{brandNm}</h4>
              <p className='text-sm text-red-600 font-bold mt-5 object-cover'>
                {count}개
              </p>
            </div>
            <p className='w-full text-sm text-nowrap overflow-hidden text-ellipsis font-thin px-5'>
              {goodsNm}
            </p>
          </Link>
          <div className='flex gap-4 mt-4 justify-between '>
            <div className='flex gap-4 mt-4 items-center px-5 py-5'>
              <p>{price}원</p>
              <p className='text-red-600 font-bold'>{salePercent}%</p>
            </div>
          </div>
          <div className='flex'>
            <button
              onClick={handleClickIncreaseItem}
              className='flex-1 border border-gray-700 px-3 bg-slate-950 text-white'
            >
              추가
            </button>
            <button
              onClick={handleClickDecreaseItem}
              className='flex-1 text-center w-full border border-gray-700 px-3
              bg-slate-950 text-white '
            >
              빼기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
