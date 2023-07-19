

document.addEventListener('DOMContentLoaded', function() {
lines = [];
var dropdown = document.getElementById('dropdown-menu'); // Get the dropdown element
console.log(dropdown)
var selectedOption = dropdown.value; // Get the selected value
console.log(selectedOption)
  dropdown.addEventListener('change', function() {
    selectedOption = dropdown.value; // Update the variable with the selected value
    console.log('Selected option: ' + selectedOption);
    fetch(selectedOption + ".txt")
      .then(response => response.text())
      .then(data => {
        lines = [];
        data.split("\n").forEach(line => {
          line = line.trim();
          line = line.replace(/\./g, ''); // Remove periods
          let lineArray = line.split(","); // Split by commas
          if (lineArray.length >= 5) {
            lineArray[4] = lineArray[4].replace(/\//g, ', '); // Replace '/' with comma in index 4
            lineArray[2] = lineArray[2].replace(/\s+/g, ', '); // Replace spaces with comma and space in index 2
            lineArray[3] = lineArray[3].replace(/\s+/g, ', '); // Replace spaces with comma and space in index 3
            lineArray[2] = lineArray[2].replace(/, /, ''); // Remove the first comma in index 2
            lineArray[3] = lineArray[3].replace(/, /, ''); // Remove the first comma in index 3
          }
          lines.push(lineArray);
        });

      })
      .catch(error => {
        console.log("An error occurred while fetching the file:", error);
      });
  });





fetch(selectedOption + ".txt")
  .then(response => response.text())
  .then(data => {
    lines = [];
    data.split("\n").forEach(line => {
      line = line.trim();
      line = line.replace(/\./g, ''); // Remove periods
      let lineArray = line.split(","); // Split by commas
      if (lineArray.length >= 5) {
        lineArray[4] = lineArray[4].replace(/\//g, ', '); // Replace '/' with comma in index 4
        lineArray[2] = lineArray[2].replace(/\s+/g, ', '); // Replace spaces with comma and space in index 2
        lineArray[3] = lineArray[3].replace(/\s+/g, ', '); // Replace spaces with comma and space in index 3
        lineArray[2] = lineArray[2].replace(/, /, ''); // Remove the first comma in index 2
        lineArray[3] = lineArray[3].replace(/, /, ''); // Remove the first comma in index 3
      }
      lines.push(lineArray);
    });

  })
  .catch(error => {
    console.log("An error occurred while fetching the file:", error);
  });

//function checkans(){
//          var value = document.getElementById("numb").value;
//          if (value == answers[randOptionNum]) {
//              document.getElementById("feedback").innerHTML = "correct!";
//           } else {
//              document.getElementById("feedback").innerHTML = "try again!";
//              document.getElementById("showanswer").style.visibility = "visible";
//
//           }
//         };








chosenEntries = [];

function randprob() {
  randOptionNum = '';
  do {
    randOptionNum = Math.floor(Math.random() * lines.length);
  } while (chosenEntries.includes(randOptionNum));

  chosenEntries.push(randOptionNum);

  if (chosenEntries.length > 10) {
    chosenEntries.shift(); // Remove the oldest entry
  }

  document.getElementById("kanji").innerHTML = lines[randOptionNum][0];
  document.getElementById("grade").innerHTML = lines[randOptionNum][1];
  document.getElementById("hiragana").innerHTML = lines[randOptionNum][3];
  document.getElementById("katakana").innerHTML = lines[randOptionNum][2];
  document.getElementById("ans").innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
  console.log(chosenEntries)
}

function showans(){
     document.getElementById("ans").innerHTML = lines[randOptionNum][4];


}
var giveprobButton = document.getElementById('giveprob');
    giveprobButton.addEventListener('click', randprob);
});