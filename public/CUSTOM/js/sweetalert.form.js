// Category Forms
function categoryForm(url,method) {
    let holder = document.createElement('div')
    holder.innerHTML = `<div class="row">
                            <div class="col-sm-12">
                                <form action="${url}" method="${method}">
                                    <label class="d-flex flex-column align-items-center mb-3">
                                        <img src="/IMAGES/img.svg" alt="" class="img-fluid img-thumbnail curp rounded rounded-circle ob-fit-square" width="150" id="category-prev-img">
                                        <small>Click to Upload</small>
                                        <input type="file" class="d-none" id="prev-file-image" accept="image/*">
                                    </label>
                                    <div class="form-group text-left">
                                        <label class="d-block">
                                            Category Name:
                                            <input type="text" class="form-control mt-1">
                                        </label>
                                    </div>
                                    <div class="form-group text-left">
                                        <label class="d-block">
                                            Category Description:
                                            <textarea type="text" class="form-control" mt-1 id="elm1" maxlength="400"></textarea>
                                        </label>
                                    </div>
                                    <input type="submit" value="Add" class="w-100 d-block btn btn-sm btn-success">
                                </form>
                            </div>
                        </div>`;
    return holder
}

function getRoles(userData, user){
    let holder = document.createElement('div')
    holder.innerHTML =`
        <form action="/admin/user/roles/${userData}" method="POST">
        <div class="form-group p-3">
        <label>
        <img src="${user.image}" class="ob-fit-square img-fluid rounded rounded-circle" width="100">
        </label>
        <h4 class="mb-3">${user.fullname}</h4>
        <label class="d-block text-left">
            Set Role
            <select type="text" class="form-control">
                <option value="user" >User</option>
                <option value="vendor" >Vendor</option>
                <option value="vendor" >Manager</option>
            </select>
        </label>
        <input type="submit" value="Update" class="btn btn-sm btn-success w-100">
        </div>
        </form>
    `
    return holder
}

function getUserStatus(userData) {
    let holder = document.createElement('div')
    holder.innerHTML = `
        <form action="/admin/user/status/${userData}" method="POST">
        <div class="form-group p-3">
        <h2>Set User Status</h2>
        <label class="d-block text-left">
            Set Role
            <select type="text" class="form-control">
                <option value="user" >Active</option>
                <option value="vendor" >Deactivated</option>
                <option value="vendor" >Restricted</option>
            </select>
        </label>
        <input type="submit" value="Update" class="btn btn-sm btn-success w-100">
        </div>
        </form>
    `
    return holder
}



function addVendorHtml() {
    let holder = document.createElement('div')
    
    holder.innerHTML = `
        <form action="  ">
  <div class="form-group text-left">
    <label>Vendor Name:</label>
    <input type="text" name="txte" class="form-control" id="">
  </div> 
  <div class="form-group text-left">
    <label>Vendor Description:</label>
  <textarea type="text" name="txte" class="form-control p-2" id="elm1"></textarea>
  </div>
  <div class="form-group text-left">
    <label>Vendor User:</label>
    <input type="text" name="txte" class="form-control" id="">
  </div>
  <div class="form-group text-left">
    <label>Vendor Email:</label>
    <input type="text" name="txte" class="form-control" id="">
  </div>
  <div class="form-group text-left">
    <label>Vendor Password:</label>
    <input type="text" name="txte" class="form-control" id="">
  </div>
</form>
    `
    
    return holder
}