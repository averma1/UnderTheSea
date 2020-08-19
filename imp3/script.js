var taimaneURL = "music/water_taimane.mp3";
var jakeURL = "music/galloping_seahorses.mp3";
var pichanURL = "music/under_the_sea.mp3";
var taimaneEditedURL = "music/edit_water_taimane.mp3";
var jakeEditedURL = "music/edit_galloping_seahorses.mp3";
var pichanEditedURL = "music/edit_under_the_sea.mp3";

var light1Water = "#a1fff4";
var light2Water = "#4ce9d7";
var light3Water = "#07bda7";
var light4Water = "#0089c9";
var light5Water = "#2f5bbb";
var light6Water = "#094eb6";
var light7Water = "#02166d";

var light1GallopingSeahorses = "#e8b564";
var light2GallopingSeahorses = "#446300";
var light3GallopingSeahorses = "#9e626b";
var light4GallopingSeahorses = "#914da8";
var light5GallopingSeahorses = "#3fab58";
var light6GallopingSeahorses = "#9257ad";
var light7GallopingSeahorses = "#d6c2a1";

var light1UnderTheSea = "#d10000";
var light2UnderTheSea = "#79cd8d";
var light3UnderTheSea = "#ffc680";
var light4UnderTheSea = "#914da8";
var light5UnderTheSea = "#3fab58";
var light6UnderTheSea = "#f3f705";
var light7UnderTheSea = "#40e0d0";

var light1Original = "#c4040b";
var light2Original = "#ffb23e";
var light3Original = "#fff350";
var light4Original = "#26c03b";
var light5Original = "#0075e2";
var light6Original = "#321fe2";
var light7Original = "#6808c2";

var setIntervalVar;
var lightshowStarted = false;
var musicStarted = false;

HTMLAudioElement.prototype.stop = function()
{
    this.pause();
    this.currentTime = 0.0;
}

function stopAudioIfAudioIsPlaying(){
    if(lightshowStarted == true){
        document.getElementById('audio-player').pause();
        console.log("inside function");
        document.getElementById('pause-lightshow').style.visibility = "visible";
        document.getElementById('resume-lightshow').style.visibility = "visible";
        document.getElementById('end-lightshow').style.visibility = "visible";
    }
}

function lightshowControls(){
    setIntervalVar = setInterval("stopAudioIfAudioIsPlaying()", 1000);
    document.getElementById('audio-player').stop(); 
}

function changeAudioTaimane(){
    musicStarted = true;
    document.getElementById('audio-player').src = taimaneURL;
    document.getElementById('audio-player-lightshow').pause();
    document.getElementById("audio-message").innerHTML = "Now Playing: <i> Water </i> by <i> Taimane </i>";
    document.getElementById("play-pause-stop-music").style.display = "block";
    resetOriginalMusic();
}

function changeAudioJake(){
    musicStarted = true;
    document.getElementById('audio-player').src = jakeURL;
    document.getElementById('audio-player-lightshow').pause();
    document.getElementById("audio-message").innerHTML = "Now Playing:<i> Galloping Seahorses </i> by <i> Jake Shimabukuro </i>";
    document.getElementById("play-pause-stop-music").style.display = "block";
    resetOriginalMusic();
}

function changeAudioPichan(){
    musicStarted = true;
    document.getElementById('audio-player').src = pichanURL;
    document.getElementById('audio-player-lightshow').pause();
    document.getElementById("audio-message").innerHTML = "Now Playing:<i> Under the Sea </i> by <i> Pichan Hiroshi </i>";
    document.getElementById("play-pause-stop-music").style.display = "block";
    resetOriginalMusic();
}

