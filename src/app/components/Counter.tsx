import { Minus, Plus } from 'lucide-react'
import React from 'react'

export default function Counter() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col justify-center items-center text-white'>
          <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
              Redux Counter
          </h2>

          <div className='py-4'>
            <div className='flex items-center space-x-6'>
                <button>
                      <Minus className='w-6 h-8' />
                </button>
                <p className='scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0'>
                    0
                </p>
                <button>
                      <Plus className='w-6 h-8' />
                </button>
            </div>
          </div>
    </div>
  )
}
