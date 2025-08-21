import { useState } from "react";

const DropdownError = ({ name, errors, touched }) => {
  if (errors[name] && touched[name]) {
    return <div className="py-1 text-red-600 text-xs">{errors[name]}</div>;
  }
  return null;
};

const DropdownRadio = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  placeholder,
  errors,
  touched,
  setFieldTouched,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNested, setShowNested] = useState(null);

  // Define nested options
  const smartPropertyOptions = [
    {
      text: "How many 50 sq ft Smart Property Units of Serene Heights, Nathia Gali would you like to co-own?",
    },
    { text: "1 Unit - PKR 2,000,000 (Down Payment: PKR 600,000)" },
    { text: "2 Units - PKR 4,000,000 (Down Payment: PKR 1,200,000)" },
    { text: "3 Units - PKR 6,000,000 (Down Payment: PKR 1,800,000)" },
    {
      text: "More than 3 Units",
    },
  ];

  const fullApartmentOptions = [
    { text: "What is your investment budget range?" },
    { text: "Under PKR 1 Crore" },
    { text: "PKR 1.5 Crore - 2 Crore" },
    { text: "PKR 2 Crore - PKR 3 Crore" },
  ];

  const handleOptionSelect = (value) => {
    // If it's a main category that has nested options, close main dropdown and show nested
    if (value === "Smart Property Unit" || value === "Full Apartment") {
      setIsOpen(false);
      setTimeout(() => {
        setShowNested(value);
      }, 150); // Small delay for smooth transition
      return;
    }
    
    onChange(name, value);
    setFieldTouched(name, true);
    setIsOpen(false);
    setShowNested(null);
  };

  const handleNestedOptionSelect = (value) => {
    onChange(name, value);
    setFieldTouched(name, true);
    setShowNested(null);
  };

  const handleBackToMain = () => {
    setShowNested(null);
    setTimeout(() => {
      setIsOpen(true);
    }, 150);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setFieldTouched(name, true);
    setShowNested(null);
  };

  const getCurrentOptions = () => {
    if (showNested === "Smart Property Unit") {
      return smartPropertyOptions;
    }
    if (showNested === "Full Apartment") {
      return fullApartmentOptions;
    }
    return null;
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
          className={`w-full border shadow-sm rounded-md bg-transparent p-2 focus:border-b-white focus:outline-none text-left flex justify-between items-start ${
            errors[name] && touched[name] ? "border-red-500" : ""
          }`}
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

        {(isOpen || showNested) && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg lg:max-h-52 max-h-52 overflow-y-auto">
            {showNested ? (
              // Show nested dropdown options
              <>
                {/* Back button */}
                <div 
                  className="px-4 py-3 bg-gray-100 border-b border-gray-200 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
                  onClick={handleBackToMain}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-xs font-medium text-gray-600">
                    Back to main options
                  </span>
                </div>

                {getCurrentOptions()?.map((option, index) => (
                  <div key={`nested-${index}`}>
                    {index === 0 ? (
                      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                        <span className="text-xs font-bold workSans text-gray-800">
                          {option.text}
                        </span>
                      </div>
                    ) : (
                      <div
                        className="mx-2 my-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        onClick={() => handleNestedOptionSelect(option.text)}
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
                            onChange={() => handleNestedOptionSelect(option.text)}
                            className="w-5 h-5 accent-[#37584F]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : name === "interestedIn" ? (
              // Show main interestedIn options
              <>
                {/* Header */}
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-xs font-bold workSans text-gray-800">
                    What are you interested in?
                  </span>
                </div>

                {/* Smart Property Unit Option */}
                <div
                  className="mx-2 my-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                  onClick={() => handleOptionSelect("Smart Property Unit")}
                >
                  <span className="text-xs text-[#222222] font-medium flex-1 pr-3">
                    Smart Property Unit
                  </span>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Full Apartment Option */}
                <div
                  className="mx-2 my-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                  onClick={() => handleOptionSelect("Full Apartment")}
                >
                  <span className="text-xs text-[#222222] font-medium flex-1 pr-3">
                    Full Apartment
                  </span>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              // Original behavior for other dropdowns
              options.map((option, index) => (
                <div key={index}>
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
              ))
            )}
          </div>
        )}
      </div>
      <DropdownError name={name} errors={errors} touched={touched} />
    </div>
  );
};

export default DropdownRadio;