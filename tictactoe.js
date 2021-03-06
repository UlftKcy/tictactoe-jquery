$(document).ready(function () {
  // variables
  let game_container = $("#game_container");
  let display_point_screen = $("#display_point_screen");
  let display_x_point = $("#display_x_point");
  let display_o_point = $("#display_o_point");
  let btn_select = $(".btn-select");
  let opening_screen = $("#opening_screen");
  let display_user_win = $("#display_user_win");
  let display_system_win = $("#display_system_win");
  let user_selected_option;
  let system_option;
  let user_counter = 0;
  let system_counter = 0;
  display_x_point.text(user_counter);
  display_o_point.text(system_counter);
  let btn_select_arr = [...btn_select];
  display_point_screen.hide();
  game_container.hide();
  display_user_win.hide();
  display_system_win.hide();
  // reset game
  $(document).on("click", "#reset_game", function () {
    $("#btn_start").trigger("click");
    opening_screen.show();
    $("#btn_start").hide();
    btn_select.prop("disabled", false);
    btn_select.css("background-color", "#5A5F70");
    btn_select.text("");
    btn_select_arr = [...btn_select];
    user_counter = 0;
    system_counter = 0;
    display_x_point.text(user_counter);
    display_o_point.text(system_counter);
  });
  // start game
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
    display_point_screen.show();
  });
  // user win game function
  function DisplayUserWinGame() {
    setTimeout(() => {
      game_container.hide();
      display_point_screen.hide();
      display_user_win.show();
      btn_select.prop("disabled", true);
    }, 1000);
    setTimeout(() => {
      display_user_win.hide();
      game_container.show();
      display_point_screen.show();
      btn_select.prop("disabled", false);
      btn_select.css("background-color", "#5A5F70");
      btn_select.text("");
      btn_select_arr = [...btn_select];
    }, 2000);
  }
  // system win game function
  function DisplaySystemWinGame() {
    setTimeout(() => {
      game_container.hide();
      display_point_screen.hide();
      display_system_win.show();
      btn_select.prop("disabled", true);
    }, 1000);
    setTimeout(() => {
      display_system_win.hide();
      game_container.show();
      display_point_screen.show();
      btn_select.prop("disabled", false);
      btn_select.css("background-color", "#5A5F70");
      btn_select.text("");
      btn_select_arr = [...btn_select];
    }, 2000);
  }
  // counter function
  function UserCounterIncrease(user_counter) {
    if (user_selected_option == "X") {
      display_x_point.text(user_counter);
    } else {
      display_o_point.text(user_counter);
    }
  }
  function SystemCounterIncrease(system_counter) {
    if (system_option == "X") {
      display_x_point.text(system_counter);
    } else {
      display_o_point.text(system_counter);
    }
  }
  // match buttons function
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
        btn_left_top.css("background-color", "green");
        btn_center_top.css("background-color", "green");
        btn_right_top.css("background-color", "green");
        if (btn_left_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_left_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_left_center_text !== "") {
      if (
        btn_left_center_text == btn_center_center_text &&
        btn_left_center_text == btn_right_center_text
      ) {
        btn_left_center.css("background-color", "green");
        btn_center_center.css("background-color", "green");
        btn_right_center.css("background-color", "green");
        if (btn_left_center_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_left_center_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_left_bottom_text !== "") {
      if (
        btn_left_bottom_text == btn_center_bottom_text &&
        btn_left_bottom_text == btn_right_bottom_text
      ) {
        btn_left_bottom.css("background-color", "green");
        btn_center_bottom.css("background-color", "green");
        btn_right_bottom.css("background-color", "green");
        if (btn_left_bottom_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_left_bottom_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_left_top_text !== "") {
      if (
        btn_left_top_text == btn_left_center_text &&
        btn_left_top_text == btn_left_bottom_text
      ) {
        btn_left_top.css("background-color", "green");
        btn_left_center.css("background-color", "green");
        btn_left_bottom.css("background-color", "green");
        if (btn_left_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_left_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_center_top_text !== "") {
      if (
        btn_center_top_text == btn_center_center_text &&
        btn_center_top_text == btn_center_bottom_text
      ) {
        btn_center_top.css("background-color", "green");
        btn_center_center.css("background-color", "green");
        btn_center_bottom.css("background-color", "green");
        if (btn_center_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_center_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_right_top_text !== "") {
      if (
        btn_right_top_text == btn_right_center_text &&
        btn_right_top_text == btn_right_bottom_text
      ) {
        btn_right_top.css("background-color", "green");
        btn_right_center.css("background-color", "green");
        btn_right_bottom.css("background-color", "green");
        if (btn_right_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_right_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_left_top_text !== "") {
      if (
        btn_left_top_text == btn_center_center_text &&
        btn_left_top_text == btn_right_bottom_text
      ) {
        btn_left_top.css("background-color", "green");
        btn_center_center.css("background-color", "green");
        btn_right_bottom.css("background-color", "green");
        if (btn_left_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_left_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
    if (btn_right_top_text !== "") {
      if (
        btn_right_top_text == btn_center_center_text &&
        btn_right_top_text == btn_left_bottom_text
      ) {
        btn_right_top.css("background-color", "green");
        btn_center_center.css("background-color", "green");
        btn_left_bottom.css("background-color", "green");
        if (btn_right_top_text == user_selected_option) {
          user_counter++;
          UserCounterIncrease(user_counter);
          DisplayUserWinGame();
        }
        if (btn_right_top_text == system_option) {
          system_counter++;
          SystemCounterIncrease(system_counter);
          DisplaySystemWinGame();
        }
      }
    }
  }
  // on click button
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
      btn_select.prop("disabled", false);
      setTimeout(() => {
        $("#display_win_text").hide();
        btn_select.text("");
        btn_select_arr = [...btn_select];
      }, 500);
    }
  });
});
