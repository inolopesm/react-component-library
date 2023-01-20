import { useEffect, useState } from "react";

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  expanded?: boolean;
};

export default function Accordion({ label, expanded = false, ...props }: AccordionProps) {
  const [open, setOpen] = useState(expanded);

  useEffect(() => {
    setOpen(expanded);
  }, [expanded]);

  return (
    <>
      <button data-state={open ? "open" : "closed"}>{label}</button>
      <div data-state={open ? "open" : "closed"} {...props} />
    </>
  )
}
