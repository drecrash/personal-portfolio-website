import React from 'react';

interface ButtonProps {
  id: string;
  onClick: (id: string) => void;
  icon: string;
  name: string;
  width?: string;
}

const Button = ({ id, onClick, icon, name, width='20'}: ButtonProps) => {
    return(

    <div className='relative flex flex-col items-center'>

        <div className=''>
            <img
            src={icon}
            alt='Open Folder'
            onClick={() => onClick(id)}
            className={`cursor-pointer w-${width} h-${width}`}
            />
        </div>

        <div className=''>
            <p>{name}</p>
        </div>

    </div>


    )
  
};

export default Button;