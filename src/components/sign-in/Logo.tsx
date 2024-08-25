import LogoImg from "../../assets/images/Logo.png"

type Props = {
  width?: string
}

const Logo: React.FC<Props> = ({ width = "auto" }) => {
  return (
    <img
      src={LogoImg}
      width={width}
      alt="Tiltedxyz Logo"
      className="mx-auto"
    />
  )
}

export default Logo