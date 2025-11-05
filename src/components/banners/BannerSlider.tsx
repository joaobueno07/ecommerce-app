import { Carousel } from "antd";

import bannerDesktop1 from "../../../public/img/banners-desktop/banner-1.png";
import bannerDesktop2 from "../../../public/img/banners-desktop/banner-2.png";
import bannerDesktop3 from "../../../public/img/banners-desktop/banner-3.png";

import bannerMobile1 from "../../../public/img/banners-mobile/banner-mobile-1.png";
import bannerMobile2 from "../../../public/img/banners-mobile/banner-mobile-2.png";
import bannerMobile3 from "../../../public/img/banners-mobile/banner-mobile-3.png";

import Image from "next/image";

export default function BannerSlider(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
      {/* Banner Home Desktop */}
      <div className="w-8/12 hidden sm:block">
        <Carousel autoplay>
          <div>
            <Image src={bannerDesktop1} width={1450} height={500} alt="" />
          </div>

          <div>
            <Image src={bannerDesktop2} width={1450} height={500} alt="" />
          </div>

          <div>
            <Image src={bannerDesktop3} width={1450} height={500} alt="" />
          </div>
        </Carousel>
      </div>

      {/* Banner Home Mobile */}
      <div className="w-11/12 sm:hidden">
        <Carousel autoplay>
          <div>
            <Image src={bannerMobile1} width={1450} height={500} alt="" />
          </div>

          <div>
            <Image src={bannerMobile2} width={1450} height={500} alt="" />
          </div>

          <div>
            <Image src={bannerMobile3} width={1450} height={500} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
