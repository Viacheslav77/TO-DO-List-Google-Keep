
$('body').on('click', (e) => {
    // e.preventDefault();

    if (e.target.id == 'click-outside') {
        reset();
        $("#new-note").show();
        $('#list-note').hide();
    }
    if (e.target.id == 'new-title') {
        $("#new-note").hide();
        $('#list-note').show();
    }

    console.log(e.target.className, e.target.id);

    if (e.target.id == "reset") {
        e.preventDefault();
        reset();
        window.location.replace("/")
    };

    if (e.target.id == "remove-note") {
        e.preventDefault();
        let form = document.forms["postForm"];
        let id = form.elements["id-note"].value;
        DeleteNote(id);
    }

    // if (e.target.id == 'search') {
    //     $("input[type='text']").on('keyup', function (e) {
            
    //     });
    // }

    if (e.target.id == 'new-item') {
        $("input[type='text']").on('keyup', function (e) {
            // $('#new-item').change( (e) => {  
            let uls = document.forms["postForm"].elements["postBody"];

            if (uls === this) {
                addNewItem()
            }
            if (uls[uls.length - 1] === this) {
                addNewItem();
            }
        });
    }

    if (e.target.id == 'save-form') {
        e.preventDefault();
    
        let form = document.forms["postForm"];
        let id = form.elements["id-note"].value;
        let typeNote = form.elements["type-note"].value;
        let title = form.elements["postName"].value;
    
        console.log(id, typeNote, title);
    
    
        let body;
        if (typeNote == 'note') {
    
            body = form.elements["postBody"].value;
            console.log(body);
            if (id == 0) {
                CreatePost(title, body);
            } else {
                EditPost(id, title, body);
            }
        } if (typeNote == 'list') {
    
            body = [];
            form.elements["postBody"].forEach(element => {
                if (element.value == "") return;
                body.push(element.value)
            });

            console.log('-----------------', typeNote)
    
            if (id == 0) {
                CreateListsNote(title, body);
            } else {
                EditPost(id, 'lists', title, body);
            }
        }
    }

});


function addNewItem() {
    $("#new-item").removeAttr("id");
    let newLi = document.createElement('li');
    newLi.innerHTML = '<input class="form-control border border-light mb-1 new-item" id ="new-item" type="text" autocomplete="off" name="postBody" placeholder="+ New list item" required />';
    listItems.appendChild(newLi);
}

function CreateListsNote(title, body) {
    $.ajax({
        url: "/lists",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            title: title,
            body: body,
            typeNote: 'lists'
        }),
        success: () => {
            reset();
            window.location.replace("/");
        }
    })

}

function reset() {
    let form = document.forms["postForm"];
    form.elements["id-note"].value = 0;
    form.elements["postName"].value = '';
    $('#listItems').html('<li> <input class="form-control border border-light mb-1 new-item" id ="new-item" type="text" autocomplete="off" name="postBody" placeholder="+ New list item" required /></li>');
}

function DeleteNote(id) {
    $.ajax({
        url: '/api/lists/' + id,
        contentType: "application/json",
        method: "DELETE",
        success: (post) => {

            // reset();
            window.location.replace("/");

        }
    })
}

function EditPost(id, typeNote, title, body) {
    $.ajax({
        url: "/api/lists/" +id,
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            id: id,
            typeNote: typeNote,
            title: title,
            body: body
        }),
        success: () => {
            // reset();
            window.location.replace("/")

        }
    })
}

// $('#listItems').on('click', (e) => {
//     if (e.target.id == 'new-item') {
//         $("input[type='text']").on('keyup', function (e) {
//             // $('#new-item').change( (e) => {  
//             let uls = document.forms["postForm"].elements["postBody"];

//             if (uls === this) {
//                 addNewItem()
//             }
//             if (uls[uls.length - 1] === this) {
//                 addNewItem();
//             }
//         });
//     }
// });

// $("table").on("click", ".editPost", (e) => {
//     e.preventDefault();
//     console.log(e.target.attributes['data-id'].value);
//     let id = e.target.attributes['data-id'].value;
//     window.location.replace("/posts/" + id);
//     // GetPost(id);

// });



// function GetPost(id) {
//     $.ajax({
//         url: "/posts/" + id,
//         type: "GET",
//         contentType: "application/json",
//         success: (post) => {
//             // window.location.replace("/addNewNote");
//             // console.log('------------',post._id, post.title, post.body)
//             // let form = document.forms["postForm"];
//             // form.elements["id-note"].value = post._id;
//             // form.elements["postName"].value = post.title;
//             // form.elements["postBody"].value = post.body;

//         }
//     });
// }

// function CreatePost(title, body) {
//     $.ajax({
//         url: "/posts",
//         contentType: "application/json",
//         method: "POST",
//         data: JSON.stringify({
//             title: title,
//             body: body,
//             typeNote: 'note'
//         }),
//         success: () => {
//             reset();
//             window.location.replace("/")
//         }
//     })
// }





// ----

// $("#add-note").click((e) => {
//     window.location.replace("/addNewNote")
// })

// $("#add-lists-note").click((e) => {
//     window.location.replace("/lists")
// })
