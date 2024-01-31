interface AccordionProps {
    isOpen: boolean;
    onToggle: () => void;
    title: string;
    shortDescription: string;
    details: string;
  }