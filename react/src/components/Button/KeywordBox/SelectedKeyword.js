import "../Button.scss";
import DeleteBtn from "../../../assets/images/delBtn.svg";

export const SelectedKeyword = ({ originalKeyword, selectedKeywords, removeKeyword }) => {
  
  return (
    <div className="isSelectedKeywordWrapper">
      <div className="isSelectedKeywordTitle">
        <span>선택된 키워드</span>
      </div>
      <div className="isSelectedKeywordBox">
        {selectedKeywords.map((keyword, index) => (
          <div className="selectedKeyword" key={index}>
            { originalKeyword[keyword][1] } { originalKeyword[keyword][0] }
            <button onClick={() => removeKeyword(index)}>
              <img src={DeleteBtn} alt="delete btn"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
