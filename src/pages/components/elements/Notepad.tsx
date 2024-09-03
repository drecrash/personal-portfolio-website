import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  maxHeight?: string | number;
}

const Notepad = ({children, title, onClose, maxHeight}: Props) => {
  return (
    <div className='inline-block border-t border-l border-black border-b border-r border-white absolute'>
      <div className='border-8 border-98-grey bg-white' style={{ maxHeight: maxHeight, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div className='flex items-center justify-between h-6 bg-notepad-blue'>
          <p className='ml-1 float-left font-black text-white'>{title}</p>
          <button 
            className='mr-1'
            onClick={onClose}
            onTouchStart={onClose}
          >
            <span className='text-black bg-98-grey pl-1 pr-1 text-xs'>&times;</span>
          </button>
        </div>
        <div className='mt-1'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Notepad;