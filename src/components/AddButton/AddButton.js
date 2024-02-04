import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/reducers/cart.reducer';

export default function AddButton({
  id,
  img,
  brandNm,
  goodsNm,
  price,
  salePercent,
}) {
  const dispatch = useDispatch();

  const handleClickAddItem = () => {
    const newItem = {
      id,
      img,
      brandNm,
      goodsNm,
      price,
      salePercent,
    };

    dispatch(addItem(newItem));
  };

  // const handleClickRemoveItem = () => {
  //   dispatch(removeItem({ id }));
  // };

  // const isAddItem = !!items.find((item) => item.id === id);

  return (
    <button
      onClick={handleClickAddItem}
      className='border border-gray-400 w-14 h-8 rounded-sm bg-black text-white'
    >
      담기
    </button>
  );
}
