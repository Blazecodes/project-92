function addUser() {
    player_name1=document.getElementById("input1").value;
    player_name2=document.getElementById("input2").value;

    localStorage.setItem("player_name1",player_name1);
    localStorage.setItem("player_name2",player_name2);

    window.location.replace("quiz_game_page_html")
}