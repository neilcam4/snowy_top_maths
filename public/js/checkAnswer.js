function checkAnswer20() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "score": 20
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};

function checkAnswer30() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
  
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "score": 30
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};
function checkAnswer10() {
    console.log("checkAnswer 10 called")
    var id = $("#userId").text();
    console.log("id = " + id);
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    console.log("api = " + api)
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    console.log("finalApi = " + finalApi)
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "score": 10
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};

function getScore() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "get",
        data: JSON.stringify(),
        contentType: "application/json",
        success: function (data) {
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function addBronze() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/"
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "bronze": 1
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};

function addGold() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "gold": 1
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};


function addSilver() {
    var id = $("#userId").text();
    var url = "https://mongo-data-api-maths-app.herokuapp.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
    $.ajax({
        url: finalApi,
        type: "put",
        data: JSON.stringify({
            "$inc": {
                "silver": 1
            }
        }),
        contentType: "application/json",
        success: function (data) {
            getScore();
            $("#jquery").text(data.score);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
};
