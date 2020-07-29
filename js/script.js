
// funcion que solo modifica el color del texto que contenga el div container
let color = document.querySelectorAll('.container p')
function colorRam() {   
   let x=Math.floor(Math.random() * 256);
   let y=Math.floor(Math.random() * 256);  //comienza de 0 a 256 para que incluya al 255
   let z=Math.floor(Math.random() * 256);

    return `rgb(${x}, ${y}, ${z})`; // retorna un string con el rgb
}

for(let i = 0; i < color.length; i++){  // ciclo que llama la funcion colorRam() para cambiar los colores de cada uno de los parrafos
    color[i].style.color = colorRam();
}

console.log(colorRam()); //imprimir la funcion 

