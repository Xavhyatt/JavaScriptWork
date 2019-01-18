let home = document.getElementById("main");
let findUs = document.getElementById("findus");

$(document).ready(function () {
    $('#results').DataTable({
    "scrollY": "50vh",
    "scrollCollapse": true,
    });
    $('.dataTables_length').addClass('bs-select');
    });

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function showHome() {
    window.location.hre = "Blockbuster.html";
    findUs.style.display = "none";
    home.style.display = "block";
}

function showFindUs() {

    home.style.display = "none";
    findUs.style.display = "block";

}

function showLogIn() {
    document.getElementById("accountAccess").style.display = "none";
    document.getElementById("accountAccessLog").style.display = "block";
}




var movies = [];
var srcRes = [];



function filmList() {

    let filmList = document.getElementById("allFilmList");
    if (filmList.style.display === "none") {
        filmList.style.display = "block";
    }
    else {
        filmList.style.display = "none";
    }
    loadFilms("search");
}


function loadFilms(a) {
    let srcReq;
    if (a == "search") {
        srcReq = document.getElementById("search").value;
    }
    if (a == "qSearch") {
        srcReq = document.getElementById("myInput").value;
    }
    var ratingFilter = document.getElementById("ratingSelect").value;


    let requestURL;

    if (srcReq == "" && ratingFilter == "All") {
        requestURL = "http://localhost:8080/api/film";
    }
    if(ratingFilter=="All"){
        requestURL = "http://localhost:8080/api/film/" + srcReq + "&";
    }
    else {
        requestURL = "http://localhost:8080/api/film/" + srcReq + "&" + ratingFilter;
    }

    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let films = request.response;
        createTable(films);
    }

    function createTable(films) {

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 1; i < films.length; i++) {
            for (var key in films[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute("id","results");
        table.setAttribute("class", "resultsC");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 1; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 1; i < films.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 1; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = films[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

        if (films.length == 0) {
            document.getElementById("message").innerHTML = "No Film Found!";
        }
    }
}
function goToGame(){
    document.getElementById("allFilmList").style.display = "none";
    document.getElementById("welcome").innerHTML = "Blockbuster Game";
    document.getElementById("welcome1").innerHTML = "Find what we have in stock for all Gaming Platforms!";
    document.getElementById("caro1").setAttribute("src" , "CP2077.jpg");
    document.getElementById("caro2").setAttribute("src" , "starfield.jpg");
    document.getElementById("caro3").setAttribute("src" , "hitman.jpg");
    document.getElementById("caro4").setAttribute("src" , "anthem.jpg");
    document.getElementById("card1Title").innerHTML = "PlayStation";
    document.getElementById("card2Title").innerHTML = "Xbox";
    document.getElementById("card3Title").innerHTML = "Nintendo";
    document.getElementById("card1Img").setAttribute("src", "xbox.png");
    document.getElementById("card1Img").setAttribute("width", "auto");
    document.getElementById("card2Img").setAttribute("src", "PS.png");
    document.getElementById("card3Img").setAttribute("src", "nintendo.png");
    document.getElementById("tt1").setAttribute("btn-outline-primary:hover-background-color", "red");
}

$(document).ready(function () {
    $('#dtDynamicVerticalScrollExample').DataTable({
    "scrollY": "50vh",
    "scrollCollapse": true,
    });
    $('.dataTables_length').addClass('bs-select');
    });