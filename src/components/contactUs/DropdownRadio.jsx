import { useState } from "react";
import { INTEREST_QUESTION, INTERESTS } from "./interestOptions";

// const DropdownError = ({ name, errors, touched }) => {
//   if (errors[name] && touched[name]) {
//     return <div className="py-1 text-red-600 text-xs">{errors[name]}</div>;
//   }
//   return null;
// };

const DropdownRadio = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  placeholder,
  // errors,
  // touched,
  setFieldTouched,
  parentValue, // Add this prop to get the parent dropdown value
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (value) => {
    onChange(name, value);
    // Only mark as touched after a valid selection is made
    setFieldTouched(name, true);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    // Don't mark as touched when just opening the dropdown
    // Only mark as touched when closing without selection if no value exists
    if (isOpen && !selectedValue) {
      setFieldTouched(name, true);
    }
  };

  const getCurrentOptions = () => {
    // First entry renders as the question header.
    if (name === "interestedIn") {
      return [INTEREST_QUESTION, ...Object.keys(INTERESTS)].map((text) => ({ text }));
    }

    if (name === "subInterest") {
      const group = INTERESTS[parentValue];
      return group ? [group.question, ...group.options].map((text) => ({ text })) : [];
    }
    
    return options;
  };

  return (
    <div className="mb-4 relative">
      <label className="text-xs text-[#222222] font-medium block mb-1">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={handleButtonClick}
          className={`w-full border shadow-sm rounded-md bg-transparent p-2 focus:border-b-white focus:outline-none text-left flex justify-between items-start `}
        >
          <span
            className={`flex-1 pr-2 ${
              selectedValue ? "text-[#37584F] text-sm" : "text-gray-400 text-sm"
            }`}
          >
            {selectedValue || placeholder}
          </span>
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform mt-0.5 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg lg:max-h-52 max-h-52 overflow-y-auto">
            {getCurrentOptions().map((option, index) => (
              <div key={`${name}-${index}`}>
                {index === 0 ? (
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <span className="text-xs font-bold workSans text-gray-800">
                      {option.text}
                    </span>
                  </div>
                ) : (
                  <div
                    className="mx-2 my-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                    onClick={() => handleOptionSelect(option.text)}
                  >
                    <span className="text-xs text-[#222222] font-medium flex-1 pr-3">
                      {option.text}
                    </span>
                    <div className="flex-shrink-0">
                      <input
                        type="radio"
                        name={name}
                        value={option.text}
                        checked={selectedValue === option.text}
                        onChange={() => handleOptionSelect(option.text)}
                        className="w-5 h-5 accent-[#37584F]"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownRadio;