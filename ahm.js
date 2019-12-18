setInterval(function(type, date, target) {
  this.type = type;
  this.date = date;
  this.target = target;
});
function template(i, v) {
  this.i = i;
  this.v = function() {
    var val = JSON.parse(localStorage.getItem(i));
    if (val == null) {
      localStorage.setItem(i, v);
    } else {
      localStorage.setItem(i, val + "#" + v);
    }
  };
}
 
var $arr1 = [];
window.addEventListener("load", function(e) {
  var load = e.type + "/" + e.target + "/" + new Date();
  var s = new template("load", load);
  s.v();
});
window.addEventListener("unload", function(e) {
  var unload = e.type + "/" + e.target + "/" + new Date();
  var s = new template("unload", unload);
  s.v();
});
var node = document.getElementById("main");
var gen = document.getElementById("Generate2");
var arr = Array(
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
);
function getRandomeNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
gen.addEventListener("click", function() {
  window.addEventListener("click", function(e) {
    var click = e.type + "/" + e.target + "/" + new Date();
    var s = new template("click", click);
    s.v();
  });
  var mai = document.getElementById("main");
  mai.innerHTML = "";
  var value1 = document.getElementById("Generate").value;
  var ar = [];
  var a = "";
  for (var i = 0; i < value1; i++) {
    var n = getRandomeNum(0, 25);
    var Listelement = arr[n];
    a += Listelement;
    var input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", Listelement);
    input.setAttribute("id", Listelement);
    var mai = document.getElementById("main");
    mai.appendChild(input);
    ar[i] = document.getElementById(Listelement);
  }
  var rr = document.getElementsByName("input");
  for (var i = 0; i < value1; i++) {
    ar[i].addEventListener("click", function(e) {
      window.addEventListener("click", function(e) {
        var click = e.type + "/" + e.target + "/" + new Date();
        var s = new template("click", click);
        s.v();
      });
      var im = document.getElementById("image");
      im.innerHTML = "";
      var imee = document.createElement("img");
      imee.setAttribute("src", "images/" + e.target.value + ".jpg");
      document.getElementById("image").appendChild(imee);
    });
  }
});
 
const sendData = src => {
  let http = new XMLHttpRequest();
  let url = src;
 
  http.open("POST", url, true);
 
  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 
  http.onreadystatechange = function() {
    //Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
    } else {
      //   alert("error");
    }
  };
 
  http.send(JSON.stringify(localStorage));
};
 
// Function to get Data from link=> src
const getData = (src, callback) => {
  const req = new XMLHttpRequest();
 
  req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText);
      callback(undefined, data);
    } else if (req.readyState === 4 && req.status !== 200) {
      callback("Can't Get Data", undefined);
    }
  });
 
  req.open("GET", src);
  req.send();
};
 
setInterval(function() {
  // Replace this link with the data source
  const Link = "home.php";
 
  sendData(Link);
 
  getData(Link, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data); // the RESULT OF THE AJAX=> GET
    }
  });
 
  localStorage.clear();
}, 5000);