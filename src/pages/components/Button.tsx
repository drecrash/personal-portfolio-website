import React from 'react';

interface ButtonProps {
  id: string;
  onClick: (id: string) => void;
  icon: string;
  name: string;
}

const Button = ({ id, onClick, icon, name}: ButtonProps) => {
    return(

    <div className='relative flex flex-col items-center'>

        <div className=''>
            <img
            src={icon}
            alt='Open Folder'
            onClick={() => onClick(id)}
            className={`cursor-pointer w-20 h-20`}
            />
        </div>

        <div className='mt-[-20%]'>
            <p>{name}</p>
        </div>

    </div>


    )
  
};

export default Button;