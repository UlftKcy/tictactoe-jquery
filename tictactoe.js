$(document).ready(function () {
  let game_container = $("#game_container");
  game_container.hide();
  $("#display_win_text").hide();
  let opening_screen = $("#opening_screen");
  let user_selected_option;
  let system_option;
  $(document).on("click", ".modal-body>button", function () {
    let option = $(this).text();
    if (option == "O") {
      user_selected_option = option;
      system_option = "X";
    } else {
      user_selected_option = option;
      system_option = "O";
    }
    $("#gameModal").modal("hide");
    opening_screen.hide();
    game_container.show();
  });
  let btn_select = $(".btn-select");
  let btn_select_arr = [...btn_select];

  function MatchBtnFunc() {
    let btn_left_top = $("#btn_left_top");
    let btn_center_top = $("#btn_center_top");
    let btn_right_top = $("#btn_right_top");
    let btn_left_center = $("#btn_left_center");
    let btn_center_center = $("#btn_center_center");
    let btn_right_center = $("#btn_right_center");
    let btn_left_bottom = $("#btn_left_bottom");
    let btn_center_bottom = $("#btn_center_bottom");
    let btn_right_bottom = $("#btn_right_bottom");

    let btn_left_top_text = btn_left_top.text();
    let btn_center_top_text = btn_center_top.text();
    let btn_right_top_text = btn_right_top.text();
    let btn_left_center_text = btn_left_center.text();
    let btn_center_center_text = btn_center_center.text();
    let btn_right_center_text = btn_right_center.text();
    let btn_left_bottom_text = btn_left_bottom.text();
    let btn_center_bottom_text = btn_center_bottom.text();
    let btn_right_bottom_text = btn_right_bottom.text();

    if (btn_left_top_text !== "") {
      if (
        btn_left_top_text == btn_center_top_text &&
        btn_left_top_text == btn_right_top_text
      ) {
        $("#display_win_text").show();
        $(".btn-select").prop("disabled", false);
        setTimeout(() => {
          $("#display_win_text").hide();
          game_container.hide();
          opening_screen.show();
          $(".btn-select").text("");
          btn_select = $(".btn-select");
          btn_select_arr = [...btn_select];
        }, 3000);
      }
    }
    if (btn_left_center_text !== "") {
      if (
        btn_left_center_text == btn_center_center_text &&
        btn_left_center_text == btn_right_center_text
      ) {
        $("#display_win_text").show();
        $(".btn-select").prop("disabled", false);
        setTimeout(() => {
          $("#display_win_text").hide();
          game_container.hide();
          opening_screen.show();
          $(".btn-select").text("");
          btn_select = $(".btn-select");
          btn_select_arr = [...btn_select];
        }, 3000);
      }
    }
    if (btn_left_bottom_text !== "") {
      if (
        btn_left_bottom_text == btn_center_bottom_text &&
        btn_left_bottom_text == btn_right_bottom_text
      ) {
        $("#display_win_text").show();
        $(".btn-select").prop("disabled", false);
        setTimeout(() => {
          $("#display_win_text").hide();
          game_container.hide();
          opening_screen.show();
          $(".btn-select").text("");
          btn_select = $(".btn-select");
          btn_select_arr = [...btn_select];
        }, 500);
      }
    }
  }
  $(document).on("click", ".btn-select", function () {
    let this_btn = $(this);
    let this_btn_id = $(this).attr("id");
    this_btn.text(user_selected_option);
    this_btn.prop("disabled", true);
    let filtered_arr = btn_select_arr.filter((btn) => btn.id != this_btn_id);
    btn_select_arr = filtered_arr;

    let random_btn_index = Math.floor(Math.random() * btn_select_arr.length);
    let system_selected_btn = btn_select_arr[random_btn_index];
    let system_selected_btn_id = $(system_selected_btn).attr("id");
    $(system_selected_btn).text(system_option);
    $(system_selected_btn).prop("disabled", true);
    let system_filtered_arr = btn_select_arr.filter(
      (btn) => btn.id != system_selected_btn_id
    );
    btn_select_arr = system_filtered_arr;
    MatchBtnFunc();
    if (btn_select_arr.length === 0) {
      $(".btn-select").prop("disabled", false);
      setTimeout(() => {
        $("#display_win_text").hide();
        game_container.hide();
        opening_screen.show();
        $(".btn-select").text("");
        btn_select = $(".btn-select");
        btn_select_arr = [...btn_select];
      }, 500);
    }
  });
});
