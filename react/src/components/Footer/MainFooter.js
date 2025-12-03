import SHIFT_LOGO from "../../assets/images/ShiftLogo_Purple.svg";
import SHIFT_ICON from "../../assets/images/ShiftIcon_transparent.png";
import META_SEQUOIA_ICON from "../../assets/images/MetaSequoia.png";
import { Link } from "react-router-dom";
import TOS from "../../pages/TOS";

export const MainFooter = () => {
  return (
    <div className="footerContainer" style={{background:'white', lineHeight:'1.9rem'}}>
      <div className="footerWrapper" style={{background:'white', overflowX:'hidden', padding:'1rem'}}>
        <div>
          <img src={SHIFT_LOGO} style={{width:'6rem'}}/>
        </div>
        <div style={{width:'100%', background:'white', display:'flex', justifyContent:'space-between'}}>
          <div>
            <div style = {{color: '#565656', fontSize:'0.6rem', fontFamily: 'Wanted Sans', fontWeight: '800', letterSpacing: 0.96, wordWrap: 'break-word'}}>
              <span style={{paddingRight: '0.7rem'}}>메타세콰이어</span>
              <span style={{paddingRight:'0.7rem'}}>대표 : 이유빈</span>
              <span>사업자등록번호 612-47-00768</span>
            </div>
            <div style={{color: '#565656', fontSize: '0.6rem', fontFamily: 'Wanted Sans', fontWeight: '400', letterSpacing: 0.96, wordWrap: 'break-word'}}>
              <div>경기도 수원시 광교중앙로 145 A1827</div>
              <div>통신판매업신고번호 2024-수원영통-0717</div>
            </div>
          </div>
          <div>
            <img src={SHIFT_ICON} style={{width:'5rem'}}/>
          </div>
        </div>
        <div style={{width: '100%', height: 0, padding: 0, border: '1px #E4E4E4 solid'}}></div>
        <div>
          <div style={{fontSize: '0.6rem', fontFamily: 'Wanted Sans', fontWeight: '500', letterSpacing: 0.96, wordWrap: 'break-word'}}>
            <span style={{color: '#818181', textAlign:'end', paddingRight: '0.4rem'}}>Contact Us : godsaenglab@gmail.com</span>
            <Link to="/terms" style={{color: '#CACACA', paddingRight: '0.4rem'}}>
              <span>
                이용약관
              </span>
            </Link>
            <Link to="/privacy" style={{color: '#CACACA', paddingRight: '0.4rem'}}>         
              <span>
                개인정보처리방침
              </span>
            </Link>
          </div>
        </div>
        <div style={{width:'100%', display:'flex', justifyContent: 'space-between', color: '#5A5A5A', fontSize: '0.5rem', fontFamily: 'Wanted Sans', fontWeight: '500', letterSpacing: 0.78, wordWrap: 'break-word'}}>
          <div><img src={META_SEQUOIA_ICON} style={{height:'0.9rem'}}/></div>
          <div><span>ⓒ Metasequoia Corp. All rights reserved.</span></div>
        </div>
      </div>
    </div>
  )
};
 
