function assignTask1() {
    console.log("add asign task function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"What Number Did I start with?", link:"/problemsolving/multdiv5"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};

function assignTask2() {
    console.log("add asign task 2 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Add, Subtract, Divide and Multiply 1", link:"/problemsolving/addsubtract2"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};

function assignTask3() {
    console.log("add asign task 3 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Multiplication of Whole Numbers", link:"/problemsolving/multdiv1"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
    function assignTask4() {
        console.log("add asign task 4 function")
        var id = $("#userId").text();
        var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
        var api = $("#example").text();
        var sliced = id.slice(0, -1);
        var finalApi = url + sliced + api;
        $.ajax({
            url: finalApi,
            type: "put",
            data: JSON.stringify({
                "$push": {
                        "task": {name:"Add and Subtract Integers", link:"/problemsolving/addsubtract1"}
                }   
            }),
            contentType: "application/json",
            success: function (data) {
                console.log("bookmark added")
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }

function assignTask5() {
    console.log("add asign task 5 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Multiply and Divide Whole Numbers", link:"/problemsolving/multdiv2"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
function assignTask6() {
    console.log("add asign task 6 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Multiply and Divide multi-Digit Numbers", link:"/problemsolving/multdiv3"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
function assignTask7() {
    console.log("add asign task 6 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Missing Digit Multiplication", link:"/problemsolving/multdiv4"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
function assignTask8() {
    console.log("add asign task 8 function")
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$push": {
                    "task": {name:"Multiply and Divide with cm,m & km", link:"/problemsolving/distance1"}
            }   
        }),
        contentType: "application/json",
        success: function (data) {
            console.log("bookmark added")
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}