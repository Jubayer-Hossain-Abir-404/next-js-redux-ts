"use client";
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export default function CounterValue() {
    const counter = useSelector((state:RootState) => state.counter.value);
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}
