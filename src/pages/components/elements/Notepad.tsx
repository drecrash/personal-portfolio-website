import React from 'react';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';

interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Notepad = ({children, title, onClose}: Props) => {


  return (

        <div className='inline-block border-t border-l border-black border-b border-r border-white absolute'>



            <div className='border-8 border-98-grey bg-white'>
                <div className='flex items-center justify-between h-6 bg-notepad-blue'>

                    <p className='ml-1 float-left font-black text-white'>{title}</p>


                    <div className='mr-1 aspect-square'>
                        <button 
                        className=''
                        onClick={onClose}
                        >
                            <span className='text-black bg-98-grey pl-1 pr-1 text-xs'>&times;</span>
                        </button>
                    </div>

                    
                </div>
                <div className='mt-1'>
                    {children}
                </div>
            </div>

        </div>


  );
};

export default Notepad;
