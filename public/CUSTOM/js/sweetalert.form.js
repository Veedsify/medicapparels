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