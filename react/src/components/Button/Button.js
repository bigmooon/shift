// Button Modal uses through entire website

// 전체적인 버튼 (높이, 넓이, 배경색 유동적으로)
export const Button = ({ color, gradient, width, height, className, children, onClick }) => {
  const style = {
    background: gradient ? `linear-gradient(${gradient})` : color, 
    width: `${width}rem`,
    height: `${height}rem`
  };

  return(
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
