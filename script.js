$( document ).ready(function() {
    console.log( "ready!" );

    
    var arrayTimeBlock = document.querySelectorAll(".time-block");
    var currentTime = moment().hour();
    arrayTimeBlock.forEach(function(timeblock) {
        var timeBlockId = $(timeblock).attr("hour");
        if (timeBlockId < currentTime) {
            $(timeblock).addClass("past");
        } else if (timeBlockId > currentTime) {
            $(timeblock).addClass("future");
        }  else if (timeBlockId == currentTime) {
            $(timeblock).addClass("present");
        }
    });

    // var arraySaveBtn = document.querySelectorAll(".save-btn");
    // arraySaveBtn.forEach(function(saveBtn) {
    //     $(saveBtn)
    // });

    $(".container").on("click",".save-btn",function(event) {
        //get the hour id
        var id = $(event.target).closest(".time-block").attr("hour");
        //get the text area input
        var text = $(event.target).closest(".time-block").find(".text").val();
        //create an obj entry
        var dataEntry = {
            id: id,
            text: text
        };
        //get the old data
        var data  = JSON.parse(localStorage.getItem("data")) || [];
        //update the old data
        data.push(dataEntry)
        //strore the updated data
        localStorage.setItem("data",JSON.stringify(data));
    });

    var data  = JSON.parse(localStorage.getItem("data")) || [];
    data.forEach(function(datum) {
        var queryString = "[hour='"+datum.id+"']";
        $(queryString).find(".text").val(datum.text)
    });
});
