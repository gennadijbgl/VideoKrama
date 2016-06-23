// Generated by CoffeeScript 1.10.0
var Max, MaxWord, Planet, Planet1, Planet2, Planet3, Planet4, Planet5, Planet6, SolarSystem, WordsUpper, check, compare, doTable, do_planets, item, line, loops, num_arr, strDo;

Planet = (function() {
  function Planet(name, satellite) {
    this.name = name;
    this.satellite = satellite;
  }

  Planet.prototype.isMoreSatellites = function(count) {
    return count <= this.satellite;
  };

  Planet.prototype.toString = function() {
    return this.name + ' has ' + this.satellite + '\n';
  };

  return Planet;

})();

Planet1 = new Planet("Pluton", 1);

Planet2 = new Planet("Earth", 1);

Planet3 = new Planet("Neptune", 2);

Planet4 = new Planet("Uran", 14);

Planet5 = new Planet("Jupiter", 16);

Planet6 = new Planet("Saturn", 17);

SolarSystem = [Planet1, Planet2, Planet3, Planet4, Planet5, Planet6];

do_planets = function() {
  var satellite_count, str;
  str = '';
  satellite_count = $("#count").val();
  SolarSystem.filter(function(o) {
    return o.isMoreSatellites(satellite_count);
  }).forEach(function(o) {
    return str += o.toString();
  });
  return alert(str);
};

Max = function(t, isGreat) {
  var item;
  item = t[0];
  t.forEach(function(o) {
    if (o > item && isGreat) {
      return item = o;
    } else if (o < item && !isGreat) {
      return item = o;
    }
  });
  return item;
};

MaxWord = function(t) {
  var item;
  item = t[0];
  t.forEach(function(o) {
    if (o.length > item.length) {
      return item = o;
    }
  });
  return item;
};

this.flag = false;

item = [];

check = function(w) {
  var i, j, ref;
  this.flag = false;
  for (i = j = 0, ref = w.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    if (w[i] === w[i].toUpperCase()) {
      this.flag = true;
      break;
      return;
    }
  }
};

loops = function(w) {
  check(w);
  if (this.flag) {
    this.item.push(w);
  }
};

WordsUpper = function(t) {
  t.forEach(loops);
  return this.item;
};

compare = function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

num_arr = function() {
  var array, i, j, len, max_a, min_a, sum;
  array = $("#num_arr").val().toString().split(" ").map(Number);
  max_a = Max(array, true);
  min_a = Max(array, false);
  array = array.sort(compare);
  array = array.filter(function(o) {
    return Math.abs(o) > 1;
  });
  sum = 0;
  for (j = 0, len = array.length; j < len; j += 2) {
    i = array[j];
    sum += parseInt(i);
  }
  alert("Sum each 2 = " + sum);
  $("#num_arr").val(array.join(" "));
  return alert("Max = " + max_a + "[" + (array.indexOf(max_a)) + "], Min = " + min_a + "[" + (array.indexOf(min_a)) + "]");
};

strDo = function() {
  var arr, maxLengthWord, myString;
  myString = $("#strDo").val().toString();
  myString = myString.replace(/[,.!?;:()]/gi, "");
  arr = myString.split(" ");
  maxLengthWord = MaxWord(arr);
  alert(WordsUpper(arr));
  return alert("Words count " + arr.length + ", MaxLengthWord : " + maxLengthWord + "[" + (arr.indexOf(maxLengthWord)) + "]");
};

line = function() {
  var x1, x2, y1, y2;
  x1 = $("#a1").val();
  x2 = $("#a2").val();
  y1 = $("#b1").val();
  y2 = $("#b2").val();
  return alert((x2 - y2) + "x + " + (x1 - y1) + "y + " + (x1 * y2 - x2 * y1) + " = 0");
};

doTable = function() {
  var x;
  x = document.createElement("TABLE");
  return $("#tbl").appendChild(x);
  
};