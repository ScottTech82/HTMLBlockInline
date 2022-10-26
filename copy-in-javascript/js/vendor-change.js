const get = (id) => {
    
    VendorService.get(id)
    .done((res) => {
        setVendorData(res);
    })
    .fail((err) => {
        alert("Not found");
    });
}

const save = () => {
    var vendor = getVendorData();
    VendorService.change(vendor)
    .done((res) => {
        clearVendorData();
        alert("Created");
    })
    .fail((err) => {
        alert("Failed");
    })

}

const setVendorData = (vendor) => {
    $("#vid").val(vendor.id);
    $("#vcode").val(vendor.code);
    $("#vname").val(vendor.name);
    $("#vaddress").val(vendor.address);
    $("#vcity").val(vendor.city);
    $("#vstate").val(vendor.state);
    $("#vzip").val(vendor.zip);
    $("#vphone").val(vendor.phone);
    $("#vemail").val(vendor.email);
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
        id: $("#vid").val(),
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

let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = Number(parameters.id);
get(id);

