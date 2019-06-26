
$("table").on("click", ".editPost", (e) => {
    // e.preventDefault();
    console.log(e.target.attributes['data-id'].value);
    let id = e.target.attributes['data-id'].value;
    GetPost(id);

});
$("table").on("click", ".removePost", (e) => {
    // e.preventDefault();

    console.log(e.target.attributes['data-id'].value);
    let id = e.target.attributes['data-id'].value;
    DeletePost(id);
});

function GetPost(id) {
    $.ajax({
        url: "/posts/" + id,
        type: "GET",
        contentType: "application/json",
        success: (post) => {
            console.log('------------')
            let form = document.$(form);     //forms["postForm"];
            form.elements["id"].value = post._id;
            form.elements["postName"].value = post.title;
            form.elements["postBody"].value = post.body[0];

        }
    });
}

function CreatePost(title, body) {
    $.ajax({
        url: "/posts",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            title: title,
            body: body,
            typeNote: 'note'
        }),
        success: () => {
            reset();
            window.location.replace("/")
        }
    })
}

function EditPost(id, title, body) {
    $.ajax({
        url: "/posts",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            id: id,
            title: title,
            body: body
        }),
        success: () => {
            // reset();
            // window.location.replace("/EditNote")
            
        }
    })
}

function DeletePost(id) {
    $.ajax({
        url: "/posts/" + id,
        contentType: "application/json",
        method: "DELETE",
        success: (post) => {
            console.log(post);
            reset();
            window.location.replace("/")
        }
    })
}

function reset() {
    let form = document.forms["postForm"];
    form.elements["id"].value = 0;
    form.elements["postName"].value = '';
    form.elements["postBody"].value = '';
}


function CreateListsNote(title, body) {
    $.ajax({
        url: "/posts",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            title: title,
            body: [body],
            typeNote: 'lists'
        }),
        success: () => {
        //     reset();
        //     window.location.replace("/")
        // GetPost(id);
        }
    })

}

$('#next-item').on("click", "form", (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    let id = $(form).target.elements["id"].value;
    let typeNote = e.target.elements["type-note"].value;
    let title = e.target.elements["postName"].value;
    let body = e.target.elements["postBody"].value;

    CreateListsNote(title, body);
    GetPost(id);
})


$("form").submit((e) => {
    e.preventDefault();

    let id = e.target.elements["id"].value;
    let typeNote = e.target.elements["type-note"].value;
    let title = e.target.elements["postName"].value;
    let body = e.target.elements["postBody"].value;
    if (typeNote == 'note') {
        if (id == 0) {
            CreatePost(title, body);
        } else {
            EditPost(id, title, body);
        }
    } if (typeNote == 'list') {
        if (id == 0) {
            CreateListsNote(title, body);
        } else {
            EditPost(id, title, body);
        }
    }
});



$("#reset").click((e) => {
    e.preventDefault();
    reset();
    window.location.replace("/")
});

// ----

$("#add-note").click((e) => {
    window.location.replace("/addNewNote")
})

$("#add-lists-note").click((e) => {
    window.location.replace("/lists")
})
