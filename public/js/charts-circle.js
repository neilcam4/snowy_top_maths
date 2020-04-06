

$( document ).ready(function() {
    var numbersCorrect = $("#numberCorrect").text()
    var shapeCorrect = $("#shapeCorrect").text()
    var algebraCorrect = $("#algebraCorrect").text()
    var dataCorrect = $("#dataCorrect").text()
    var numbersError = $("#numberError").text()
    var shapeError = $("#shapeError").text()
    var algebraError = $("#algebraError").text()
    var dataError = $("#dataError").text()
    var myCircle = Circles.create({

        //number correct
        id: 'circles-1',
        radius: 60,
        value: Math.ceil(numbersCorrect/(numbersCorrect + numbersError)*100),
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#c7d3e5', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    //shape and space
    var myCircle2 = Circles.create({
        id: 'circles-2',
        radius: 60,
        value: Math.ceil(shapeCorrect/(shapeCorrect + shapeError)*100),
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
//algebra correct
    var myCircle3 = Circles.create({
        id: 'circles-3',
        radius: 60,
        value: Math.ceil(algebraCorrect/(algebraCorrect + algebraError)*100),
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    //data circle
    var myCircle4 = Circles.create({
        id: 'circles-4',
        radius: 60,
        value: Math.ceil(dataCorrect/(dataCorrect + dataError)*100),
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    //data circle
    var myCircle5 = Circles.create({
        id: 'circles-5',
        radius: 60,
        value: dataCorrect,
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle6 = Circles.create({
        id: 'circles-6',
        radius: 60,
        value: 60,
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle7 = Circles.create({
        id: 'circles-7',
        radius: 60,
        value: 10,
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle8 = Circles.create({
        id: 'circles-8',
        radius: 60,
        value: 100,
        maxValue: 100,
        width: 10,
        text: function(value) {
            return value + '%';
        },
        colors: ['#f1f1f1', '#000'],
        duration: 600,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke circle-primary',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
//number correct
    var myCircle9 = Circles.create({
        id:         'circles-9',
        radius:     60,
        value:      numbersCorrect,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#c7d3e5', '#54c8eb'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle10 = Circles.create({
        id:         'circles-10',
        radius:     60,
        value:      43,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#eee', '#ac60d0'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle11 = Circles.create({
        id:         'circles-11',
        radius:     60,
        value:      60,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#eee', '#f44336'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle12 = Circles.create({
        id:         'circles-12',
        radius:     60,
        value:      80,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#eee', '#02c66c'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle13 = Circles.create({
        id:         'circles-13',
        radius:     60,
        value:      95,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#eee', '#f44336'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle14 = Circles.create({
        id:         'circles-14',
        radius:     60,
        value:      43,
        maxValue:   100,
        width:      10,
        text:       function(value){return value + '%';},
        colors:     ['#333', '#ff0084'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle15 = Circles.create({
        id:         'circles-15',
        radius:     60,
        value:      60,
        maxValue:   100,
        width:      20,
        text:       function(value){return value + '%';},
        colors:     ['#eee', '#f44336'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });

    var myCircle16 = Circles.create({
        id:         'circles-16',
        radius:     60,
        value:      80,
        maxValue:   100,
        width:      15,
        text:       function(value){return value + '%';},
        colors:     ['#ddd', '#00b48a'],
        duration:   1000,
        wrpClass:   'circles-wrp',
        textClass:  'circles-text'
    });
});
