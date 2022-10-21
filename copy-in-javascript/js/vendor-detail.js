
const display = () => {
    let id = +document.getElementById("vpk").value;
    $.getJSON(`http://localhost:5555/api/vendors/${id}`)
        .done((res) => {
            render(res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const render = (vendor) => {
    document.getElementById("vid").innerText = vendor.id;
    document.getElementById("vcode").innerText = vendor.code;
    document.getElementById("vname").innerText = vendor.name;
    document.getElementById("vaddress").innerText = `${vendor.address} ${vendor.city} ${vendor.state} ${vendor.zip}`;
    document.getElementById("vphone").innerText = vendor.phone;
    document.getElementById("vemail").innerText = vendor.email;
}