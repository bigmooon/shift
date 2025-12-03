import "./Footer.scss";

export const Step = ({ index, label, selected }) => {
  // if selected is true, the 'stepBlock' class will have 'selected' class
  const circleClass = `circle ${selected ? "selected" : ""}`;

  return (
    <div className={"stepBlock" + (selected ? " selected" : "")}>
      <div className="circleWrapper">
        <div className={circleClass}/>
      </div>
    </div>
  );
}