let forms = document.querySelectorAll(".delete-form");
console.log(forms);

for(let form of forms) {
    form.addEventListener("submit", (e) => {
        const confirmDelete = confirm("Are you sure you want to Delete this Listing?");
        if(!confirmDelete) {
            e.preventDefault();
        }
    });
};

let deleteReviewBtns = document.querySelectorAll(".delete-ka-btn");

for(let btn of deleteReviewBtns) {
    btn.addEventListener("submit", (e) => {
        const confirmDeleteReview = confirm("Do you want to Delete this Review?");
        if(!confirmDeleteReview) {
            e.preventDefault();
        }
    });
};