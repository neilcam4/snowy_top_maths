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

function assignChapter2Button1() {
    console.log("add assignChapter2Button1 function")
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
                    "task": {name:"What is the missing fraction?", link:"/problemsolving/fractions1"}
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

function assignChapter2Button2() {
    console.log("add assignChapter2Button2 function")
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
                    "task": {name:"Fractions of Amounts 2", link:"/problemsolving/fractions3"}
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

function assignChapter2Button3() {
    console.log("add assignChapter2Button2 function")
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
                    "task": {name:"Fractions of Amounts 3", link:"/problemsolving/fractionofamounts"}
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
function assignChapter2Button4() {
    console.log("add assignChapter2Button4 function")
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
                    "task": {name:"Ordering Percentages, Fractions and Decimals", link:"/problemsolving/percentages1"}
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
function assignChapter2Button5() {
    console.log("add assignChapter2Button5 function")
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
                    "task": {name:"Ordering Percentages, Fractions and Decimals", link:"/problemsolving/percentages1"}
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
function assignChapter2Button6() {
    console.log("add assignChapter2Button2 function")
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
                    "task": {name:"Converting Percentages, Fractions and Decimals", link:"/problemsolving/FDP"}
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
function assignChapter2Button7() {
    console.log("add assignChapter2Button7 function")
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
                    "task": {name:"Percentage of Amounts 1", link:"/problemsolving/percentageofamount"}
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
function assignChapter3Button1() {
    console.log("add assignChapter3Button1 function")
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
                    "task": {name:"Find consecutive numbers to make a sum", link:"/problemsolving/sequences1"}
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
function assignChapter3Button2() {
    console.log("add assignChapter3Button2 function")
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
                    "task": {name:"Follow a given rule", link:"/problemsolving/sequences3"}
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
function assignChapter3Button3() {
    console.log("add assignChapter3Button3 function")
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
                    "task": {name:"Newspaper Sequences", link:"/problemsolving/sequences2"}
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
function assignChapter3Button4() {
    console.log("add assignChapter3Button4 function")
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
                    "task": {name:"Adding Consecutive Numbers", link:"/problemsolving/sequences4"}
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
function assignChapter4Button1() {
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
                    "task": {name:"Add together primes to make a square", link:"/problemsolving/prime2"}
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
function assignChapter4Button2() {
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
                    "task": {name:"Identify the Prime Number", link:"/problemsolving/isPrime"}
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
function assignChapter4Button3() {
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
                    "task": {name:"Square Number Problems", link:"/problemsolving/squares1"}
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
function assignChapter4Button4() {
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
                    "task": {name:"Common Multiples ", link:"/problemsolving/prime1"}
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
function assignChapter4Button5() {
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
                    "task": {name:"Lowest Common Multiples", link:"/problemsolving/lowestcommonmultiple"}
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
/*chapter 5*/
function assignChapter5Button1() {
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
                    "task": {name:"Time Zones when going on holiday", link:"/problemsolving/time1"}
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
function assignChapter5Button2() {
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
                    "task": {name:"Catching the train", link:"/problemsolving/time4"}
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
function assignChapter5Button3() {
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
                    "task": {name:"Catching the train", link:"/problemsolving/time5"}
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
function assignChapter5Button4() {
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
                    "task": {name:"Angles around a clock ", link:"/problemsolving/time3"}
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
function assignChapter5Button5() {
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
                    "task": {name:"My watch is slow 1", link:"/problemsolving/slowclock"}
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
function assignChapter5Button6() {
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
                    "task": {name:"My watch is slow 2", link:"/problemsolving/time2"}
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
/*chapter6*/
function assignChapter6Button1() {
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
                    "task": {name:"Dividing into a Ratio", link:"/problemsolving/ratio1"}
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
function assignChapter6Button2() {
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
                    "task": {name:"Inverse Proportion", link:"/problemsolving/ratio3"}
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
function assignChapter6Button3() {
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
                    "task": {name:"Ratio and Angles", link:"/problemsolving/ratio4"}
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
/*chapter7*/
function assignChapter7Button1() {
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
                    "task": {name:"How many goals were scored?", link:"/problemsolving/wordedalgebra1"}
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
function assignChapter7Button2() {
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
                    "task": {name:"How old is Alan?", link:"/problemsolving/wordedalgebra2"}
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
function assignChapter7Button3() {
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
                    "task": {name:"Algebra Grids", link:"/problemsolving/wordedalgebra3"}
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
function assignChapter7Button4() {
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
                    "task": {name:"Abstract Worded Problems", link:"/problemsolving/wordedalgebra4"}
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
function assignChapter7Button5() {
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
                    "task": {name:"Algebra and Time ", link:"/problemsolving/wordedalgebra5"}
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
/*chapter8*/
function assignChapter8Button1() {
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
                    "task": {name:"Angles in Composite Regular Polygons", link:"/problemsolving/shapes1"}
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
function assignChapter8Button2() {
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
                    "task": {name:"Angles in Composite Polygons", link:"/problemsolving/shapes6"}
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
/*chapter9*/
function assignChapter9Button1() {
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
                    "task": {name:"Area and Perimeter with Squares and Rectangles 1", link:"/problemsolving/shapes5"}
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
function assignChapter9Button2() {
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
                    "task": {name:"Areas inside other Areas", link:"/problemsolving/shapes3"}
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
function assignChapter9Button3() {
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
                    "task": {name:"Areas of Rectangles and Triangles", link:"/problemsolving/shapes4"}
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
function assignChapter9Button4() {
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
                    "task": {name:"Volume", link:"/problemsolving/volume"}
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
function assignChapter9Button5() {
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
                    "task": {name:"Area and Perimeter with Squares and Rectangles 2", link:"/problemsolving/shapes2"}
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
function assignChapter9Button6() {
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
                    "task": {name:"Perimeter with algebraic terms", link:"/problemsolving/perimeteralgebra"}
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
function assignChapter9Button7() {
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
                    "task": {name:"Surface Area of Square-based Pyramids", link:"/problemsolving/surfaceareapyramid"}
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
/*chapter10*/
function assignChapter10Button1() {
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
                    "task": {name:"Problems with Mean", link:"/problemsolving/meanaverage"}
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
function assignChapter10Button2() {
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
                    "task": {name:"Problems with Mean 2", link:"/problemsolving/averages"}
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
function assignChapter10Button3() {
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
                    "task": {name:"Averages (Mode, Mean and Median)", link:"/problemsolving/averages2"}
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
/*chapter11 */
function assignChapter11Button1() {
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
                    "task": {name:"Bar Charts and Averages", link:"/problemsolving/data2"}
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
function assignChapter11Button2() {
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
                    "task": {name:"Pie Charts", link:"/problemsolving/piecharts"}
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