let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
const form = document.querySelector("form");
const filter = document.querySelector("#filter-todo");

form.addEventListener("submit", submit);
btn.addEventListener("click", addFunc);
filter.addEventListener("change", filterFunc);
function submit(e) {
  e.preventDefault();
}

function addFunc() {
  let valueinput = inp.value;
  if (inp.value == "") {
    inp.style.backgroundColor = "red";
    inp.value = "Todo List Bosdur";
    setTimeout(() => {
      inp.value = "";
      inp.style.backgroundColor = "";
    }, 300);
  } else {
    inp.style.backgroundColor = "";
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let pen = document.createElement("i");
    let box = document.createElement("div");
    box.classList = "box-pen";
    pen.classList = "fa-solid fa-pen fa-bounce";
    i.classList = "fa-solid fa-trash fa-beat";
    li.classList = "li";
    span.innerText = valueinput;
    box.appendChild(pen);
    box.appendChild(i);
    li.appendChild(span);
    li.appendChild(box);
    ul.prepend(li);
    inp.value = "";
    pen.addEventListener("click", penFunc);
    i.addEventListener("click", deletFunc);
    function deletFunc() {
      li.remove();
    }
    function penFunc() {
      span.classList.toggle("line-through");
    }
  }

  // basqa usulla.
  /* ul.insertBefore(li, ul.childNodes[0]); */
}

function filterFunc(e) {
  let valueFilter = e.target.value;
  let filterUl = ul.childNodes;

  console.log(filterUl);

  filterUl.forEach((todo) => {
    switch (valueFilter) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.children[0].classList.contains("line-through")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incompleted":
        if (!todo.children[0].classList.contains("line-through")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
