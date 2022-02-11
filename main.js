let movieArray = [];
let selectedGenre = "";

// define a constructor to create movie objects with 3 parameters
let MovieObject = function (pTitle, pYear, pGenre) {
    this.title = pTitle;
    this.year = pYear;
    this.genre = pGenre;
}


document.addEventListener("DOMContentLoaded", function (event) {   //standard JS function, Not Jquery

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
    
    // // clear prior data
    // let myul = document.getElementById("myList");
    // myul.innerHTML = '';

    // movieArray.forEach(function (element,) {   // use handy array forEach method
    //     let li = document.createElement('li');
    //     li.innerHTML = "Title: " + element.title + " Year: " + element.year + " Genre: " + element.genre;
    //     myul.appendChild(li);
    // });

   
    // Adding a row inside the tbody.
    let mytbody = $("tbody");

    movieArray.forEach(function (element,) {   // use handy array forEach method
        let tr = "<tr><td width='250'>" + element.title + "</td><td width='150'>" + element.year + 
            "</td><td width='200'>" + element.genre + "</td></tr>";
        mytbody.append(tr);
    });

    // .append($('<tr>')
    //     .append($('<td>')
    //         .append($('<img>')
    //             .attr('src', 'img.png')
    //             .text('Image cell')
    //         )
    //     )
    // );
}