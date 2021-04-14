let person = [
  {
    name: "toma",
    score: [50, 75, 100],
  },
  {
    name: "nika",
    score: [30, 71, 60],
  },
  {
    name: "ani",
    score: [55, 72, 35],
  },
];
const table = document.querySelector(".table");
for (let i = 0; i < person.length; i++) {
  let row = document.createElement("tr");
  let name = document.createElement("td");
  let math = document.createElement("td");
  math.className = `math${i}`;
  let js = document.createElement("td");
  js.className = `js${i}`;
  let css = document.createElement("td");
  css.className = `css${i}`;
  let nameText = document.createTextNode(person[i].name);
  let mathText = document.createTextNode(person[i].score[0]);
  let jsText = document.createTextNode(person[i].score[1]);
  let cssText = document.createTextNode(person[i].score[2]);
  name.appendChild(nameText);
  math.appendChild(mathText);
  js.appendChild(jsText);
  css.appendChild(cssText);
  row.appendChild(name);
  row.appendChild(math);
  row.appendChild(js);
  row.appendChild(css);
  table.appendChild(row);
}
var q = 0,
  q1 = 0,
  q2 = 0;
var w = 0;
var avg = 0,
  avg1 = 0,
  avg2 = 0;
for (var j = 0; j < person.length; j++) {
  w++;
  q = q + person[j].score[0];
  avg = q / w;

  q1 = q1 + person[j].score[1];
  avg1 = q1 / w;

  q2 = q2 + person[j].score[2];
  avg2 = q2 / w;
}
let row = document.createElement("tr");
let name = document.createElement("td");
let math = document.createElement("td");
let js = document.createElement("td");
let css = document.createElement("td");
let nameText = document.createTextNode("averige");
let mathText = document.createTextNode(avg);
let jsText = document.createTextNode(avg1);
let cssText = document.createTextNode(avg2);
name.appendChild(nameText);
math.appendChild(mathText);
js.appendChild(jsText);
css.appendChild(cssText);
row.appendChild(name);
row.appendChild(math);
row.appendChild(js);
row.appendChild(css);
table.appendChild(row);
console.log(avg1);
for (var i = 0; i < person.length; i++) {
  if (avg > person[i].score[0]) {
    document.querySelector(`.math${i}`).style.backgroundColor = "red";
  } else {
    document.querySelector(`.math${i}`).style.backgroundColor = "green";
  }

  if (avg1 > person[i].score[1]) {
    document.querySelector(`.js${i}`).style.backgroundColor = "red";
  } else {
    document.querySelector(`.js${i}`).style.backgroundColor = "green";
  }
  if (avg2 > person[i].score[2]) {
    document.querySelector(`.css${i}`).style.backgroundColor = "red";
  } else {
    document.querySelector(`.css${i}`).style.backgroundColor = "green";
  }
}
