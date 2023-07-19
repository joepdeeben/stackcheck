fetch("katakana.txt")
  .then(response => response.text())
  .then(data => {
    lines = [];
    data.split("\n").forEach(line => {
      line = line.trim();
      line = line.replace(/\./g, ''); // Remove periods
      let lineArray = line.split(","); // Split by commas
      if (lineArray.length >= 2 && lineArray[0] && lineArray[1]) {
        lineArray[1] = lineArray[1].replace(/\s+/g, ', '); // Replace spaces with comma and space in index 1
        lineArray[1] = lineArray[1].replace(/, /, ''); // Remove the first comma in index 1
        console.log(lineArray);
        lines.push(lineArray);
      }
    });
    console.log(lines);
  })
  .catch(error => {
    console.log("An error occurred while fetching the file:", error);
  });

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

  document.getElementById("katakana").innerHTML = lines[randOptionNum][0];
  document.getElementById("ans").innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
  console.log(chosenEntries)
}

function showans(){
     document.getElementById("ans").innerHTML = lines[randOptionNum][1];
}