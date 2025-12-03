import "../../../assets/styles/Result/Result.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';

import 'swiper/scss/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const ResultSummarySectionThree = ({username, descriptionSentences, setCurrentTab }) => {

  const BOX_COUNT = 5;
  const MIN_SLIDES = 5;

  // descriptionSentences가 5개 이하일 경우, 배열을 확장
  while (descriptionSentences.length <= MIN_SLIDES) {
    descriptionSentences = descriptionSentences.concat(descriptionSentences);
  }

  return (
    <div className="rsSectionThree">
      <div className="rsSectionThreeTitle">
        <div className="rsSectionThreeTitleText">
          <span className="titlePurple">{username}</span>
          <span className="titleBlack">님의 한 줄 정의</span>
        </div>
        <div className="rsSectionThreeDetail">
          <button onClick={()=>setCurrentTab(1, 3)}>
            <span>
              자세히보기 {'>'}
            </span>
          </button>
        </div>
      </div>
      <div className="rsSectionThreeContent">
        <div className="rsSectionThreeContentTitle">
          <span className="titlePurple">{username}</span>
          <span className="titleBlack">님은</span>
        </div>
        <div className="rsSectionThreeSpin">
          {/* Slider */}
          {<Swiper 
            className="swiperContainer"
            slidesPerView={5}
            direction={'vertical'}
            loop={true}
            centeredSlides={true}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {descriptionSentences.map((sentence, index) => (
              <SwiperSlide 
                key={index}
                className="swiperSlide"
              >
                <span className="swiperSlideText">{sentence}</span>
              </SwiperSlide>
            ))}
          </Swiper>}
          <div className="swiperBox">
            {Array.from({ length: BOX_COUNT }, (_, index) => (
                <div key={index} className={`swiperBox${index + 1}`}></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultSummarySectionThree;