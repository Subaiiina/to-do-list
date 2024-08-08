function deletehandler(e) {
    const clicked = e.target;
    clicked.parentElement.remove();

}

function clickhandler() {

    const gettask = document.getElementById("taskinput");

    const newtask = gettask.value;
    const newlistitem = document.createElement("li");

    newlistitem.innerText = newtask;
    newlistitem.classList = "list-group-item d-flex justify-content-between align-items-center";
    newlistitem.style.width = "40%";
    newlistitem.style.marginLeft = "300px";

    const deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.classList = "btn btn-danger";
    deletebutton.addEventListener("click", deletehandler);


    newlistitem.appendChild(deletebutton);
    const list = document.getElementById("todolist");
    list.appendChild(newlistitem);

    gettask.value = "";


}
const button = document.getElementById("button-task");
button.addEventListener("click", clickhandler);




const buttonremovearray = document.getElementsByClassName("delete-button");
for (let i = 0; i < buttonremovearray.length; i++) {
    buttonremovearray[i].addEventListener("click", deletehandler);
}
