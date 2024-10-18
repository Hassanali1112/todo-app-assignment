const inputElem = document.querySelector(".inputElem");
const form = document.querySelector(".new-todo");
const todoWrapper = document.querySelector(".todo-wrapper");
const todoItem = document.querySelectorAll(".item");
const searchItems = document.querySelector(".search-container input");
const search = document.querySelector("#search");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if(inputElem.value){
    
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
    console.log(todoWrapper);

    inputElem.value = "";
  }
  
});
todoWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  }

  // if (e.target.parentNode.parentNode.children[0].classList.contains("cut")) {
  //   e.target.parentNode.parentNode.children[0].classList.remove("cut");
  // }

  if (e.target.classList.contains("done")) {
    if (
      e.target.parentNode.parentNode.children[0].style.textDecoration ==
      "line-through"
    ) {
      e.target.parentNode.parentNode.children[0].style.textDecoration = "none";
    } else {
      e.target.parentNode.parentNode.children[0].style.textDecoration =
        "line-through";
    }
  }
  if (e.target.classList.contains("edit")) {
    let editText = e.target.parentElement.previousElementSibling.textContent.trim();
    // console.log(todoWrapper.children.length)
    debugger;
    let valueToUpdate;
    for(let i =0; i < todoWrapper.children.length; i++){
    valueToUpdate = todoWrapper.children[i].firstElementChild.textContent;
    if(valueToUpdate.trim() == inputElem.value.trim()){
      console.log(i)
    }
    }
    // e.target.parentNode.parentNode.children[0].setAttribute(
    //   "contenteditable","");
    //   inputElem.textContent = e.target.parentElement.parentElement[0];
    //   console.log(inputElem.textContent)
    // // e.target.parentNode.parentNode.children[0].textContent = "";
    // e.target.parentNode.parentNode.children[0].focus();
    // e.target.parentNode.parentNode.children[0].addEventListener(
    //   "blur",
    //   function (e) {
    //     e.target.parentNode.parentNode.children[0].removeAttribute(
    //       "contenteditable"
    //     );
    //     e.target.parentNode.parentNode.children[0].textContent;
    //   }
    // );
  }
});
function filteredTodos(enteredText) {

  for(let i = 0; i <todoWrapper.children.length; i++){
      if(!todoWrapper.children[i].firstElementChild.textContent.toLowerCase().includes(enteredText)){
        todoWrapper.children[i].classList.add("filterItem");
      } else{
         todoWrapper.children[i].classList.remove("filterItem");
      }
  }
}
searchItems.addEventListener("keyup", function (e) {
  e.preventDefault();
  const enteredText = e.target.value;
  filteredTodos(enteredText);
});
