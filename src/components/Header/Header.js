import { Link } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { useAuth } from '../../contexts/auth.context';
import { useSelector } from 'react-redux';

export default function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className='flex flex-col items-center justify-center border-b-4 border-b-black'>
      <div className='flex w-full items-center bg-black  py-1 text-[12px] text-white'>
        <div className='absolute left-10'>럭셔리 쇼핑이 참 쉽다, 발란</div>
        <div className='mx-auto'>Online luxury boutique</div>
        <ul className='absolute right-10 flex gap-2'>
          <li className='border-r-[1px] pr-2'>
            {!isLoggedIn ? (
              <Link to={'/sign-in'}>로그인</Link>
            ) : (
              <Link to={'/'} onClick={() => logOut()}>
                로그아웃
              </Link>
            )}
          </li>
          {isLoggedIn && (
            <li className='border-r-[1px] pr-2'>
              <Link to={'/user-info'}>마이페이지</Link>
            </li>
          )}
          <li className='border-r-[1px] pr-2'>주문배송</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div className='flex w-full items-center justify-center py-8'>
        <Link
          to={'/'}
          className='font-nm-400 text-6xl uppercase tracking-tighter'
        >
          Ballang
        </Link>
        <Link
          to={isLoggedIn ? '/cart' : '/sign-in'}
          className='inline absolute right-10'
        >
          <GiShoppingBag size={30} />
          <p className='absolute right-[8px] top-[10px] text-white text-xs'>
            {totalItems}
          </p>
        </Link>
      </div>
      <div>
        <ul className='flex gap-8 pb-2'>
          <li>NEW IN</li>
          <li>의류</li>
          <li>슈즈</li>
          <li>가방</li>
          <li>액세서리</li>
          <li>주얼리</li>
          <li>SALE</li>
          <li>DESIGNERS</li>
        </ul>
      </div>
    </header>
  );
}
