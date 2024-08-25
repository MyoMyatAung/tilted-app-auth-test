import React from 'react'
import Img152 from "../../assets/images/image-152.png";
import Img154 from "../../assets/images/image-154.png";
import Img155 from "../../assets/images/image-155.png";
import Img150 from "../../assets/images/image-150.png";

const OverLayImages = () => {
  return (
    <>
      <img
        src={Img152}
        alt="Img 152"
        className="absolute mobile:hidden laptop:block top-0 laptop:right-[-65px] desktop:right-0"
      />
      <img
        src={Img154}
        alt="Img 154"
        className="absolute mobile:hidden laptop:block top-[161px] laptop:right-[-65px] desktop:right-0"
      />
      <img
        src={Img155}
        alt="Img 155"
        className="absolute mobile:hidden laptop:block top-[128px] laptop:left-[-74px] desktop:left-0"
      />
      <img
        src={Img150}
        alt="Img 150"
        className="absolute mobile:hidden laptop:block top-[590.61px] laptop:left-[-18px] desktop:left-[114.43px]"
      />
    </>
  )
}

export default OverLayImages