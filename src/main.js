import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Character } from './../src/RPG-game.js';

//User Interface
$(document).ready(function() {
  let player;
  $("#newGame").click(function(event){
    event.preventDefault();
    player = new Character(1, 2, 5, "player");
    $("#startMenu").hide();
    $("#charCreation").show();
    $("#charCreationDisplay").append(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  });
  
  $("#plusDamage").click(function(event){
    event.preventDefault();
    player.chooseDamageClass();
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  })

  $("#plusHealth").click(function(event){
    event.preventDefault();
    player.chooseHealthClass();
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  })
});

