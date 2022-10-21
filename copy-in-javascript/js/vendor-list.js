
const refresh = () => {
    $.getJSON("http://localhost:5555/api/vendors")
    .done((resp) => {
        display(resp);
    })
    .fail((err) => {
        console.error(err);
    });
}

const display = (vendors) => {
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(let vendor of vendors) {
        let row = "<tr>";
        row += `<td>${vendor.id}</td>`;
        row += `<td>${vendor.code}</td>`;
        row += `<td>${vendor.name}</td>`;
        row += `<td>${vendor.address} ${vendor.city} ${vendor.state} ${vendor.zip}</td>`;
        row += `<td>${vendor.phone}</td>`;
        row += `<td>${vendor.email}</td>`;
        row += "</tr>";
        tbodyCtrl.innerHTML += row;
    }
}