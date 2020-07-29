function removeTask1 (){
    console.log("add asign task 2 function")
    var id = $("#userId").text();
    var taskName = $("#heading").text()
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    var newArray=[]
    fetch(finalApi)
    .then(function(res){
        return res.json()
       
    })
    .then(function(data){
        console.log("data = " +data)
        console.log("first task = " + data.task[0])
        console.log("taskName = " + taskName)
        var index;
        data.task.forEach(function(task){
            if(task.name==taskName){
                index = task.name.indexOf(taskName)
                    console.log(index)
                    console.log("task name = " + task.name)
                    removeAssignFromDB(index)
                    
            } else {
                newArray.push()
            }
        })
        // for (var i = data.task.length - 1; i >= 0; --i) {
        //     if (data.task[i].name == taskName) {
        //         console.log("1 = " + data.task[i].name)
        //         console.log("2 =  " + taskName)
        //         console.log("index = " + i)
        //         console.log("intitial length = " + data.task.length)
        //         removefromTask(i)
                
        //         console.log("new length = " + data.task.length)
        //     }
        // }
})
    .catch(function(error){
        console.log("error loading JSON")
    })
}

function removeAssignFromDB(index) {
    console.log("removeAssignFromDB() function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$splice": {
                    "task": {name:index}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("splice successful")
        },
        error: function (xhr, status, error) {
            console.log(error + "Error: No SPLICe");
        }
    });
};


function removefromTask (index){
    console.log("removeFromTask function")
    var id = $("#userId").text();
    var taskName = $("#heading").text()
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    fetch(finalApi)
    .then(function(res){
        return res.json()  
    })
    .then(function(data){
        const array = data.task
        console.log("array = " +array)
        console.log("index is here" + index)
        console.log(array.length)
        console.log("remove this = " +data.task[index].name)
        array.splice(i,1);
        console.log(array.length)      
})
    .catch(function(error){
        console.log("error loading JSON")
    })
}
// function removeTask1 (){
//     console.log("add asign task 2 function")
//     var id = $("#userId").text();
//     var taskName = $("#heading").text()
//     var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
//     var api = $("#example").text();
//     var sliced = id.slice(0, -1);
//     var finalApi = url + sliced + api;
//     var newArray=[]
//     fetch(finalApi)
//     .then(function(res){
//         return res.json()
       
//     })
//     .then(function(data){
//         console.log("data = " +data)
//         console.log("first task = " + data.task[0])
//         console.log("taskName = " + taskName)
//         var index;
//         // data.task.forEach(function(task){
//         //     if(task.name==taskName){
//         //         index = task.name.indexOf(taskName)
//         //             console.log(index)
//         //             console.log("task name = " + task.name)
                    
//         //     } else {
//         //         console.log(task.length)
//         //     }
//         // })
//         for (var i = data.task.length - 1; i >= 0; --i) {
//             if (data.task[i].name == taskName) {
//                 console.log("1 = " + data.task[i].name)
//                 console.log("2 =  " + taskName)
//                 console.log("index = " + i)
//                 console.log("intitial length = " + data.task.length)
//                 removefromTask(i)
                
//                 console.log("new length = " + data.task.length)
//             }
//         }
// })
//     .catch(function(error){
//         console.log("error loading JSON")
//     })
// }