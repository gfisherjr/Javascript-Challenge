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

    var inputValueDateTime = d3.select("#datetime").property("value");
    var inputValueCity = d3.select("#city").property("value");
    var inputValueState = d3.select("#state").property("value");
    var inputValueCountry = d3.select("#country").property("value");
    var inputValueShape = d3.select("#shape").property("value");

    filteredData = tableData;

    if (inputValueDateTime) {
        filteredData = filteredData.filter(row => row.datetime === inputValueDateTime);
    }
    if (inputValueCity) {
        filteredData = filteredData.filter(row => row.city === inputValueCity);
    }
    if (inputValueState) {
        filteredData = filteredData.filter(row => row.state === inputValueState);
    }
    if (inputValueCountry) {
        filteredData = filteredData.filter(row => row.country === inputValueCountry);
    }
    if (inputValueShape) {
        filteredData = filteredData.filter(row => row.shape === inputValueShape);
    }

    filteredData.forEach(function(dataInfo) {
        console.log(dataInfo);
        var row = tbody.append("tr");
        Object.entries(dataInfo).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};

