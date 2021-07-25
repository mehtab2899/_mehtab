// hamburger menu

$(function () {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});

// ////////////////////////////////////////////////////////////////////////////////////

// typing effect

var type = new Typed(".type", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 45,
  backSpeed: 60,
  loop: true,
});

// /////////////////////////////////////////////////////////////////////////////////////

// top-scroll button

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#myBtn").fadeIn();
    } else {
      $("#myBtn").fadeOut();
    }
  });

  $("#myBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 600);
  });
});

// /////////////////////////////////////////////////////////////////////////////////////

// ṣmooth scrolling bahaviour

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// /////////////////////////////////////////////////////////////////////////////////////

// current element navigation

(function () {
  var navLinks = $("nav ul li a"),
    navH = $("nav").height(),
    section = $("section"),
    documentEl = $(document);

  documentEl.on("scroll", function () {
    var currentScrollPos = documentEl.scrollTop();

    section.each(function () {
      var self = $(this);
      if (
        self.offset().top < currentScrollPos + navH &&
        currentScrollPos + navH < self.offset().top + self.outerHeight()
      ) {
        var targetClass = "." + self.attr("class") + "-marker";
        navLinks.removeClass("active");
        $(targetClass).addClass("active");
      }
    });
  });
})();

// /////////////////////////////////////////////////////////////////////////////////////

// Load More button

$(function () {
  $(".box-hidden").slice(0, 3).show();

  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".box-hidden:hidden").slice(0, 3).slideDown();
    if ($(".box-hidden:hidden").lenght == 0) {
      $("#load").fadeOut("slow");
    }

    $("html, body").animate(
      {
        scrollBottom: $(this).offset().top,
      },
      1500
    );
  });
});

(function () {
  var button = document.getElementById("loadMore");
  var myDiv = document.getElementById("wrap-button");

  function toggle() {
    if (myDiv.style.visibility === "hidden") {
      myDiv.style.visibility = "visible";
    } else {
      myDiv.style.visibility = "hidden";
    }
  }

  button.addEventListener("click", toggle, false);
})();

// /////////////////////////////////////////////////////////////////////////////////////

// validation of contact form

(function ($) {
  "use strict";

  $(".validate-input .input100").each(function () {
    $(this).on("blur", function () {
      if (validate(this) == false) {
        showValidate(this);
      } else {
        $(this).parent().addClass("true-validate");
      }
    });
  });

  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
      $(this).parent().removeClass("true-validate");
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");

    $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>');
    $(".btn-hide-validate").each(function () {
      $(this).on("click", function () {
        hideValidate(this);
      });
    });
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass("alert-validate");
    $(thisAlert).find(".btn-hide-validate").remove();
  }
})(jQuery);

////////////////////////////////////////////////////////////////////////////////////////

// contact form configuration with firebase

var config = {
  apiKey: "AIzaSyBtXKiptTFYdqhWHmisps7h6ndT8QJkuzg",
  authDomain: "contact-form-2c19f.firebaseapp.com",
  databaseURL: "https://contact-form-2c19f.firebaseio.com",
  projectId: "contact-form-2c19f",
  storageBucket: "contact-form-2c19f.appspot.com",
  messagingSenderId: "908344678366",
  appId: "1:908344678366:web:673f0618f7ab1b3ae8ef4f",
  measurementId: "G-66EHFPCMWQ",
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, subject, message);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}

// //////////////////////////////////////////////////////////////////////////////
