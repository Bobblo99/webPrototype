import React, { useRef, useEffect } from "react";

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  shortDescription: string;
  details: string;
}

const Accordion: React.FC<AccordionProps> = ({
  isOpen,
  onToggle,
  title,
  shortDescription,
  details,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0';
    }
  }, [isOpen]);

  return (
    <div className="my-4 border-4 border-gray-700 shadow-md p-4 bg-navbar dark:bg-gray-600">
      <h2 className="text-xl font-thin">{title}</h2>
      <p className="text-gray-600 dark:text-white font-thin text-md">{shortDescription}</p>
      <button
        className="mt-2 text-blue-500 hover:underline focus:outline-none transition-all duration-500"
        onClick={onToggle}
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        {isOpen && (
          <div>
            <h3 className="text-lg font-semibold">Details:</h3>
            <p>{details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
