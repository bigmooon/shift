import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-cards';
import 'swiper/scss/autoplay';
import '../assets/styles/Landing.scss';
import { EffectCards, Autoplay } from 'swiper/modules';
import { Button } from '../components/Button/Button';
import TRO from '../assets/images/TRO.png';
import TRS from '../assets/images/TRS.png';
import TCO from '../assets/images/TCO.png';
import TCS from '../assets/images/TCS.png';
import PRO from '../assets/images/PRO.png';
import PRS from '../assets/images/PRS.png';
import PCO from '../assets/images/PCO.png';
import PCS from '../assets/images/PCS.png';
import { saveDataWithExpiration } from '../components/CookieUtils/SecureLocalStorageExtends';

const landingImgs = [
  { src: TRO, alt: 'TRO', style: { objectFit: 'cover' } },
  { src: TRS, alt: 'TRS' },
  { src: TCO, alt: 'TCO' },
  { src: TCS, alt: 'TCS' },
  { src: PRO, alt: 'PRO', style: { objectFit: 'cover' } },
  { src: PRS, alt: 'PRS' },
  { src: PCO, alt: 'PCO', style: { objectFit: 'cover' } },
  { src: PCS, alt: 'PCS', style: { objectFit: 'cover' } },
];

const Landing = () => {
  const navigate = useNavigate();

  const setShowLanding = () => {
    saveDataWithExpiration('hasVisitedLanding', true, 60 * 24); // maintain for 24 hours
    navigate('/', { state: { from: '/landing' } });
  };

  return (
    <div id="Container" className="landingContainer">
      <div className="landingWrapper">
        <div className="landingTitle">
          <span>
            남이 보는 나는,
            <br />
            과연 <span className="purpleText">어떤 사람</span>일까?
          </span>
        </div>
        <div className="imgBox">
          <Swiper
            effect={'cards'}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {landingImgs.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img.src} alt={img.alt} style={img.style} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button color="#A778C2" className="startBtn" onClick={setShowLanding}>
          <span>시작하기</span>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
