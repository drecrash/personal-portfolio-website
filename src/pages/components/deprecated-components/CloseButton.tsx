import React from 'react';

interface ButtonProps {
  id: string;
  onClick: (id: string) => void;
}

const CloseButton = ({ id, onClick}: ButtonProps) => {
    return(

        <div className=''>
            <button 
            className=''
            onClick={() => onClick(id)}
            onTouchStart={() => onClick(id)}
            >
                <span>&times;</span>
            </button>
        </div>


    )
  
};

export default CloseButton;