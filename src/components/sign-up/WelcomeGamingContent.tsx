import Image14259 from "../../assets/images/image-14259.png";
import Image from "../../assets/images/image.png";

const WelcomeGamingContent = () => {
  return (
    <div className="hidden laptop:block relative laptop:w-[435px] bg-gradient-to-b from-[#2E1C7B] to-[#50172D] rounded-2xl my-9 mx-4">
      <img
        src={Image}
        alt="Welcome to Gaming Universe"
        className="absolute top-[70px] left-[331px]"
      />
      <div className="mx-8 mt-[100px] mb-[123px]">
        <h1 className="text-[40px] font-[600] leading-[48px]">Welcome to Gaming Universe</h1>
        <p className="text-lg text-primary-border">From Ideas to Realities. Where Assets Make the Magic Happen</p>
      </div>
      <img src={Image14259} alt="Welcome to Gaming Universe" />
    </div>
  )
}

export default WelcomeGamingContent