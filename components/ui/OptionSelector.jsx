"use client"

import React, { useState } from "react";

const OptionSelector = ({ options=[], onSelect=()=>{} }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="w-full max-w-md">
      {/* <h2 className="text-xl font-semibold mb-4">Select</h2> */}
      <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
        {options.length !== 0 ? options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSelect(option)}
            className={`w-full text-left px-4 py-2 border rounded-md shadow-sm 
            ${
              selected === option
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300"
            } 
            hover:bg-blue-500 hover:text-white`}
          >
            {option.top_name}
          </button>
        )) : <div className="text-center">No options available</div>}
      </div>
      {selected && (
        <div className="mt-4 text-green-600 font-medium">
          Selected Option: {selected?.top_name}
        </div>
      )}
    </div>
  );
};

export default OptionSelector;