function resetOriginalMusic(){
    document.getElementById('audio-player-lightshow').src = "";
    $('ul li').css("animation", "original 1.6s ease-in-out infinite");

    var newColorLight1 = document.getElementById("light1-color-picker-value").value;
    document.getElementById("light1").style.backgroundColor = newColorLight1;
    $("#light1").css("box-shadow", "0 0 50px " + newColorLight1);
    $("#light1").css("animation-delay", "-1.4s");

    var newColorLight2 = document.getElementById("light2-color-picker-value").value;
    document.getElementById("light2").style.backgroundColor = newColorLight2;
    $("#light2").css("box-shadow", "0 0 50px " + newColorLight2);
    $("#light2").css("animation-delay", "-1.2s");

    var newColorLight3 = document.getElementById("light3-color-picker-value").value;
    document.getElementById("light3").style.backgroundColor = newColorLight3;
    $("#light3").css("box-shadow", "0 0 50px " + newColorLight3);
    $("#light3").css("animation-delay", "-1s");

    var newColorLight4 = document.getElementById("light4-color-picker-value").value;
    document.getElementById("light4").style.backgroundColor = newColorLight4;
    $("#light4").css("box-shadow", "0 0 50px " + newColorLight4);
    $("#light4").css("animation-delay", "-0.8s");

    var newColorLight5 = document.getElementById("light5-color-picker-value").value;
    document.getElementById("light5").style.backgroundColor = newColorLight5;
    $("#light5").css("box-shadow", "0 0 50px " + newColorLight5);
    $("#light5").css("animation-delay", "-0.6s");

    var newColorLight6 = document.getElementById("light6-color-picker-value").value;
    document.getElementById("light6").style.backgroundColor = newColorLight6;
    $("#light6").css("box-shadow", "0 0 50px " + newColorLight6);
    $("#light6").css("animation-delay", "-0.4s");

    var newColorLight7 = document.getElementById("light7-color-picker-value").value;
    document.getElementById("light7").style.backgroundColor = newColorLight7;
    $("#light7").css("box-shadow", "0 0 50px " + newColorLight7);
    $("#light7").css("animation-delay", "-0.2s");

}

function playPauseMusic(){
    var isChecked = document.getElementById("playpause-music").checked;
    if(isChecked && musicStarted){ //paused
        document.getElementById('audio-player').pause();
    } else {
        document.getElementById('audio-player').play();
    }
}

function stopMusic(){
    document.getElementById("audio-player").stop();
    document.getElementById("audio-message").innerHTML = "Choose a song to play:";
    document.getElementById("play-pause-stop-music").style.display = "none";
}

function playPauseLightshow(){
    var isChecked = document.getElementById("playpause-lightshow").checked;
    if(isChecked && lightshowStarted){ //paused
        pauseLightshow();
    } else {
        resumeLightshow();
    }
}

function pauseLightshow(){
    document.getElementById('audio-player-lightshow').pause();
    $('ul li').css("animation-play-state", "paused");
}

function resumeLightshow(){
    document.getElementById('audio-player-lightshow').play();
    $('ul li').css("animation-play-state", "running");
}

function endLightshow(){
    if(lightshowStarted == true){
        document.getElementById("play-pause-stop-lightshow").style.display = "none";
        lightshowStarted = false;
        document.getElementById('audio-player-lightshow').src = "";
        document.getElementById("lightshow-message").innerHTML = "The lightshow has ended. Choose another song to start a pre-programmed lightshow!";
        $('ul li').css("animation", "original 1.6s ease-in-out infinite");

        var newColorLight1 = document.getElementById("light1-color-picker-value").value;
        document.getElementById("light1").style.backgroundColor = newColorLight1;
        $("#light1").css("box-shadow", "0 0 50px " + newColorLight1);
        $("#light1").css("animation-delay", "-1.4s");

        var newColorLight2 = document.getElementById("light2-color-picker-value").value;
        document.getElementById("light2").style.backgroundColor = newColorLight2;
        $("#light2").css("box-shadow", "0 0 50px " + newColorLight2);
        $("#light2").css("animation-delay", "-1.2s");

        var newColorLight3 = document.getElementById("light3-color-picker-value").value;
        document.getElementById("light3").style.backgroundColor = newColorLight3;
        $("#light3").css("box-shadow", "0 0 50px " + newColorLight3);
        $("#light3").css("animation-delay", "-1s");

        var newColorLight4 = document.getElementById("light4-color-picker-value").value;
        document.getElementById("light4").style.backgroundColor = newColorLight4;
        $("#light4").css("box-shadow", "0 0 50px " + newColorLight4);
        $("#light4").css("animation-delay", "-0.8s");

        var newColorLight5 = document.getElementById("light5-color-picker-value").value;
        document.getElementById("light5").style.backgroundColor = newColorLight5;
        $("#light5").css("box-shadow", "0 0 50px " + newColorLight5);
        $("#light5").css("animation-delay", "-0.6s");

        var newColorLight6 = document.getElementById("light6-color-picker-value").value;
        document.getElementById("light6").style.backgroundColor = newColorLight6;
        $("#light6").css("box-shadow", "0 0 50px " + newColorLight6);
        $("#light6").css("animation-delay", "-0.4s");

        var newColorLight7 = document.getElementById("light7-color-picker-value").value;
        document.getElementById("light7").style.backgroundColor = newColorLight7;
        $("#light7").css("box-shadow", "0 0 50px " + newColorLight7);
        $("#light7").css("animation-delay", "-0.2s");
    }
    else{
        resumeLightshow();
    }

}

