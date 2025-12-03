import "./ResultDashBoardBox.scss";
import Preparing from "../../assets/images/Preparing.png";

export const PreparingDashBoardBox = () => {
  return (
    <div className="preContainer">
      <div className="preWrapper">
        <div className="preImg">
          <img src={Preparing} alt="preparing img"/>
        </div>
        <div className="preSpan">
          <span>다른 테스트 준비중입니다.</span>
        </div>
      </div>
    </div>
  )

}