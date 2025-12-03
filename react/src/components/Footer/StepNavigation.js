import { Step } from "./Step";
import "./Footer.scss";

export const StepNavigation = ({ labelArray, currentStep, updateStep }) => {
  return (
    <div className="stepWrapper">
      {labelArray.map((item, index) => 
        <Step 
          key={index} 
          label={item.label}
          updateStep={() => updateStep(index + 1)}
          selected={currentStep > index}
        />
      )}
    </div>
  )
}