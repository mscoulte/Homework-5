let currentHour = moment().format("H");

$(document).ready(function() {
  currentDay = moment().format("dddd, MMMM Do YYYY");
  let current = $("#currentDay").text(currentDay);

  console.log(currentHour);
  checkTime();
  getStorage();
  addStorage();
});

function getStorage() {
  $("#9txt").html(localStorage.getItem("9AM"));
  $("#10txt").html(localStorage.getItem("10AM"));
  $("#11txt").html(localStorage.getItem("11AM"));
  $("#12txt").html(localStorage.getItem("12PM"));
  $("#1txt").html(localStorage.getItem("1PM"));
  $("#2txt").html(localStorage.getItem("2PM"));
  $("#3txt").html(localStorage.getItem("3PM"));
  $("#4txt").html(localStorage.getItem("4PM"));
  $("#5txt").html(localStorage.getItem("5PM"));
}

function addStorage() {
  $("#9btn").on("click", function() {
    localStorage.setItem("9AM", $("#9txt").val());
  });
  $("#10btn").on("click", function() {
    localStorage.setItem("10AM", $("#10txt").val());
  });
  $("11btn").on("click", function() {
    localStorage.setItem("11AM", $("#11txt").val());
  });
  $("#12btn").on("click", function() {
    localStorage.setItem("12PM", $("#12txt").val());
  });
  $("#1btn").on("click", function() {
    localStorage.setItem("1PM", $("#1txt").val());
  });
  $("#2btn").on("click", function() {
    localStorage.setItem("2PM", $("#2txt").val());
  });
  $("#3btn").on("click", function() {
    localStorage.setItem("3PM", $("#3txt").val());
  });
  $("#4btn").on("click", function() {
    localStorage.setItem("4PM", $("#4txt").val());
  });
  $("#5btn").on("click", function() {
    localStorage.setItem("5PM", $("#5txt").val());
  });
}

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
