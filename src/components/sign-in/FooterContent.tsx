import Logo from "./Logo";
import DiscordIcon from "../../assets/icons/discord-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";

const FooterContent = () => {
  return (
    <footer className='flex flex-col laptop:flex-row items-center gap-8 laptop:py-4 desktop:py-1'>
      {/**LOGO */}
      <div className="desktop:px-24">
        <Logo width="137.87"/>
      </div>
      {/** Links */}
      <ul className="flex-1 text-center flex-col laptop:flex-row flex items-baseline gap-8">
        <li className="w-full laptop:w-fit">Home</li>
        <li className="w-full laptop:w-fit">What Do We Offer</li>
        <li className="w-full laptop:w-fit">Our Product</li>
        <li className="w-full laptop:w-fit">Blog</li>
      </ul>
      {/** Social Link */}
      <div className="desktop:px-[87px] flex items-center gap-3">
        <div className="w-11 h-11 bg-primary-dark border flex items-center justify-center p-[10px] rounded-full">
          <img src={DiscordIcon} alt="Discord" />
        </div>
        <div className="w-11 h-11 border flex items-center justify-center p-[10px] rounded-full">
          <img src={InstagramIcon} alt="Instagram" />
        </div>
        <div className="w-11 h-11 border flex items-center justify-center p-[10px] rounded-full">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  )
}

export default FooterContent