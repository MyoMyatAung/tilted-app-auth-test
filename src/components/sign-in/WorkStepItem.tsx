import React from 'react'

type Props = {
  index: number,
  title: string,
  description: string,
}

const WorkStepItem: React.FC<Props> = ({ index, title, description }) => {
  return (
    <article className='flex-1 min-w-[370px] p-6 border-[1px] border-neutral-200 bg-background-main rounded-xl'>
      <div className='border-[1px] border-neutral-200 bg-primary-suface w-12 h-12 rounded-full flex items-center justify-center mb-6'>
        <span className='font-[500] text-[16px] leading-5'>{index}</span>
      </div>
      <h1 className='font-[500] text-[22px] leading-6 mb-4'>{title}</h1>
      <p className='text-neutral-300 text-sm leading-[22.5px]'>{description}</p>
    </article>
  )
}

export default WorkStepItem