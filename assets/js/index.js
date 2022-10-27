let arregloTareas = []

let id = 0
let tarea = document.querySelector('#input')
let total = document.querySelector('#total')


document.querySelector('#botonAgregar').addEventListener('click', () => {
    if (tarea.value != '') {
        document.querySelector('#campoMensaje').style.display = 'none'
        let textTarea = tarea.value

        let objetoTarea = {
            'id': ++id,
            'descripcion': textTarea,
            'completado': false
        }

        arregloTareas.push(objetoTarea);
        console.log(arregloTareas);
        actualizarTareas(arregloTareas);
        total.innerHTML = arregloTareas.length;


    } else {
        tarea.focus();
        document.querySelector('#campoMensaje').style.display = 'inline';
    }
})

function actualizarTareas(arregloTareas) {
    let contador = 0 
    let table = document.querySelector('#table')
    let html = '';
    for (let itemTarea of arregloTareas) {
        let estadoCheck = itemTarea.completado ? 'checked' : ''
        if(estadoCheck){
            contador++
        }
        html += `<tr>
        <td id="id">${itemTarea.id}</td>
        <td id="tareas">${itemTarea.descripcion}</td>
        <td><input class='checkbox'type="checkbox" id="checkBox_${itemTarea.id}" ${estadoCheck} onclick='tareasRealizadas("${itemTarea.id}")'></td>
        <td ><a href="#" id="delete" onclick='tareasEliminadas("${itemTarea.id}")'>X</a></td>
        <tr>
        `
    }
    table.innerHTML = html;
    document.querySelector("#realizado").innerHTML = ''+ contador

}

function tareasRealizadas(id){
    let valorCheckBox = document.querySelector('#checkBox_'+id).checked
    let indexCheckbox = arregloTareas.findIndex((tarea)=>{
        return tarea.id == id
    })
    arregloTareas[indexCheckbox].completado = valorCheckBox
    actualizarTareas(arregloTareas)
    console.log(indexCheckbox, valorCheckBox)
}

function tareasEliminadas(id){
    let indexCheckbox = arregloTareas.findIndex((tarea)=>{
        return tarea.id == id
    
    })
    arregloTareas.splice(indexCheckbox,1)
    actualizarTareas(arregloTareas)
    total.innerHTML = arregloTareas.length;
}