function startLightshowWater(){
    document.getElementById("play-pause-stop-lightshow").style.display = "block";
    lightshowStarted = true;
    document.getElementById('audio-player').pause();
    document.getElementById('audio-player-lightshow').src = taimaneEditedURL;
    document.getElementById('audio-player-lightshow').play();
    $('ul li').css("animation", "water 1.2s ease-in-out infinite");
    document.getElementById("lightshow-message").innerHTML = "The lightshow for <i> Water </i> by <i> Taimane </i> has started!";
    document.getElementById("lightshow-message").style.visibility = "visible";

    $('.lights #light1').css("background-color", light1Water);
    $('.lights #light1').css("box-shadow", "0 0 50px #a1fff4");
    $('.lights #light1').css("animation-delay", "-1s");

    $('.lights #light2').css("background-color", light2Water);
    $('.lights #light2').css("box-shadow", "0 0 50px #4ce9d7");
    $('.lights #light2').css("animation-delay", "-0.6s");

    $('.lights #light3').css("background-color", light3Water);
    $('.lights #light3').css("box-shadow", "0 0 50px #07bda7");
    $('.lights #light3').css("animation-delay", "-0.2s");

    $('.lights #light4').css("background-color", light4Water);
    $('.lights #light4').css("box-shadow", "0 0 50px #0089c9");
    $('.lights #light4').css("animation-delay", "-0.05s");

    $('.lights #light5').css("background-color", light5Water);
    $('.lights #light5').css("box-shadow", "0 0 50px #2f5bbb");
    $('.lights #light5').css("animation-delay", "-0.1s");

    $('.lights #light6').css("background-color", light6Water);
    $('.lights #light6').css("box-shadow", "0 0 50px #094eb6");
    $('.lights #light6').css("animation-delay", "-0.4s");

    $('.lights #light7').css("background-color", light7Water);
    $('.lights #light7').css("box-shadow", "0 0 50px #02166d");
    $('.lights #light1').css("animation-delay", "-0.8s");

}

function startLightshowGallopingSeahorses(){
    document.getElementById("play-pause-stop-lightshow").style.display = "block";
    lightshowStarted = true;
    document.getElementById('audio-player').pause();
    document.getElementById('audio-player-lightshow').src = jakeEditedURL;
    document.getElementById('audio-player-lightshow').play();
    document.getElementById("lightshow-message").style.visibility = "visible";
    document.getElementById('lightshow-message').innerHTML = "The lightshow for <i> Galloping Seahorses </i> by <i> Jake Shimabukuro </i> has started!";

    $('ul li').css("animation", "galloping_seahorses 1s ease-in-out infinite");
  
    $('.lights #light1').css("background-color", light1GallopingSeahorses);
    $('.lights #light1').css("box-shadow", "0 0 50px #e8b564");
    $('.lights #light1').css("animation-delay", "-0.9s");

    $('.lights #light2').css("background-color", light2GallopingSeahorses);
    $('.lights #light2').css("box-shadow", "0 0 50px #446300");
    $('.lights #light2').css("animation-delay", "-0.8s");

    $('.lights #light3').css("background-color", light3GallopingSeahorses);
    $('.lights #light3').css("box-shadow", "0 0 50px #9e626b");
    $('.lights #light3').css("animation-delay", "-0.7s");

    $('.lights #light4').css("background-color", light4GallopingSeahorses);
    $('.lights #light4').css("box-shadow", "0 0 50px #914da8");
    $('.lights #light4').css("animation-delay", "-0.5s");

    $('.lights #light5').css("background-color", light5GallopingSeahorses);
    $('.lights #light5').css("box-shadow", "0 0 50px #3fab58");
    $('.lights #light5').css("animation-delay", "-0.4s");

    $('.lights #light6').css("background-color", light6GallopingSeahorses);
    $('.lights #light6').css("box-shadow", "0 0 50px #9257ad");
    $('.lights #light6').css("animation-delay", "-0.3s");

    $('.lights #light7').css("background-color", light7GallopingSeahorses);
    $('.lights #light7').css("box-shadow", "0 0 50px #d6c2a1");
    $('.lights #light1').css("animation-delay", "-0.1s");

}

