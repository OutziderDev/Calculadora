import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DshMinH_.mjs';
import { $ as $$Layout } from '../chunks/Layout_DB-FXipX.mjs';
export { renderers } from '../renderers.mjs';

const $$Paredes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculador de Materiales para Paredes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section></section> ` })}`;
}, "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/paredes.astro", void 0);

const $$file = "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/paredes.astro";
const $$url = "/paredes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Paredes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
