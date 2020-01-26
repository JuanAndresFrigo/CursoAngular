// Un archivo simple de TypeScript

function activar(
  quien: string,
  objeto: string = "batise�al",
  momento?: string
) {
  let mensaje: string;

  if (momento) {
    mensaje = ` ${quien} activ� la ${objeto} en la ${momento}`;
  } else {
    mensaje = ` ${quien} activ� la ${objeto}`;
  }
  console.log(mensaje);
}

activar("Gordon", "batise�al", "tarde");
