import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function Dropdown() {
  // State variables
  const [isOpen, setIsOpen] = useState(false); // Tracks whether the dropdown is open or closed
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the currently selected option
  const options = ["Option 1", "Option 2", "Option 3"]; // Array of available options

  // Function to toggle the dropdown open or closed
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to handle option click
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown
  };

  // Render the dropdown component
  return (
    <div className="flex flex-col items-center ">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-2xl mt-7 bg-white p-4 rounded-md font-semibold"
      >
        {selectedOption || "Select an option"}{" "}
        {/* Display the selected option or default text */}
        <span className="ml-4">
          {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}{" "}
          {/* Display the arrow icon based on dropdown state */}
        </span>
      </button>
      {isOpen && (
        <ul className="bg-white mt-2 p-3 rounded-md text-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="hover:bg-gray-200 cursor-pointer px-10 py-2 rounded-md font-medium"
            >
              {option} {/* Display each option */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
