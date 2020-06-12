//www.downgram.in
let config;
let url;
let formData = {};
let isFormValidated = false;

window.onload = function () {
  changeTheme(localStorage.getItem("darkMode")); //select theme
  const urlParams = new URLSearchParams(window.location.search);
  const reportSUbmitted = urlParams.get("submit");
  formData["sender"] = "Downtok";

  saveViewCount(); // save page views

  $('a[href="' + window.location.pathname + '"]')
    .parents("li") //variations ("li,ul")
    .addClass("active");
};

function handleFormInput(e) {
  formData[e.id] = e.value;
}

function isvalidated(event) {
  var form = document.getElementById("issue-form");
  if (form.checkValidity() === false) {
    isFormValidated = false;
  } else {
    event.preventDefault();
    isFormValidated = true;
    reporter();
  }
}

function reporter() {
  $("#spinner").show();
  console.log("formData : ", formData);

  let requestBody = formData;
  fetch("https://prod.downgram.in/api/issuereporter", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message === "Report sent successfully") {
        $("#issue-form").hide();
        var formParent = document.getElementById("container");
        var newElement = document.createElement("p");
        newElement.setAttribute("id", "success-message");
        newElement.innerHTML = `<h2> Thank you! Issue has been submitted. <i style='color:limegreen' class='far fa-check-circle'></i></h2><br>
          <a
              href="report-issue.html"
              target="_self"
              >Report another <i class="fas fa-comment-dots"></i
            ></a>
          `;
        formParent.appendChild(newElement);
      }
    })
    .catch((err) => {
      console.log("err", err.message);
    })
    .finally(() => {
      $("#spinner").hide();
    });
}

function saveViewCount() {
  let sessionBody = { channelType: "web" };

  fetch("https://prod.downgram.in/api/downtok-game/saveviewcount", {
    method: "POST",
    body: JSON.stringify(sessionBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {})
    .catch((err) => {
      console.log("err", err);
    });
}

function getSessionCount() {
  fetch("https://prod.downgram.in/api/downtok-game/sessioncount")
    .then((response) => response.json())
    .then((responseJson) => {
      let totalSessions = responseJson.result.$numberDouble;

      $(document).ready(function () {
        $("span.stats").text(totalSessions);
      });

      $("#spinner").hide(); //hides loader
    })
    .catch((err) => {
      console.log("err", err);
      $("#spinner").hide(); //hides loader
    });
}

function themeSelection() {
  let isSelected = document.getElementById("theme-toggle").checked;

  localStorage.setItem("darkMode", !isSelected);
  changeTheme(localStorage.getItem("darkMode"));
}

function changeTheme(userPref) {
  $(document).ready(function () {
    if (userPref === "true") {
      $("body").css("background-color", "#12253c");
      $(".dark-th").css("color", "#ffffff");
      $("#theme-toggle").prop("checked", true);
    } else {
      $("body").css("background-color", "#ecf0f3");
      $(".dark-th").css("color", "rgba(0,0,0,.5)");
      $("#theme-toggle").prop("checked", false);
    }
  });
}
