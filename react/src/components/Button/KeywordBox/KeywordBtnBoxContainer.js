import { KeywordBtnBox } from "./KeywordBtnBox";
import "../Button.scss";

export const KeywordBtnBoxContainer = ({keywords, selectedKeywords, onKeywordClick}) => {
  return (
    <div className="keywordBoxContainer">
      <div className="keywordBox">  
        <KeywordBtnBox 
          keywords={keywords}
          selectedKeywords={selectedKeywords}
          color="#FFF" 
          width={5.1} 
          height={3.51}
          className="keywordBtn"  
          onKeywordClick={onKeywordClick}
        />
      </div>
    </div> 
  )
}