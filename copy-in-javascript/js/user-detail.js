
const display = () => {
    let id = +document.getElementById("xpk").value;
    $.getJSON(`http://localhost:5555/api/users/${id}`) // ${id}`, user)
        .done((res) => {
            render(res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const render = (user) => {
    document.getElementById("xid").innerText = user.id;
    document.getElementById("xfullname").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("xusername").innerText = `${user.username}`;
    document.getElementById("xphone").innerText = user.phone;
    document.getElementById("xemail").innerText = user.email;
    document.getElementById("xreviewer").innerText = user.isReviewer ? "Yes" : "No";
    document.getElementById("xadmin").innerText = user.isAdmin ? "Yes" : "No";
}