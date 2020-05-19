// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function defaultTable() {
    tableData.forEach(function(dataInfo) {
        console.log(dataInfo);
        var row = tbody.append("tr");
        Object.entries(dataInfo).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};

defaultTable();

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    tbody.html("");
   
    // var inputElementDateTime = d3.select("#datetime");
    var inputValueDateTime = d3.select("#datetime").property("value");
    console.log(inputValueDateTime);

    filteredDataDateTime = tableData;

    if (inputValueDateTime) {
        filteredDataDateTime = filteredDataDateTime.filter(row => row.datetime === inputValueDateTime);
    }

    console.log(filteredDataDateTime);

    filteredDataDateTime.forEach(function(filterByDate) {
        console.log(filterByDate);
        var row = tbody.append("tr");
        Object.entries(filterByDate).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

