"use client";
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { decrement, increment } from '../../../store/slices/counterSlice';

export default function Counter() {
  const counter = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className='max-w-3xl mx-auto flex flex-col justify-center items-center text-white'>
          <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
              Redux Counter
          </h2>

          <div className='py-4'>
            <div className='flex items-center space-x-6'>
                <button onClick={handleDecrement}>
                      <Minus className='w-6 h-8' />
                </button>
                <p className='scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0'>
                  {counter}
                </p>
                <button onClick={handleIncrement}>
                      <Plus className='w-6 h-8' />
                </button>
            </div>
          </div>
    </div>
  )
}
