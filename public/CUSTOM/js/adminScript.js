// DELETE CATEGORY ANIMATION
// select all delete category buttons and convert to an array
const DELETE_CATEGORY_BTN = Array.from($(".delete-category"));

// add click event listener to each button
DELETE_CATEGORY_BTN.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        swal({
            icon: "/IMAGES/trash-100.gif",
            text: "Do you want to delete this category?",
            className: "btn-sm",
            buttons: {
                cancel: true,
                confirm: {
                    text: "Yes, delete",
                    className: "bg-danger",
                },
            },
        });
    });
});

// ADD CATEGORY

$("#add-category").click(function (e) {
    e.preventDefault();

    swal({
        title: "New Category",
        content: categoryForm("/admin/product/category", "GET"),
        button: {
            text: "Cancel",
            className: "bg-danger d-block",
        },
    });
});

$(document).on("change", "#prev-file-image", function (e) {
    // code to run when .my-target is clicked
    try {
        document.querySelector("#category-prev-img").src = URL.createObjectURL(
            e.target.files[0]
        );
    } catch (err) {
        document.querySelector("#category-prev-img").src = "/IMAGES/img.svg";
    }
});


// DELETE & APPROVE PRODUCT ON APPROVE PAGE
const handleProductAction = async (selector, icon, text, confirmBtnClass, method) => {
    document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("click", async () => {
            const result = await swal({
                icon,
                text,
                buttons: {
                    cancel: true,
                    confirm: {
                        text: "Yes",
                        className: `${confirmBtnClass} shadow-0`,
                    },
                },
            });
            if (result == true) {
                const productId = el.getAttribute("data-product");
                try {
                    const response = await axios({
                        method,
                        url: "/admin/product/status",
                        data: {productId},
                    });
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
            }
        });
    });
};

handleProductAction(".delete-product", "warning", "Are you sure you want to reject this product?", "btn-danger", "PUT");
handleProductAction(".accept-product", "success", "Are you sure you want to approve this product?", "btn-success", "DELETE");
handleProductAction(".hide-product", "success", "Are you sure you want to hide this product on the home page?", "btn-success", "POST");
handleProductAction(".show-product", "success", "Are you sure you want to show this product on the home page?", "btn-success", "PATCH");


const handleUserStatus = async (selector, icon, text, confirmBtnClass, method) => {
    document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("click", async () => {
            const result = await swal({
                icon,
                text,
                buttons: {
                    cancel: true,
                    confirm: {
                        text: "Yes",
                        className: `${confirmBtnClass} shadow-0`,
                    },
                },
            });
            if (result == true) {
                const userid = el.getAttribute("data-product");
                try {
                    const response = await axios({
                        method,
                        url: "/admin/user/status",
                        data: {userid},
                    });
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
            }
        });
    });
};

handleUserStatus(".delete-user", "warning", "Are you sure you want to delete this user?", "btn-danger", "DELETE");

handleUserStatus(".delete-regular-user", "warning", "Are you sure you want to delete this user?", "btn-danger", "DELETE");

const handleUserRoles = async (selector, confirmBtnClass, method) => {
    for (const el of document.querySelectorAll(selector)) {
        const userData = el.getAttribute("data-users")
        el.addEventListener("click", async () => {
            const response = await axios({
                method: 'POST',
                url: "/admin/user/get-data",
                data: {userData},
            });
            const result = await swal({
                content: getRoles(userData, response.data),
                buttons: {
                    cancel: true,
                },
            });
        });
    }
};

handleUserRoles(".edit-user", "btn-danger", "POST");

const hnadleUserStatus = async (selector, confirmBtnClass, method) => {
    for (const el of document.querySelectorAll(selector)) {
        const userData = el.getAttribute("data-users")
        el.addEventListener("click", async () => {
            const result = await swal({
                content: getUserStatus(userData),
                buttons: {
                    cancel: true,
                },
            });
        });
    }
};

hnadleUserStatus(".update-user", "btn-success", "POST");


//VENDOR PAGES

let addVendor = document.querySelector('#add-vendor')


if(addVendor){
    addVendor.addEventListener('click',()=>{
        swal({
            title: 'Add a Vendor',
            content: addVendorHtml(),
            button:{
                cancel: true
            }
        })
    })
}

