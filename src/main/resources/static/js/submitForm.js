const todoControl   = new todoController();


function submitForm(){
    const newTitle = document.querySelector("#titleInput");
    const newDesc = document.querySelector("#descriptionInput")
    const newTargetDate = document.querySelector("#targetDateInput");

    const title = newTitle.value;
    const description = newDesc.value;
    const targetDate = newTargetDate.value;

    newTitle.value = "";
    newDesc.value= "";
    newTargetDate.value= "";

    todoControl.addItem(title, description, targetDate);

}