import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DefaultContentLayout() {
  return (
    <div className='flex justify-center m-28'>
      <Outlet />
    </div>
  );
}
