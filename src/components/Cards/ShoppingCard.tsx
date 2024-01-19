"use client";
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounter, substractOne } from '@/store/counter/counterSlice';
import React, { useEffect, useState } from 'react';


interface Props {
  value: number;
}

export const ShoppingCard = ({value}: Props) => {
  // const [counter, setCounter] = useState(value);
  const counter = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch( initCounter(value) )
  }, [dispatch, value])
  
  
  return (
    <div className=" h-full w-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl">Counter Page</h1>
      <h2 className="text-4xl font-bold text-blue-500">{counter}</h2>
      <div className="w-full flex gap-3 justify-center mt-5">
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          onClick={() => dispatch(addOne())}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          onClick={() => dispatch(substractOne())}
        >
          -
        </button>
      </div>
    </div>
  );
}
