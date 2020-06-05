function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
//Use nested loops to access each cell of the 4x4 grid
for (var row=1;row<=5;row++) {                              //For each row of the 3x3 grid
   for (var column=1;column<=5;column++) {                  //For each column in this row
  
    var row2=Math.floor(Math.random()*5 + 1);                 //Pick a random row from 1 to 4
    var column2=Math.floor(Math.random()*5 + 1);              //Pick a random column from 1 to 4
     
    swapTiles("cell"+row+column,"cell"+row2+column2);         //Swap the look & feel of both cells
  } 
} 
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile25") { 
       //Checking if white tile on the right
       if (column<5) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile25") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile25") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile25") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<5) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile25") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}

/*
function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('images/mudassar.jpg')",
                 "url('images/back.jpeg')",
                 "url('images/back2.jpg')",
                 "url('images/background.jpg')",
                 "url('images/education.jpg')",
                 "url('images/back2.jpg')"];
  document.getElementById("table").style.background=bigSize[random];
} 
*/


/*var randomImage = new Array();

randomImage[0] = "images/back.jpeg";
randomImage[1] = "images/back2.jpg";
randomImage[2] = "images/background.jpeg";
randomImage[3] = "images/education.jpg";


function getRandomImage() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
//document.write ("url('" +randomImage[number] + "')");
}*/

function gamecomplete(){
  
  window.location.reload();

} 



  window.onload = function () 
  {
  stopWatch();
  }
      

function stopWatch() {
  let time, intervalId;
  let shuffle = document.getElementById("shuffle");
  let autocomplete= document.getElementById("autocomplete");

  shuffle.addEventListener("click", function () {
      time = -1;
      incrementTime();
      intervalId = setInterval(incrementTime, 1000);
      shuffle.disabled = true;
      autocomplete.disabled = false;
  });

  autocomplete.addEventListener("click", function () {
      clearInterval(intervalId);
      shuffle.disabled = false;
      autocomplete.disabled = true;
  });

  function incrementTime() {
      time++;
      document.getElementById("time").textContent =
              ("0" + Math.trunc(time / 60)).slice(-2) +
              ":" + ("0" + (time % 60)).slice(-2);
  }
}