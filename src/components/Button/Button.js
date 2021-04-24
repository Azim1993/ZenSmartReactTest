import React from 'react';

const Button = ({ text, size, status, onClick, variant, type }) => {
    const handleClick = e => {
      if(onClick) {
        onClick(e);
      } else {
        e.preventDefault();
      }
    };
  
    return (
      <button 
        type={type ? type : 'button'}
        className={
          'btn btn-' + (size ? size : 'medium') + 
          ' btn-' + (variant ? variant : 'default') + 
          ' ' + (status ? status : 'neutral')
        }
        onClick={handleClick}
      >
        {text || 'Button'}
      </button>
    );
  }
   
  export default Button;