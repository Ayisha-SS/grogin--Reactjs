import React from 'react';

export default function SidebarBottom(){
  return (
    <div>
        <div className='border-b border-gray-300 py-4'>
            <h3 className='mb-2 font-semibold'>Filter by Color</h3>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <p className="ml-2 text-sm">Green</p>
            </div>
        </div>
        <div className='border-b border-gray-300 py-4'>
            <h3 className='mb-2 font-semibold'>Filter by Brands</h3>
            <div>
                <input
                    type="checkbox"
                    name="brand"
                />
                <span className='ml-2'>Fresh</span>
            </div>
        </div>
        <div className='border-b border-gray-300 py-4'>
            <h3 className='mb-2 font-semibold'>Product Status</h3>
            <div>
                <input
                    type="checkbox"
                    name="status"
                />
                <span className='ml-2'>In Stock</span>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="status"
                />
                <span className='ml-2'>On Sale</span>
            </div>
        </div>
    </div>
  );
};


