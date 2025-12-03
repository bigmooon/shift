import ErrorImg from "../assets/images/Preparing.png";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

const Error = () => {
  return (
    <div id="Container" className="errorContainer">
      <div className="errorWrapper">
        <div className="errorImg">
          <img src={ErrorImg} alt="error"></img>
        </div>
        <div className="errorText">
          <span style={{fontSize: '1.2rem'}}>
            <b>404 ERROR!</b>
          </span>
          <span>
            이용에 불편을 드려 죄송합니다 :(
            <br/>
            원하시는 페이지를 찾을 수 없습니다.            
            <br/>
          </span>
        </div>
        <div className="errorBtn">
          <Link to="/">
            <Button width={10} height={2.5} color={"#9C79AC"}>
              <span>
                HOME
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;