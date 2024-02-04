import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  console.log(items);
  return (
    <div className='w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20'>
      {items &&
        items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            brandNm={item.brandNm}
            goodsNm={item.goodsNm}
            count={item.count}
            price={item.price}
            salePercent={item.salePercent}
          />
        ))}
    </div>
  );
}
