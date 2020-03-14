currentHour = moment().format("H");

$(document).ready(function() {
  currentDay = moment().format("dddd, MMMM Do YYYY");
  let current = $("#currentDay").text(currentDay);

  console.log(currentHour);
  checkTime();
});

function checkTime() {
  if (currentHour < 9) {
    $("#9txt").addClass("future");
  } else if (currentHour == 9) {
    $("#9txt").addClass("present");
  } else {
    $("#9txt").addClass("past");
  }
  if (currentHour < 10) {
    $("#10txt").addClass("future");
  } else if (currentHour == 10) {
    $("#10txt").addClass("present");
  } else {
    $("#10txt").addClass("past");
  }
  if (currentHour < 11) {
    $("#11txt").addClass("future");
  } else if (currentHour == 11) {
    $("#11txt").addClass("present");
  } else {
    $("#11txt").addClass("past");
  }
  if (currentHour < 12) {
    $("#12txt").addClass("future");
  } else if (currentHour == 12) {
    $("#12txt").addClass("present");
  } else {
    $("#12txt").addClass("past");
  }
  if (currentHour < 13) {
    $("#1txt").addClass("future");
  } else if (currentHour == 13) {
    $("#1txt").addClass("present");
  } else {
    $("#1txt").addClass("past");
  }
  if (currentHour < 14) {
    $("#2txt").addClass("future");
  } else if (currentHour == 14) {
    $("#2txt").addClass("present");
  } else {
    $("#2txt").addClass("past");
  }
  if (currentHour < 15) {
    $("#3txt").addClass("future");
  } else if (currentHour == 15) {
    $("#3txt").addClass("present");
  } else {
    $("#3txt").addClass("past");
  }
  if (currentHour < 16) {
    $("#4txt").addClass("future");
  } else if (currentHour == 16) {
    $("#4txt").addClass("present");
  } else {
    $("#4txt").addClass("past");
  }
  if (currentHour < 17) {
    $("#5txt").addClass("future");
  } else if (currentHour == 17) {
    $("#5txt").addClass("present");
  } else {
    $("#5txt").addClass("past");
  }
}
