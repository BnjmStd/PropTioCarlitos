import { useState, useRef, useEffect } from 'react';

export default function DropdownInput({ options, onOptionSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setInputValue(option);
        setIsOpen(false);
        onOptionSelect(option);
    };

    const handleInputFocus = () => {
        setIsOpen(true);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <input
                type="text"
                value={inputValue}
                onFocus={handleInputFocus}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Select an option"
            />
            {isOpen && (
                <ul className="absolute bg-white border border-gray-300 mt-1 rounded w-full max-h-60 overflow-y-auto z-10">
                    {options
                        .filter((option) =>
                            option.toLowerCase().includes(inputValue.toLowerCase())
                        )
                        .map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};