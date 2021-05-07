const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.createTreeRoutes = (req,res)=>{
    res.render('createtree');
}

exports.userRoutes = (req,res)=>{
    const id = req.params.id;
    axios.get('http://localhost:3000/api/users/'+id)
        .then(function(response){
            // console.log(response);
            res.render('user', { users : response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.updateUser = (req,res)=>{
    res.render('update_user');
}


// exports.updateUser = (req,res) =>{
//     console.log("hello abluvhaerbvuyvbuiegrvuyevwkuavweucybayukvkuayvkyuawvkuayevrkyuv");
//     axios.get('http://localhost:3000/api/users/'+req.query.id)
//         .then(function(userdata){
//             // res.render("update_user", { user : userdata.data});
//             console.log(userdata.data);
//         })
//         .catch(err =>{
//             res.send(err);
//         })
// }