// click listener function for save button 
$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    
    $(".saveBtn").on("click", function() {

    var time = $(this).parent().attr("id");
    var taskValue = $(this).siblings(".task").val();

    localStorage.setItem(time, taskValue);
    
    });  

    $("#time-9 .task").val(localStorage.getItem("time-9"));
    $("#time-10 .task").val(localStorage.getItem("time-10"));
    $("#time-11 .task").val(localStorage.getItem("time-11")); 
    $("#time-12 .task").val(localStorage.getItem("time-12"));
    $("#time-1 .task").val(localStorage.getItem("time-1"));
    $("#time-2 .task").val(localStorage.getItem("time-2"));
    $("#time-3 .task").val(localStorage.getItem("time-3"));
    $("#time-4 .task").val(localStorage.getItem("time-4"));
    $("#time-5 .task").val(localStorage.getItem("time-5"));

   
    function timeUpdate() {
        var currentTime = moment().hours();

        // jquery loop
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);

            if (blockTime < currentTime) {
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                console.log(this);
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    
    
    
    timeUpdate();

    var timeRefresh = setInterval(timeUpdate, 20000);

   

 

});


