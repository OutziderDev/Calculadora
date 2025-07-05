import { c as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, a as renderComponent, b as renderScript, m as maybeRenderHead, d as renderTransition } from '../chunks/astro/server_DshMinH_.mjs';
import { $ as $$Layout } from '../chunks/Layout_DB-FXipX.mjs';
import { $ as $$Image } from '../chunks/Image_BekdEfDY.mjs';
/* empty css                                    */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const bucketIlustration = new Proxy({"src":"/_astro/bucketIlus.CPukwEJk.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/assets/ilustrations/bucketIlus.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/assets/ilustrations/bucketIlus.png");
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const ChangeIcon = createSvgComponent({"meta":{"src":"/_astro/transfer.BrzOwDUW.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M20 10h-16l5.5 -6\" />\r\n  <path d=\"M4 14h16l-5.5 6\" />\r\n"});

const $$Maquinas = createComponent(($$result, $$props, $$slots) => {
  const tablaDeConversionesaM3 = Array.from({ length: 20 }, (_, i) => {
    const yd = i + 1;
    return {
      yd,
      m: (yd * 0.7646).toFixed(2)
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Capacidad de Carga de Retroexcavadora ", "data-astro-cid-t4ne636b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-t4ne636b> <h1 data-astro-cid-t4ne636b>¡Calcula todo sobre tus maquinarias!</h1> <div class="grid" data-astro-cid-t4ne636b> <div class="item bg-color" data-astro-cid-t4ne636b> <h3 class="item-title" data-astro-cid-t4ne636b>Conversor de Volumen de Materiales</h3> <div class="item-data" data-astro-cid-t4ne636b> <div class="conversiones" data-astro-cid-t4ne636b> <select id="opc1" name="" data-astro-cid-t4ne636b> <option value="yd3" selected data-astro-cid-t4ne636b>Yarda (yd³)</option> <option value="m3" data-astro-cid-t4ne636b> Metros (m³)</option> <option value="ft3" data-astro-cid-t4ne636b>Pie cúbico (ft³)</option> </select> <button id="changeUnidad" data-astro-cid-t4ne636b> ${renderComponent($$result2, "ChangeIcon", ChangeIcon, { "stroke": "white", "data-astro-cid-t4ne636b": true })} </button> <select id="opc2" name="" data-astro-cid-t4ne636b> <option value="yd3" data-astro-cid-t4ne636b>Yarda (yd³)</option> <option value="m3" selected data-astro-cid-t4ne636b> Metros (m³)</option> <option value="ft3" data-astro-cid-t4ne636b>Pie cúbico (ft³)</option> </select> </div> <div class="cantidad" data-astro-cid-t4ne636b> <!-- <label for="cant">Cantidad:</label> --> <input type="number" min="0" max="100" placeholder=" Cantidad: 6" id="cant" data-astro-cid-t4ne636b> </div> <div class="result" data-astro-cid-t4ne636b> <p id="resultado" data-astro-cid-t4ne636b>0</p> <span id="metrica" data-astro-cid-t4ne636b> mt</span><sup id="exponente" data-astro-cid-t4ne636b>3</sup> </div> </div> </div> <div class="item img-item" data-astro-cid-t4ne636b> ${renderComponent($$result2, "Image", $$Image, { "priority": true, "data-astro-transition-persist": "pala", "src": bucketIlustration, "width": bucketIlustration.width, "height": bucketIlustration.height, "alt": "Ilustracion de balde de minicargador", "data-astro-cid-t4ne636b": true, "data-astro-transition-scope": renderTransition($$result2, "uhebwm52", "", "pala") })} </div> <div class="item bg-color row-span" data-astro-cid-t4ne636b> <h3 class="item-title" data-astro-cid-t4ne636b>Tabla de Conversiones Basica</h3> <div class="item-data" data-astro-cid-t4ne636b> <div class="tablayd3am3" data-astro-cid-t4ne636b> <p data-astro-cid-t4ne636b>Tabla basica de yardas a metros cubicos</p> <table data-astro-cid-t4ne636b> <thead data-astro-cid-t4ne636b> <tr data-astro-cid-t4ne636b> <th data-astro-cid-t4ne636b>Yardas</th> <th data-astro-cid-t4ne636b> → </th> <th data-astro-cid-t4ne636b>Metros</th> </tr> </thead> <tbody data-astro-cid-t4ne636b> ${tablaDeConversionesaM3.map(
    (row) => renderTemplate`<tr data-astro-cid-t4ne636b> <td data-astro-cid-t4ne636b>${row.yd}</td> <td data-astro-cid-t4ne636b> → </td> <td data-astro-cid-t4ne636b>${row.m}</td> </tr>`
  )} </tbody> </table> </div> </div> </div> <div class="item bg-color" data-astro-cid-t4ne636b> <h3 class="item-title" data-astro-cid-t4ne636b>Cacular volumen del balde</h3> <div class="item-data" data-astro-cid-t4ne636b> <div class="formulario" data-astro-cid-t4ne636b> <div class="contenWithLabel" data-astro-cid-t4ne636b> <label for="baldeAncho" data-astro-cid-t4ne636b>Ancho:</label> <input type="number" id="baldeAncho" required placeholder="1.5 mts" min="0" max="50" maxlength="4" data-astro-cid-t4ne636b> </div> <div class="contenWithLabel" data-astro-cid-t4ne636b> <label for="baldeAlto" data-astro-cid-t4ne636b>Altura:</label> <input type="number" id="baldeAlto" required placeholder="0.7 mts" min="0" max="50" maxlength="4" data-astro-cid-t4ne636b> </div> <div class="contenWithLabel" data-astro-cid-t4ne636b> <label for="baldeProfundidad" data-astro-cid-t4ne636b>Profundidad:</label> <input type="number" id="baldeProfundidad" required placeholder="0.9 mts" min="0" max="50" maxlength="4" data-astro-cid-t4ne636b> </div> <div class="contenWithLabel" data-astro-cid-t4ne636b> <label for="baldemetrica" data-astro-cid-t4ne636b>Resultado:</label> <select id="baldemetrica" required data-astro-cid-t4ne636b> <option value="yd3" data-astro-cid-t4ne636b>Yarda (yd³)</option> <option value="m3" selected data-astro-cid-t4ne636b> Metros (m³)</option> </select> </div> <button id="calcBalde" data-astro-cid-t4ne636b>Calcular</button> </div> <div class="formResult" data-astro-cid-t4ne636b> <p id="balderesultado" data-astro-cid-t4ne636b>0</p><span id="baldemetricaresult" data-astro-cid-t4ne636b>M<sup data-astro-cid-t4ne636b>3</sup></span> </div> </div> </div> <div class="item bg-color" data-astro-cid-t4ne636b> <h3 class="item-title" data-astro-cid-t4ne636b>Cacular cargas de maquinarias</h3> <div class="item-data" data-astro-cid-t4ne636b> <div class="advertencia" id="warningbox" data-astro-cid-t4ne636b> <svg class="warnlogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-t4ne636b><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t4ne636b></path><path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.585 13.586l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" data-astro-cid-t4ne636b></path></svg> <div data-astro-cid-t4ne636b>
Los datos son un aproximado y estan sujetos a diferencias por parte del operador y la cantidad de sobrecarga del equipo pesado
</div> <button id="btnwarning" data-astro-cid-t4ne636b> <svg class="closelogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-t4ne636b><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t4ne636b></path><path d="M18 6l-12 12" data-astro-cid-t4ne636b></path><path d="M6 6l12 12" data-astro-cid-t4ne636b></path></svg> </button> </div> <div class="formCalcCiclo" data-astro-cid-t4ne636b> <div class="content" data-astro-cid-t4ne636b> <label for="datoBalde" data-astro-cid-t4ne636b>Volumen del balde:</label> <input type="number" placeholder="" id="datoDeBalde" data-astro-cid-t4ne636b> </div> <div class="content" data-astro-cid-t4ne636b> <label for="" data-astro-cid-t4ne636b>Cantidad a servir:</label> <input type="number" placeholder="" id="cantidadADespachar" data-astro-cid-t4ne636b> </div> <!-- <button id="calcRep">Calcular</button> --> </div> <div class="formCalcCicloResult" data-astro-cid-t4ne636b> <p id="cicloResp" data-astro-cid-t4ne636b>0</p> <span data-astro-cid-t4ne636b>Repeticiones</span> </div> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/maquinas.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/maquinas.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/maquinas.astro?astro&type=script&index=2&lang.ts")}`;
}, "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/maquinas.astro", "self");

const $$file = "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/pages/maquinas.astro";
const $$url = "/maquinas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Maquinas,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
