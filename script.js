$(function(){
    var localtime = moment().format("dddd, MMMM Do");
    console.log('localtime', localtime);
    $('#currentDay').text(localtime)

    $('.saveBtn').on('click', function(){
        
        console.log($(this).siblings('textarea').val().trim());
        var text = $(this).siblings('textarea').val().trim();
        console.log('id', $(this).siblings('textarea').attr('id'));
        localStorage.setItem($(this).siblings('textarea').attr('id'), text);
    })

    var timeArray = ['time9', 'time10', 'time11', 'time12', 'time13', 'time14', 'time15', 'time16', 'time17'];

    for(var i = 0; i < timeArray.length; i++){
        $('#' + timeArray[i]).val(localStorage.getItem(timeArray[i]))
    }
    
    $('.col-sm-8').each(function(index, value) {
        var timeref = moment().format("HH");
        

        if($(index < timeref - 9)){
            $(this).addClass("col-sm-8 description past");
        }
        if($(index > timeref - 9)){
            $(this).addClass("col-sm-8 description future");
        }   
        console.log('index', timeref - 9);

    })

})