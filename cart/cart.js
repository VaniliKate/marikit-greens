$(".cboxone").hover(
  function () {
    $(".ccoverone").show(function () {
      $(".cboxone").animate({ height: "35vh", width: "25vw" });
      $(".ccoverone").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoverone").hide(function () {
      $(".cboxone").animate({ height: "30vh", width: "20vw" });
      $(".ccoverone").animate({ height: "30vh", width: "20vw" });
    });
  }
);
// boxtwo

$(".cboxtwo").hover(
  function () {
    $(".ccovertwo").show(function () {
      $(".cboxtwo").animate({ height: "35vh", width: "25vw" });
      $(".ccovertwo").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccovertwo").hide(function () {
      $(".cboxtwo").animate({ height: "30vh", width: "20vw" });
      $(".ccovertwo").animate({ height: "30vh", width: "20vw" });
    });
  }
);

$("#heart").click(function () {
  $("#heart").css("color", "red");
});
$("#heart").dblclick(function () {
  $("#heart").css("color", "white");
});
// boxthree

$(".cboxthree").hover(
  function () {
    $(".ccoverthree").show(function () {
      $(".cboxthree").animate({
        height: "35vh",
        width: "25vw",
      });
      $(".ccoverthree").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoverthree").hide(function () {
      $(".cboxthree").animate({ height: "30vh", width: "20vw" });
      $(".ccoverthree").animate({ height: "30vh", width: "20vw" });
    });
  }
);
//boxfour

$(".cboxfour").hover(
  function () {
    $(".ccoverfour").show(function () {
      $(".cboxfour").animate({ height: "35vh", width: "25vw" });
      $(".ccoverfour").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoverfour").hide(function () {
      $(".cboxfour").animate({ height: "30vh", width: "20vw" });
      $(".ccoverfour").animate({ height: "30vh", width: "20vw" });
    });
  }
);

$(".cboxfive").hover(
  function () {
    $(".ccoverfive").show(function () {
      $(".cboxfive").animate({ height: "35vh", width: "25vw" });
      $(".ccoverfive").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoverfive").hide(function () {
      $(".cboxfive").animate({ height: "30vh", width: "20vw" });
      $(".ccoverfive").animate({ height: "30vh", width: "20vw" });
    });
  }
);

$(".cboxsix").hover(
  function () {
    $(".ccoversix").show(function () {
      $(".cboxsix").animate({ height: "35vh", width: "25vw" });
      $(".ccoversix").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoversix").hide(function () {
      $(".cboxsix").animate({ height: "30vh", width: "20vw" });
      $(".ccoversix").animate({ height: "30vh", width: "20vw" });
    });
  }
);

// ctwo
$(".cboxseven").hover(
  function () {
    $(".ccoverseven").show(function () {
      $(".cboxseven").animate({ height: "35vh", width: "25vw" });
      $(".ccoverseven").animate({ height: "35vh", width: "25vw" });
    });
  },
  function () {
    $(".ccoverseven").hide(function () {
      $(".cboxseven").animate({ height: "30vh", width: "20vw" });
      $(".ccoverseven").animate({ height: "30vh", width: "20vw" });
    });
  }
);
