import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
