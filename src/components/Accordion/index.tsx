"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ children, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full accordion">
        <div className="flex justify-between" onClick={toggleAccordion}>
          <h3 className="text-sm font-semibold">{title}</h3>
          <ChevronDownIcon className={classNames(["h-5 w-5 accordion-icon", isOpen ? "open": null])} />
        </div>
        <div className={classNames(["p-1 content", isOpen ? "open": null ])}>
          {children}
        </div>
      </div>
    </>
  )
}