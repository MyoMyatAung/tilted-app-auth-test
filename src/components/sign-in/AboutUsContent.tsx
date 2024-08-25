import AboutUsImg from "../../assets/images/about-us.png"
import LearnMoreBtn from "../shared/LearnMoreBtn"
const AboutUsContent = () => {
  return (
    <section className='flex flex-col-reverse laptop:flex-row desktop:flex-row items-center gap-6'>
      <div className="flex flex-col gap-6 items-start">
        <h1 className="font-[500] text-xl laptop:text-[28px] desktop:text-4xl text-neutral-0">About Us</h1>
        <p className="laptop:text-base desktop:text-[18px] font-[400] leading-[27px] text-neutral-300">Whether you’re buying, selling, or trading, Tilted lets you manage your transactions conveniently from your mobile device. Seamlessly control your digital assets and engage with the gaming community while on the move. Experience the freedom of managing your in-game inventory anytime, anywhere.</p>
        <LearnMoreBtn />
      </div>
      <img src={AboutUsImg} alt="About US" />
    </section>
  )
}

export default AboutUsContent