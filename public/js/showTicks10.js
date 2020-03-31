showTicks10 = () => {
    document.getElementById("tick").style.visibility = "visible";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("msg").textContent = " Well done! 10 points";
    correct ++;
  }

  showTicks20 = () => {
    document.getElementById("tick").style.visibility = "visible";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("msg").textContent = " Well done! 20 points";
    correct ++;
  }

  showTicks30 = () => {
    document.getElementById("tick").style.visibility = "visible";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("msg").textContent = " Well done! 30 points";
    correct ++;
  }
  
  function questionCounter() {
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
                "questions": 1
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

function numberCounterUp() {
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
              "number": 1
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

function shapeCounterUp() {
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
              "shape": 1
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

function dataCounterUp() {
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
              "data": 1
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

function algebraCounterUp() {
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
              "algebra": 1
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

function numberError() {
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
              "numberError": 1
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

function shapeError() {
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
              "shapeError": 1
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

function dataError() {
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
              "dataError": 1
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

function algebraError() {
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
              "algebraError": 1
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
