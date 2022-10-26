
const refresh = () => {
    UserService.list()
    .done((res) => {
        display(res);
    })
    .fail((err) => {
        console.error(err);
    });
}


//using HTML & JavaScript.  Could do it in JQuery using .append().
const display = (users) => {
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(let user of users) {
        let row = "<tr>";
        row += `<td>${user.id}</td>`;
        row += `<td>${user.firstname} ${user.lastname}</td>`;
        row += `<td>${user.username}</td>`;
        row += `<td>${user.phone}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.isReviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.isAdmin ? "Yes" : "No"}</td>`;
        row += `<td>`
        row +=      `<a href="user-detail.html?id=${user.id}">Detail</a>`
        row +=      ` | `
        row +=      `<a href="user-change.html?id=${user.id}">Edit</a>`
        row += `</td>`
        row += "</tr>";
        tbodyCtrl.innerHTML += row;
    }
}
/* JQuery would be....

const display = (users) => {   
   let tbodyCtrl= $("#tbody");
   tbodyCtrl.html("");
   for(let user of users) {
        let row = $("<tr></tr>");
        row.append($(`<td>${user.id}</td>`));
        row.append($(`<td>${user.firstname} ${user.lastname}</td>`));
        row.append($(`<td>${user.username}</td>`));
        row.append($(`<td>${user.phone}</td>`));
        row.append($(`<td>${user.email}</td>`));
        row.append($(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`));
        row.append($(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`));
        let action = ($(`<td></td>`));
        action.append($(`<a href="user-detail.html?id=${user.id}">Detail</a>));
        action.append($("<span> | </span>"));
        action.append($(`<a href="user-change.html?id=${user.id}">Edit</a>));
        row.append(action); //make sure the action which is td tags is added to row.
        tbodyCtrl.append(row); //make sure the row is added to tbody.
    }
}    

 Could also do.. but have to do this for each piece of data
    let td = $(`<td></td>`);
    td.text(user.id);
    row.append(td);

*/







