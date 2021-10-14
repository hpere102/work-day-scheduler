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
    $("#time-13 .task").val(localStorage.getItem("time-13"));
    $("#time-14 .task").val(localStorage.getItem("time-14"));
    $("#time-15 .task").val(localStorage.getItem("time-15"));
    $("#time-16 .task").val(localStorage.getItem("time-16"));
    $("#time-17 .task").val(localStorage.getItem("time-17"));

   
    function timeUpdate() {
        var currentTime = moment().hours();

        // jquery loop
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);

            if (blockTime < currentTime) {
                $(this).addClass("past");
                console.log(this);
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
                console.log(this);
            }
        });
    }

    
    
    
    timeUpdate();

    var timeRefresh = setInterval(timeUpdate, 20000);

   

 

});


