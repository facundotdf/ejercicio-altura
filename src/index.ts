const ALTURA_MINIMA: number = 1.3;

let alturaUsuario: number = Number(
  prompt("Ingrese altura del usuario en metros")
);

if (alturaUsuario >= ALTURA_MINIMA) {
  console.log("Puede ingresar a la montaña rusa");
} else {
  console.log("Usted no cumple con la altura");
}
