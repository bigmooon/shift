import { useNavigate } from "react-router-dom";
import "../../assets/styles/LinkSender/CompleteHost.scss";
import { Button } from "../../components/Button/Button";
import CheckedImg from "../../assets/images/CheckedCircle.svg";
import KakaoImg from "../../assets/images/kakao.svg";
import InstaImg from "../../assets/images/insta.svg";
import LinkImg from "../../assets/images/linkImg.svg";
import { loadDataWithExpiration } from "../../components/CookieUtils/SecureLocalStorageExtends.js";

const CompleteHost = () => {
  const navigate = useNavigate();

  const handleShareLink = () => {
    const tid = loadDataWithExpiration("tid");
    if (tid === null || tid === undefined) {
      alert("");
      return;
    }
    if (navigator.share) {
      navigator.share({
      title: 'SHIFT',
      text: 'MZ 자기객관화 테스트',
      url: 'https://shift2me.com/guest/' + tid,
      });
    } else {
      alert('공유하기 기능을 지원하지 않는 브라우저입니다.');
    }
  }

  const handleShareKakao = () => {
    alert("현재 준비중인 기능입니다.");
  }

  const handleShareImage = () => {
    alert("현재 준비중인 기능입니다.");
  }

  const handleShowResult = () => {
    navigate("/result/dashboard");
  }

  return (
    <div id="Container" className="chContainer">
      <div className="chImgWrapper">
        <img src={CheckedImg} alt="Completed img"></img>
      </div>
      <div className="chTextWrapper">
        <span className="chTextPurple">테스트가 완료되었습니다!</span>
        <span className="chTextBlackL">이제 링크를 지인들에게 공유하세요.</span>
        <span className="chTextBlackS">3명 이상 참여시 결과 확인이 가능합니다!</span>
      </div>
      <div className="chLinkShareWrapper">
        {/* TODO: 추후 링크 달기 */}
        <Button onClick={handleShareKakao} className="shareBtn" color="#FFF" width={4.65} height={4.65}>
          <img src={KakaoImg} alt="kakao share"></img>
        </Button>
        {/* <Button onClick={handleShareInstagram} className="shareBtn" color="#FFF" width={3.92} height={3.92}>
          <img src={InstaImg} alt="insta share"></img>
        </Button> */}
        <Button onClick={handleShareLink} className="shareBtn" color="#FFF" width={4.65} height={4.65}>
          <img src={LinkImg} alt="link share"></img>
        </Button>        
      </div>
      <div className="chBtnWrapper">
        {/* <Button onClick={handleShareImage} className="chBtnGray chBtn" color="#EDEDED" width={8.4} height={2.5}>
          <span>이미지 저장</span>
        </Button> */}
        <Button onClick={handleShowResult} className="chBtnPurple chBtn" width={16} height={3}>
          <span>결과 확인</span>
        </Button>
      </div>
    </div>
  )
};

export default CompleteHost;
