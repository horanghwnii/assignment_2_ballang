import { useEffect, useState } from 'react';
import api from '../../components/api/api';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cart.reducer';
import { useAuth } from '../../contexts/auth.context';

export default function ProductDetailPage() {
  const { id } = useParams('id');
  const { isLoggedIn } = useAuth();
  const [product, setProduct] = useState([]);
  const [range, setRange] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([api.products.getProduct(id)]).then(([product]) =>
      setProduct(product)
    );
  }, []);

  const handleChangeRange = (e) => {
    setRange(e.target.value);
  };

  const handleClickRangeAdd = () => {
    const newItem = {
      id,
      img: product.img_i,
      brandNm: product.brandnm,
      goodsNm: product.goodsnm,
      price: product.price,
      salePercent: product.salePercent,
      amount: Number(range),
    };
    dispatch(addItem(newItem));

    setRange(1);
  };

  return (
    <div className='flex justify-center gap-20'>
      <div>
        <img src={product.img_i} alt='' className='w-[28rem]' />
      </div>
      <div>
        <h2 className='text-3xl font-bold'>{product.brandnm}</h2>
        <p>{product.goodsnm}</p>
        <p className='pb-10'>{`발랑코드 [${product.id}]`}</p>
        <div className='border-y-2 border-black py-10'>
          <ul className='grid grid-cols-2 gap-10'>
            <li>상품 금액</li>
            <li className=' text-gray-500 font-thin line-through'>
              {product.goods_consumer}원
            </li>
            <li>판매가</li>
            <li>{product.price}원</li>
            <li>최대 혜택가</li>
            <li className='text-xl font-bold'>
              {product.goods_consumer - product.price}
              <pre className='inline ml-1 text-sm text-red-600'>
                {product.sale_percent}%
              </pre>
            </li>
            <li>배송비</li>
            <li>무료</li>
            <li>도착예정</li>
            <li>언젠가</li>
          </ul>
        </div>
        {isLoggedIn && (
          <div className='pt-5'>
            <h4>담을 갯수</h4>
            <div className='flex flex-col'>
              <div className='flex'>
                <button
                  onClick={() => {
                    range > 1 &&
                      setRange((prevRange) => setRange(Number(prevRange) - 1));
                  }}
                  className='px-5 border border-gray-700 rounded-s-lg  bg-slate-950 text-white'
                >
                  -
                </button>
                <input
                  value={range}
                  onChange={handleChangeRange}
                  type='number'
                  min={1}
                  max={10}
                  className='w-full border border-gray-700 outline-none border-none bg-slate-400 text-black text-center py-2'
                />
                <button
                  onClick={() =>
                    setRange((prevRange) => setRange(Number(prevRange) + 1))
                  }
                  className='px-5 border border-gray-700 rounded-e-lg  bg-slate-950 text-white'
                >
                  +
                </button>
              </div>
              <div className='flex py-5 mt-5 border-t-2 border-black'>
                <Link className='flex-1 ' to={'/cart'}>
                  <button
                    // onClick={handleClickRangeAdd}
                    className='w-full border border-gray-700 px-3 py-2 rounded-s-lg  bg-slate-950 text-white'
                  >
                    장바구니
                  </button>
                </Link>
                <button
                  onClick={handleClickRangeAdd}
                  className='flex-1 border border-gray-700 px-3 py-2 rounded-e-lg  bg-slate-950 text-white'
                >
                  담기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
