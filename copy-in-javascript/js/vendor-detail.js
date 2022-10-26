
const display = (id) => {
   
    VendorService.get(id)
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

const remove = () => {
    let id = $("#vid").val();
    VendorService.remove(id)
    .done((res) => {
        alert("Deleted");
    })
    .fail((err) => {
        alert("Failed");
    })
}

let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = Number(parameters.id);
display(id);