function startLightshowUnderTheSea(){
    document.getElementById("play-pause-stop-lightshow").style.display = "block";
    lightshowStarted = true;
    document.getElementById('audio-player').pause();
    document.getElementById('audio-player-lightshow').src = pichanEditedURL;
    document.getElementById('audio-player-lightshow').play();
    document.getElementById("lightshow-message").style.visibility = "visible";
    document.getElementById('lightshow-message').innerHTML = "The lightshow for <i> Under the Sea </i> by <i> Pichan Hiroshi </i> has started!";

    $('ul li').css("animation", "under_the_sea 1.2s ease-in-out infinite");

    $('.lights #light1').css("background-color", light1UnderTheSea);
    $('.lights #light1').css("box-shadow", "0 0 50px #d10000");
    $('.lights #light1').css("animation-delay", "-1s");

    $('.lights #light2').css("background-color", light2UnderTheSea);
    $('.lights #light2').css("box-shadow", "0 0 50px #79cd8d");
    $('.lights #light2').css("animation-delay", "-0.6s");

    $('.lights #light3').css("background-color", light3UnderTheSea);
    $('.lights #light3').css("box-shadow", "0 0 50px #ffc680");
    $('.lights #light3').css("animation-delay", "-0.2s");

    $('.lights #light4').css("background-color", light4UnderTheSea);
    $('.lights #light4').css("box-shadow", "0 0 50px #914da8");
    $('.lights #light4').css("animation-delay", "-0.05s");

    $('.lights #light5').css("background-color", light5UnderTheSea);
    $('.lights #light5').css("box-shadow", "0 0 50px #3fab58");
    $('.lights #light5').css("animation-delay", "-0.1s");

    $('.lights #light6').css("background-color", light6UnderTheSea);
    $('.lights #light6').css("box-shadow", "0 0 50px #f3f705");
    $('.lights #light6').css("animation-delay", "-0.4s");

    $('.lights #light7').css("background-color", light7UnderTheSea);
    $('.lights #light7').css("box-shadow", "0 0 50px #40e0d0");
    $('.lights #light7').css("animation-delay", "-0.8s");


}

function checkValueLight1(){
    var isChecked = document.getElementById("light1-toggle-switch").checked;
    if(isChecked){
        turnLight1On();
    } else {
        turnLight1Off();
    }
}

