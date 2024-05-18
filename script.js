$(document).ready(function() {
  // Display current time & date.
  var currentDayElement = $('#currentDay');
  currentDayElement.text(dayjs().format('dddd, MMMM D'));

  // Click listener for user's input on time stamp.
  $(".saveBtn").on("click", function () {
    // Get nearby values.
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save to local storage.
    localStorage.setItem(time, text);
  });

  // Load saved data from local storage.
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));

  function hourTracker() {
    // Get current number of hours.
    var currentHour = dayjs().hour();

    // Loop over time blocks.
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      // Check if time is past, present or future.
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past present");
        $(this).addClass("future");
      }
    });
  }

  // Run hourTracker to update the classes.
  hourTracker();
});