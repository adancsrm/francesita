import Reveal from "./Reveal";

export default function PanelDatos({ titulo, children }) {
  return (
    <Reveal as="aside" x={28} y={0} delay={0.1} className="panelDatos">
      <h2>{titulo}</h2>
      <ul>{children}</ul>
    </Reveal>
  );
}
