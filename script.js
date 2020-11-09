var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["mobile"] = document.getElementById("mobile").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("t_data").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mobile;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="onEdit(this)">[ = ]</a>';
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a class="btn-remove" onClick="onDelete(this)">[ x ]</a>';
    
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("mobile").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.mail;
    selectedRow.cells[2].innerHTML = formData.mobile;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("t_data").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//jquery
// $("form button.btn").click(function () {
//     var user_name = $("#name").val();
//     var email = $("#mail").val();
//     var m_number = $("#mobile").val();
   

//     if (user_name.length && email.length && m_number.length > 0) {

//         var new_row = "<tr><td>" + user_name + "</td><td>" + email +
//             "</td><td>" + m_number +"</td></tr>";
//         $("table tbody").append(new_row);
//         $("#name, #mail, #mobile").val("");
//     }
//     return false;
// });
