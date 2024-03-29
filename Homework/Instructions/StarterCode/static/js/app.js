// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function buildTable(data){
    // First, clear out existing data
    tbody.html("");
    //to loop through each entry
    data.forEach(dataRow => { 
        console.table(dataRow);
        var row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// a function handleClick
function Click(){
    d3.event.preventDefault() // prevent the form from refreshing the page
    
    let date = d3.select("#datetime").property("value");
    let filterData= tabledata;

    // Check to see if a date was entered and filter the data using that date
    if (date){
        // Apply filter to the table data -> only keep the 
        // rows where the datetime matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);

    }

    buildTable(filterData);
}



d3.selectAll("#filter-btn").on("click", Click);
buildTable(tabledata);
