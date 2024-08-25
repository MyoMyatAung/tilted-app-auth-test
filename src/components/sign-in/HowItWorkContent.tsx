import WorkStepItem from "./WorkStepItem"

const HowItWorkContent = () => {
  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-neutral-0 font-[600] text-4xl text-center leading-[54px]'>How It Works</h1>
        <p className='laptop:text-base desktop:text-lg text-center text-neutral-100 font-[400] -tracking-wide leading-7'>Tilted provides a seamless and interactive platform for managing your digital gaming assets. Here’s how you can get started:</p>
      </div>
      <div className='flex items-stretch gap-4 flex-wrap'>
        <WorkStepItem index={1} title="Open Tilted Webapp" description="Navigate to the Tilted Webapp and get ready to experience seamless digital asset management" />
        <WorkStepItem index={2} title="Create Account" description="Create your account by signing up with your email address and completing the necessary verification steps." />
        <WorkStepItem index={3} title="Completed" description="Once registered, you'll be added to our waiting list and granted early access to trade digital assets." />
      </div>
    </section>
  )
}

export default HowItWorkContent