import React from 'react';

export default function Footer() {
  return (
    <footer className='flex justify-between px-24 py-10 pb-20 w-full bg-black'>
      <div className='flex flex-col gap-3 text-xs text-white'>
        <ul className='flex gap-2 text-sm'>
          <li>회사소개</li>
          <li>제휴문의</li>
          <li>고객센터</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
        <p className='text-gray-400'>주식회사 홀앵희 | 대표 이종환</p>
        <p className='text-gray-400'>경기도 파주시 가온로 205, 몇층</p>
      </div>
      <div className='flex  gap-10 text-xs text-white'>
        <div>
          <h4 className='text-sm mb-2'>MY ORDER</h4>
          <ul>
            <li className='mb-2 text-gray-400'>주문내역</li>
            <li className='text-gray-400'>쇼핑백</li>
          </ul>
        </div>
        <div>
          <h4 className='text-sm mb-2'>CUSTOMER SERVICE</h4>
          <ul>
            <li className='mb-2 text-gray-400'>발란머니 내역</li>
            <li className='text-gray-400'>쿠폰 내역</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
