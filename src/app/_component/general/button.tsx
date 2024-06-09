import React from 'react'

interface ButtonProps{
    label: string;
    onClick?: ((e:any)=>void);
    onSubmit?: ((e:any)=>void);
    className?: string;
    icon?: React.ReactNode; 
}
const Button :React.FC<ButtonProps>= ({label,onClick,className,icon,onSubmit}) => {
  return (
    <button className={`text-white py-1 px-4 rounded-lg ${className}`} onClick={onClick} onSubmit={onSubmit}>
        {label}
        {icon}
    </button>
  )
}
export default Button;