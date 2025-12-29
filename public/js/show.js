let forms = document.querySelectorAll(".delete-form");

for(let form of forms) {
    form.addEventListener("submit", (e) => {
        const confirmDelete = confirm("Are you sure you want to delete this Listing?");
        if(!confirmDelete) {
            e.preventDefault();
        }
    });
};