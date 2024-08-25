import LearnMoreBtn from "../shared/LearnMoreBtn";

const LearnMoreContent = () => {
  return (
    <section className='p-6 desktop:p-10 flex flex-wrap items-center gap-6 border-[1px] border-neutral-200 rounded-tl-2xl rounded-br-2xl'>
      <div className="flex-1 min-w-[314px]">
        <h1 className='font-[700] text-xl desktop:text-[28px] laptop:text-2xl desktop:leading-[48px] text-neutral-50'>Digitize your assets in the WEB3 era ecosystem.</h1>
        <p className='font-[400] text-base text-[#DDDDDD] mt-[10px]'>Unlock the potential of your assets in the WEB3 era ecosystem. Digitize now and stay ahead of the game. Take the first step towards the future today</p>
      </div>
      <LearnMoreBtn />
    </section>
  )
}

export default LearnMoreContent;