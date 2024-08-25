import GoogleIcon from "../../assets/icons/google-icon.svg";
import AppleIcon from "../../assets/icons/apple-icon.svg";
import SteamIcon from "../../assets/icons/steam-icon.svg";

const SocialLogin = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center justify-center rounded-[4px] border-[1px] border-neutral-700 p-2 flex-1 bg-neutral-800'>
        <img src={GoogleIcon} alt="google login" />
      </div>
      <div className='flex items-center justify-center rounded-[4px] border-[1px] border-neutral-700 p-2 flex-1 bg-neutral-800'>
        <img src={AppleIcon} alt="apple login" />
      </div>
      <div className='flex items-center justify-center rounded-[4px] border-[1px] border-neutral-700 p-2 flex-1 bg-neutral-800'>
        <img src={SteamIcon} alt="steam login" />
      </div>
    </div>
  )
}

export default SocialLogin