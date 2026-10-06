import HL from "./kernel.js";

/**
 * Monta uma figura Hairline dentro de stage (um elemento vazio, só no cliente)
 * e devolve a função que a desmonta: para o loop, solta os eventos e tira o SVG.
 */
export function mountFigure(stage, figure, label) {
  HL.inject(document);
  stage.setAttribute("data-hairline", figure.name);
  stage.setAttribute("role", "img");
  stage.setAttribute("aria-label", label);
  const svg = HL.mk("svg", { viewBox: "0 0 400 320", "aria-hidden": "true" }, stage);
  const handle = figure.mount({ stage, svg, read: { textContent: "" } }, figure.range[1]);
  return () => {
    handle.destroy();
    svg.remove();
  };
}
