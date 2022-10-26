
const save = () => {
    var vendor = getVendorData();
    VendorService.create(vendor)
    .done((res) => {
        clearVendorData();
        alert("Created");
    })
    .fail((err) => {
        alert("Failed");
    })

}

const clearVendorData = () => {
    $("#vcode").val("");
    $("#vname").val("");
    $("#vaddress").val("");
    $("#vcity").val("");
    $("#vstate").val("");
    $("#vzip").val("");
    $("#vphone").val("");
    $("#vemail").val("");
}

const getVendorData = () => {
    let vendor = {
        id: 0,
        code: $("#vcode").val(),
        name: $("#vname").val(),
        address: $("#vaddress").val(),
        city: $("#vcity").val(),
        state: $("#vstate").val(),
        zip: $("#vzip").val(),
        phone: $("#vphone").val(),
        email: $("#vemail").val()
    };
    console.debug(vendor);
    return vendor;
}