import { ShoppingCard } from '@/components';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'Counter Page',
};


const CounterPage = () => {
  return (
    <div className='w-full h-full'>

      <ShoppingCard value={10} />

    </div>
  );
}


export default CounterPage;