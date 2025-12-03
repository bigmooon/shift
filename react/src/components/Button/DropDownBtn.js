import { useState } from 'react';
import './Button.scss';

export const DropDownBtn = ({ options, placeholder, onChange }) => {
  const [currentValue, setCurrentValue] = useState(
    placeholder || options[0].value
  );
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOnChangeSelected = (e) => {
    e.stopPropagation();
    const newValue = e.target.getAttribute('data-value');
    setCurrentValue(newValue);
    setIsPlaceholder(false); // 사용자가 선택한 경우
    setShowOptions(false); // hide options after select
    if (onChange) onChange(newValue);
  };

  return (
    <div
      className={`dropDownBox ${showOptions ? 'dropDownBoxActive' : ''}`}
      onClick={toggleOptions}
    >
      <label className={isPlaceholder ? 'placeholder' : 'selectedValue'}>
        {currentValue}
      </label>
      <i className={`arrow ${showOptions ? 'up' : 'down'}`}></i>
      {showOptions && (
        <ul>
          {options.map((option) => (
            <li
              key={option.key}
              data-value={option.value}
              onClick={handleOnChangeSelected}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
