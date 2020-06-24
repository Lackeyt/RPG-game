import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Character } from './../src/RPG-game.js';

//User Interface
$(document).ready(function() {
  let character = "";
  $("#newGame").click(function(event){
    event.preventDefault();
    character = new Character("", 2, 5, 1, 0);
    $("#startMenu").hide();
    $("#charCreation").show();
    $("#charCreationDisplay").append(`Level: ${character.level}<br>Damage: ${character.damage}<br>Health: ${character.health}`);
  });
  
});

