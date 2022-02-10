$(document).ready(function () {
  let game_container = $("#game_container");
  game_container.hide();
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
  $(document).on("click", ".btn-select", function () {
    let this_btn = $(this);
    let this_btn_id = $(this).attr("id");
    this_btn.text(user_selected_option);
    let filtered_arr = btn_select_arr.filter((btn) => btn.id != this_btn_id);
    btn_select_arr = filtered_arr;
   
    let random_btn_index = Math.floor(Math.random() * btn_select_arr.length);
    let system_selected_btn = btn_select_arr[random_btn_index];
    /* let system_selected_btn_id = system_selected_btn.attr("id");
    console.log(system_selected_btn_id)
    let system_filtered_arr = btn_select_arr.filter((btn) => btn.id != system_selected_btn_id);
    btn_select_arr = system_filtered_arr; */
    if (btn_select_arr.length === 0) {
      setTimeout(() => {
        game_container.hide();
        opening_screen.show();
        $(".btn-select").text("");
        btn_select = $(".btn-select");
        btn_select_arr = [...btn_select];
      }, 500);
    }
  });
});
