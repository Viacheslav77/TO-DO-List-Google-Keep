
$('body').on('click', (e) => {
    // e.preventDefault();

    if(e.target.id =='none'){
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

    // if (e.target.className == "list-group-item") {
    //     // e.preventDefault();
    //     console.log(this.$('.list-group-item'));
        
    //     }

});

$('#listItems').on('click', (e) => {
    // e.preventDefault();

    if (e.target.id == 'new-item') {
        
        $('#new-item').one('keyup', (e) => {         
            $("#new-item").removeAttr("id");    
            let newLi = document.createElement('li');
            newLi.innerHTML = '<input class="form-control border border-light mb-1 new-item" id ="new-item" type="text" autocomplete="off" name="postBody" placeholder="+ New list item" required />';
            listItems.appendChild(newLi);
        });
       
    }

});

$("#save-form").on("click", (e) => {
    e.preventDefault();

    let form = document.forms["postForm"];
    let id = form.elements["id-note"].value;
    let typeNote = form.elements["type-note"].value;
    let title = form.elements["postName"].value;

    console.log(id,typeNote,title);


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

        if (id == 0) {
            CreateListsNote(title, body);
        } else {
            EditPost(id, title, body);
        }
    }
});

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

function EditPost(id, title, body) {
    $.ajax({
        url: "/lists",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            id: id,
            title: title,
            body: body
        }),
        success: () => {
            // reset();
            window.location.replace("/")

        }
    })
}

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
