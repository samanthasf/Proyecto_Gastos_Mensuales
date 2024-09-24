let listaNombresGastos = [];
let listaValoresGastos =[];
let listaDescripcionesGastos =[];

function clickBoton(){
    let nombreGasto=document.getElementById('nombreGasto').value;
    let valorGasto= document.getElementById('valorGasto').value;
    let descripcionGasto= document.getElementById('descripcionGasto').value;
   
    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);

    if (valorGasto > 150){

       alert ('Su gasto es mayor de 150 USD ');
    }
    actualizarListaGastos();

}

function actualizarListaGastos(){
    const listaElementos=document.getElementById ('listaDeGastos');
    const totalElementos= document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion)=>{
        const valorGasto= Number(listaValoresGastos[posicion]);
        const descrip = listaDescripcionesGastos[posicion];
        htmlLista+=`<li>${elemento}- USD  ${valorGasto.toFixed(2)}- Descripcion: ${descrip}
                        <button  onclick="editarGasto([${posicion}]);">editar</button>
                        <button  onclick="eliminarGasto([${posicion}]);">eliminar</button>
                    </li>`;
        
        totalGastos += Number(valorGasto);
        console.log(descrip);
        
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value= '';
    document.getElementById('valorGasto').value= '';
    document.getElementById('descripcionGasto').value= '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionesGastos.splice(posicion,1);
    actualizarListaGastos();

}

function editarGasto(posicion){
    let nombreGasto = listaNombresGastos[posicion];
    let valorGasto = listaValoresGastos[posicion];
    let descripcionGasto = listaDescripcionesGastos[posicion];

    // Mostrarlos en el formulario para que el usuario pueda editarlos
    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('valorGasto').value = valorGasto;
    document.getElementById('descripcionGasto').value = descripcionGasto;


}