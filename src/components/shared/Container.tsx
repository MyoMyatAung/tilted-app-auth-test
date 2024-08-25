import React from 'react'

type Props = {
  children: React.ReactNode,
  classes?: string,
}

const Container: React.FC<Props> = ({ children, classes = "" }) => {
  return (
    <div className={`px-6 laptop:px-[120px] desktop:px-[148px] ${classes}`}>
      {children}
    </div>
  )
}

export default Container