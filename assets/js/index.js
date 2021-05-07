window.addEventListener('scroll',() =>{
    const header =document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('open');
}


// $("#update_user").submit(function(event){
//     event.preventDefault();

//     var unindexed_array = $(this).serializeArray();
//     var data = {}

//     $.map(unindexed_array, function(n, i){
//         data[n['name']] = n['value']
//     })


//     var request = {
//         "url" : `http://localhost:3000/api/users/${data.id}`,
//         "method" : "PUT",
//         "data" : data
//     }

//     $.ajax(request).done(function(response){
//         alert("Data Updated Successfully!");
//     })

// })
