const inputElem = document.querySelector(".inputElem");
const form = document.querySelector(".new-todo");
const todoWrapper = document.querySelector(".todo-wrapper");
const todoItem = document.querySelectorAll(".item");
const searchItems = document.querySelector(".search-container input");
const search = document.querySelector("#search");
let index = null;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (index !== null) {
    // for (let i = 0; i < todoWrapper.children.length; i++) {
    //   if (index == i) {
    //     todoWrapper.children[i].firstElementChild.textContent = inputElem.value;
    //   }
    // }
    todoWrapper.children[index].firstElementChild.textContent = inputElem.value;
    index = null;
  } else {
    if (inputElem.value) {
      let newTodo = document.createElement("li");
      newTodo.classList.add("item");
      todoContext = `<div class="text">${inputElem.value}</div>
            <div class="btns">
              <button class="edit">Edit</button>
              <button class="remove">Delete</button>
              <button class="done">Done</button>
            </div>`;
      newTodo.innerHTML = todoContext;
      todoWrapper.appendChild(newTodo);


    }
  }
  inputElem.value = "";
});
todoWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("done")) {
    if(e.target.parentElement.previousElementSibling.classList.contains("cut")){
      e.target.parentElement.previousElementSibling.classList.remove("cut");
    } else{
      e.target.parentElement.previousElementSibling.classList.add("cut");
    }
  }
  if (e.target.classList.contains("edit")) {
    let ElemToUpdate = e.target.parentElement.parentElement;
    let ElemText = ElemToUpdate.firstElementChild.textContent;
   for(let i =0; i < todoWrapper.children.length; i++){
    if(todoWrapper.children[i] === ElemToUpdate){
      index = i;
    }
    inputElem.value = ElemText;
    inputElem.focus();
   }
    inputElem.focus();
  }
});
function filteredTodos(enteredText) {
  for (let i = 0; i < todoWrapper.children.length; i++) {
    if (
      !todoWrapper.children[i].firstElementChild.textContent
        .toLowerCase()
        .includes(enteredText)
    ) {
      todoWrapper.children[i].classList.add("filterItem");
    } else {
      todoWrapper.children[i].classList.remove("filterItem");
    }
  }
}
searchItems.addEventListener("keyup", function (e) {
  e.preventDefault();
  const enteredText = e.target.value;
  filteredTodos(enteredText);
});
