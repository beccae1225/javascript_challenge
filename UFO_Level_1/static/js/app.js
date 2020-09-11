// from data.js
var tableData = data;

// YOUR CODE HERE!
//Reference table body
var tbody = d3.select("tbody");

//Add rows for each UFO observation & append cells per UFO dataset

tableData.forEach(element => {
    let row = tbody.append("tr");
    row.append("td").text(element.datetime);
    row.append("td").text(element.city);
    row.append("td").text(element.state);
    row.append("td").text(element.country);
    row.append("td").text(element.shape);
    row.append("td").text(element.durationMinutes);
    row.append("td").text(element.comments);
});

//Find rows to match data input in button

//Select button
let button = d3.select("#filter-btn");

//Select form
let form = d3.select("form");

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Complete event handler function
function runEnter() {

    d3.event.preventDefault();

    let inputElement = d3.select("#datetime");

    let inputValue = inputElement.property("value");

    console.log(inputValue);
   
    let searchData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(searchData);

    d3.select("tbody").html("");

    let filterResults = searchData.forEach(element => {
        let row = tbody.append("tr");
        row.append("td").text(element.datetime);
        row.append("td").text(element.city);
        row.append("td").text(element.state);
        row.append("td").text(element.country);
        row.append("td").text(element.shape);
        row.append("td").text(element.durationMinutes);
        row.append("td").text(element.comments);
    });

   
};



