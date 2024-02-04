import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DefaultContentLayout() {
  return (
    <div className='flex justify-center items-center flex-grow'>
      <Outlet />
    </div>
  );
}