function changeLight1Color(){
    var newColor = document.getElementById("light1-color-picker-value").value;
    document.getElementById("light1").style.backgroundColor = newColor;
    $("#light1").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight2(){
    var isChecked = document.getElementById("light2-toggle-switch").checked;
    if(isChecked){
        turnLight2On();
    } else {
        turnLight2Off();
    }
}

function changeLight2Color(){
    var newColor = document.getElementById("light2-color-picker-value").value;
    document.getElementById("light2").style.backgroundColor = newColor;
    $("#light2").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight3(){
    var isChecked = document.getElementById("light3-toggle-switch").checked;
    if(isChecked){
        turnLight3On();
    } else {
        turnLight3Off();
    }
}

function changeLight3Color(){
    var newColor = document.getElementById("light3-color-picker-value").value;
    document.getElementById("light3").style.backgroundColor = newColor;
    $("#light3").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight4(){
    var isChecked = document.getElementById("light4-toggle-switch").checked;
    if(isChecked){
        turnLight4On();
    } else {
        turnLight4Off();
    }
}

function changeLight4Color(){
    var newColor = document.getElementById("light4-color-picker-value").value;
    document.getElementById("light4").style.backgroundColor = newColor;
    $("#light4").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight5(){
    var isChecked = document.getElementById("light5-toggle-switch").checked;
    if(isChecked){
        turnLight5On();
    } else {
        turnLight5Off();
    }
}

function changeLight5Color(){
    var newColor = document.getElementById("light5-color-picker-value").value;
    document.getElementById("light5").style.backgroundColor = newColor;
    $("#light5").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight6(){
    var isChecked = document.getElementById("light6-toggle-switch").checked;
    if(isChecked){
        turnLight6On();
    } else {
        turnLight6Off();
    }
}

function changeLight6Color(){
    var newColor = document.getElementById("light6-color-picker-value").value;
    document.getElementById("light6").style.backgroundColor = newColor;
    $("#light6").css("box-shadow", "0 0 50px " + newColor);
}

function checkValueLight7(){
    var isChecked = document.getElementById("light7-toggle-switch").checked;
    if(isChecked){
        turnLight7On();
    } else {
        turnLight7Off();
    }
}

function changeLight7Color(){
    var newColor = document.getElementById("light7-color-picker-value").value;
    document.getElementById("light7").style.backgroundColor = newColor;
    $("#light7").css("box-shadow", "0 0 50px " + newColor);
}

function turnLight1On(){
    document.getElementById("light1").style.visibility = "visible";
    document.getElementById("light1-message").innerHTML = "Light 1 is currently on.";
    document.getElementById("light1-message").style.color = "#ffffff";
}
function turnLight1Off(){
    document.getElementById("light1").style.visibility = "hidden";
    document.getElementById("light1-message").style.color = "#ff9c9c";
    document.getElementById("light1-message").innerHTML = "Light 1 is currently off.";
}

function turnLight2On(){
    document.getElementById("light2").style.visibility = "visible";
    document.getElementById("light2-message").innerHTML = "Light 2 is currently on.";
    document.getElementById("light2-message").style.color = "#ffffff";
}
function turnLight2Off(){
    document.getElementById("light2").style.visibility = "hidden";
    document.getElementById("light2-message").style.color = "#ff9c9c";
    document.getElementById("light2-message").innerHTML = "Light 2 is currently off.";
}

function turnLight3On(){
    document.getElementById("light3").style.visibility = "visible";
    document.getElementById("light3-message").innerHTML = "Light 3 is currently on.";
    document.getElementById("light3-message").style.color = "#ffffff";
}
function turnLight3Off(){
    document.getElementById("light3").style.visibility = "hidden";
    document.getElementById("light3-message").style.color = "#ff9c9c";
    document.getElementById("light3-message").innerHTML = "Light 3 is currently off.";
}

function turnLight4On(){
    document.getElementById("light4").style.visibility = "visible";
    document.getElementById("light4-message").innerHTML = "Light 4 is currently on.";
    document.getElementById("light4-message").style.color = "#ffffff";
}
function turnLight4Off(){
    document.getElementById("light4").style.visibility = "hidden";
    document.getElementById("light4-message").style.color = "#ff9c9c";
    document.getElementById("light4-message").innerHTML = "Light 4 is currently off.";
}

function turnLight5On(){
    document.getElementById("light5").style.visibility = "visible";
    document.getElementById("light5-message").innerHTML = "Light 5 is currently on.";
    document.getElementById("light5-message").style.color = "#ffffff";
}
function turnLight5Off(){
    document.getElementById("light5").style.visibility = "hidden";
    document.getElementById("light5-message").style.color = "#ff9c9c";
    document.getElementById("light5-message").innerHTML = "Light 5 is currently off.";
}

function turnLight6On(){
    document.getElementById("light6").style.visibility = "visible";
    document.getElementById("light6-message").innerHTML = "Light 6 is currently on.";
    document.getElementById("light6-message").style.color = "#ffffff";
}
function turnLight6Off(){
    document.getElementById("light6").style.visibility = "hidden";
    document.getElementById("light6-message").style.color = "#ff9c9c";
    document.getElementById("light6-message").innerHTML = "Light 6 is currently off.";
}

function turnLight7On(){
    document.getElementById("light7").style.visibility = "visible";
    document.getElementById("light7-message").innerHTML = "Light 7 is currently on.";
    document.getElementById("light7-message").style.color = "#ffffff";
}
function turnLight7Off(){
    document.getElementById("light7").style.visibility = "hidden";
    document.getElementById("light7-message").style.color = "#ff9c9c";
    document.getElementById("light7-message").innerHTML = "Light 7 is currently off.";
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      if(tablinks[i].classList.contains("clickedtab")){
        tablinks[i].classList.remove("clickedtab");
      }
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " clickedtab";
}