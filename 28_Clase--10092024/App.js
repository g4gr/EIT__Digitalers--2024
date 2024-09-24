// --- Botones ---
// TODO: 
// 1. "Ir a buscar" la tarea al formulario de tareas.
// 2. Cuando tenga la tarea, debo poder: 
// 2.A. Crearla, asignarle una fecha, asignarle una prioridad y sumarla a la pila de tareas.
// 2.B. Limpiar el formulario.


// --- Tareas ---
// TODO: 
// 1. Crear una clase que contenta el modelo inicial de la tareas.
// 1.A. Debe tener : Fecha, Contenido, Prioridad.
// 2. Si a la tarea le falta uno de los dos items (la tarea y/o la fecha) debe mostrar un error.
// 3. Ordene las tareas por fecha descendente o de forma ascendente.

// --- Editar ---
// TODO:
// 1. Editar la tarea.
// 2. Completar la tarea.
// 3. Eliminar la tarea.
// 4. Seleccionar la tarea.

// Esperar a que el DOM esté completamente cargado
const BtnAddTask = document.getElementById('js-AddTask');;
const BtnEditTask = document.getElementById('js-EditTask');
const BtnDeleteTask = document.getElementById('js-DeleteTask');
const TaskList = document.getElementById('task-list'); // <ul ></ul>


// Función para agregar una tarea
function addTask() {
  //let list = {};
  const Task = document.getElementById('js-Task'); // <input type="text" id="js-Task" name="task" placeholder="Escribe tu tarea aquí">
  const Date = document.getElementById('js-Date');

  let taskValue = Task.value;
  let taskDate = Date.value;


  if (taskValue == '' || taskDate == '') {
    alert('La informacion esta incompleta. Por favor, ingresa la tarea o la fecha');

  } else {
    let node = document.createElement('li');
    let textNode = document.createTextNode(`${taskValue} - Fecha : ${taskDate}`);
    node.appendChild(textNode);
    node.classList.add('TaskList__item');
    node.setAttribute('tabindex', '1');
    TaskList.appendChild(node);

    let nodeInput = document.createElement('input');
    nodeInput.type = 'radio';
    nodeInput.setAttribute('name', 'taskItem');
    node.appendChild(nodeInput);


    alert('Tarea agregada con exito');
    console.log('Se agrego una tarea')
  }
}

// Función para seleccionar una tarea
function selectTask() {
  let taskItems = document.getElementsByName('taskItem');

  taskItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.checked == true) {
        console.log(item);
      }
    })
  })



}


// Función para editar una tarea
function editTask() {
}

// Función para eliminar una tarea
function deleteTask() {
  let tareaAEliminar = document.getElementById('');
}

