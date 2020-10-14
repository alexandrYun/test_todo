import Todo from './Todo';

const field = document.querySelector('.input');
let select = document.querySelector('select');

// фунция добавления дела
// и добавляет дело в localStorage

function addTask() {
    let content = field.value;
    if(content == '') {
        return;
    }
    let todo = new Todo(select.value, content, '20/10/20');
    // дальше будет сохранение в LocalStorage
}

// назначение листенеров на кнопку

// функция отрисовки приложения, когда оно включается
// данные берутся из localStorage



/* 
Универсальная функция отрисовки, которая вставляет туду в дом
*/
function GenerateDom() {

}

// обработчики удаления дела

// обработчики редактирования дела

