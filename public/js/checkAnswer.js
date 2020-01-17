function checkAnswer20() {
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
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
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
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
    var id = $("#userId").text();
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
    var sliced = id.slice(0, -1);
    var finalApi = url + sliced + api;
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
    var url = "https://api.mlab.com/api/1/databases/maths_app/collections/users/";
    var api = $("#example").text();
<<<<<<< HEAD
    var idAndApi = id + config;
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
=======
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
>>>>>>> 05c63de44b74555735e03c4a647f597c9e43972e
