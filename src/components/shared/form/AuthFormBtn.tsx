import React from 'react'

type Props = {
  label: string,
}

const AuthFormBtn: React.FC<Props> = ({ label }) => {
  return (
    <button type='submit' className="relative px-8 py-4 text-white font-semibold bg-primary-main rounded-none custom-button">
      {label}
    </button>
  )
}

export default AuthFormBtn