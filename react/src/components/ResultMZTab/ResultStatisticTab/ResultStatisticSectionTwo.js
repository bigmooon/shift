import "../../../assets/styles/Result/Result.scss";
import FAMILY_ICON from "../../../assets/images/statisticFamily.png";
import FRIEND_ICON from "../../../assets/images/statisticFriend.png";
import COWORKER_ICON from "../../../assets/images/statisticCoworker.png";
import COUPLE_ICON from "../../../assets/images/statisticCouple.png";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}

const ResultStatisticSectionTwo = ({ repliesInfo }) => {

  const relationshipIcons = {
    가족: FAMILY_ICON,
    친구: FRIEND_ICON,
    지인: COWORKER_ICON,
    애인: COUPLE_ICON,
  };

  const slideChunks = chunkArray(repliesInfo, 5);

  return (
    <section className="rstSectionTwoContainer">
      <div className="rstSectionTwoWrapper">
        <div className="rstSectionTwoTitleWrapper">
          <div className="rstSectionTwoTitle">
            <span>No.</span>
            <span>닉네임</span>
            <span>나와의 관계</span>
            <span>응답 날짜</span>
          </div>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="rstSectionTwoSwiper"
        >
          {slideChunks.map((chunk, index) => (
            <SwiperSlide key={index} className="rstSectionTwoSwiperSlide">
              {chunk.map((item, subIndex) => (
                <div key={subIndex} className="rstSectionTwoContentBox">
                  <div className="rstSectionTwoContentWrapper">
                    <span>{subIndex + 1}</span>
                    <span>{item.anonymous ? '익명' : item.nickname}</span>
                    <span>
                      <img src={relationshipIcons[item.relationship]} alt={item.relationship} style={{width: '0.75rem', marginRight: '0.2rem'}} />
                      {item.relationship}
                    </span>
                    <span className="rstContent">{item.replyTime || '날짜 정보 없음'}</span>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ResultStatisticSectionTwo;