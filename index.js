let listDOM = document.querySelector("#list");
let addDOM = document.querySelector("#liveToastBtn");
let inputDOM = document.querySelector("#task");
let listLength = document.getElementsByTagName("li");

function addLine() {
  if (inputDOM.value == "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = inputDOM.value;
    inputDOM.blur();
    inputDOM.value = "";

    liDOM.onclick = check;
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = "";
  }
}
addDOM.addEventListener("click", addLine);

function check() {
  this.classList.toggle("checked");
}

function removeButton() {
  this.parentElement.remove();
}

for (let i = 0; i < listLength.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  listLength[i].append(closeButton);
  listLength[i].onclick = check;
}
