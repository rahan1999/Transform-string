let string = window
  .prompt("Enter a letters to be separated")
  .toLowerCase()
  .split("");

function returnString() {
  let separated = [];

  string.forEach((element, i) => {
    separated.push(`${element.toUpperCase()}${element.repeat(i)}-`);
  });

  separated = separated.join("").slice(0, -1);
  window.alert(separated);
}

returnString();
