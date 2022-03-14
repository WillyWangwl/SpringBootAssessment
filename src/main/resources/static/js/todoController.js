
class todoController {

    constructor() {
        this._items = [];
    }

    addItem(title, description, targetDate){

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('targetDate', targetDate);

        fetch('http://localhost:8080/item/add', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Added TODO item!")
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to TODO List ")
        });

    }

    displayItem() {
        //  fetch the items from the database using the API

        const todoController = this;
        todoController._items = [];


        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())
            .then(function (data) {

                data.forEach(function (item, index) {
                    const itemObj = {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        targetDate: item.targetDate,
                    };
                    todoController._items.push(itemObj)
                });
                todoController.renderProductPage();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderProductPage() {
        for (var i = 0; i < this._items.length; i++) {
            const item = this._items[i];
            //  split and rearrange date from yyyy-mm-dd to dd-mm-yyyy
            let d = item.targetDate.split("-");
            let dateConvert = d[2]+"/"+d[1]+"/"+d[0];

            displayTableRow(item.title, item.description, dateConvert);
        }
    }
}// End of Class

function displayTableRow(title, description, targetDate ){
    const table = document.querySelector("#displayTable")
    //  insert to first row
    let newRow = table.insertRow(1);
    let cel1 =  newRow.insertCell(0);
    let cel2 =  newRow.insertCell(1);
    let cel3 =  newRow.insertCell(2);

    cel1.innerHTML = title;
    cel2.innerHTML = description;
    cel3.innerHTML = targetDate;
}










