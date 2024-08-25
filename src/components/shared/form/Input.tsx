import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  name: string,
  frontIcon?: string | null,
  endIcon?: string | null,
  id: string,
  type: "email" | "text" | "password",
  placeholder: string,
  register: UseFormRegister<any>,
  required: boolean;
  error: string;
}

const Input: React.FC<Props> = ({ name, frontIcon = null, endIcon = null, id, type, placeholder, register, required, error }) => {
  return (
    <div>
      <div className='h-[50px] flex items-center gap-1 border-[1px] border-neutral-700 bg-neutral-800 rounded-[8px] p-2'>
        {!!frontIcon && <img src={frontIcon} alt={name} />}
        <input
          type={type}
          id={id}
          className='bg-transparent outline-none w-full'
          placeholder={placeholder}
          required={required}
          {...register(name)}
        />
        {!!endIcon && <img src={endIcon} alt={name} />}
      </div>
      <p className="text-red-600 text-xs">{error}</p>
    </div>

  )
}

export default Input