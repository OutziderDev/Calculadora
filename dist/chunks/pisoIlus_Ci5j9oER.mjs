const pisoIlustration = new Proxy({"src":"/_astro/pisoIlus.DG0TX6J8.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/assets/ilustrations/pisoIlus.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/luisb/Git/React-Oficial-Course/Calculadora/src/assets/ilustrations/pisoIlus.webp");
							return target[name];
						}
					});

export { pisoIlustration as p };
