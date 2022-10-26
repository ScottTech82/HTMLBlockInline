//creating all methods to be called

const url = "http://localhost:5555/api/vendors";

class VendorService {

    static list = () => {
        return $.getJSON(`${url}`);
    };

    static get = (id) => {
       return $.getJSON(`${url}/${id}`);
    }

    static create = (vendor) => {
        return $.ajax({
            method: "POST",
            url: `${url}`,
            data: JSON.stringify(vendor),
            contentType: "application/JSON"
        });
    }

    static change = (vendor) => {
        return $.ajax({
            method: "PUT",
            url: `${url}/${vendor.id}`,
            data: JSON.stringify(vendor),
            contentType: "application/JSON"
        });
    }

    static remove = (id) => {
        return $.ajax({
            method: "DELETE",
            url: `${url}/${id}`
        });
    }

}