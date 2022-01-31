let movieArray = [];
let selectedGenre = "";

// define a constructor to create movie objects with 3 parameters
let MovieObject = function (pTitle, pYear, pGenre) {
    this.title = pTitle;
    this.year = pYear;
    this.genre = pGenre;
}


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        movieArray.push(new MovieObject(document.getElementById("movie").value,
         document.getElementById("year").value, selectedGenre));
        console.log(movieArray);
        document.getElementById("movie").value = ""; //Clear current input screen
        document.getElementById("year").value = "";
});

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = document.getElementById("select-genre").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});

function createList() {
    
    // clear prior data
    let myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        let li = document.createElement('li');
        li.innerHTML = "Title: " + element.title + " Year: " + element.year + " Genre: " + element.genre;
        myul.appendChild(li);
    });
//     let myContainer = document.getElementById("container");
//     let myTable = document.createElement("table");
//     let myRow = myTable.insertRow(0);
//     let myData = myRow.innerHTML = `<tr>
//     <th>Movie Title </th>
//     <th>Released Year </th>
//     <th>Rating </th>
// </tr>`;

//     movieArray.forEach(function (element,) {   // use handy array forEach method
//         myRow = myTable.insertRow(-1);
//         myData = myRow.insertCell(0).innerHTML = movieArray[element].title;
//         myData = myRow.insertCell(1).innerHTML = movieArray[element].year;
//         myData = myRow.insertCell(2).innerHTML = movieArray[element].genre;

//         myContainer.innerHTML = "";
//         myContainer.appendChild(myTable);
//         console.log(movieArray);
//     });
};

