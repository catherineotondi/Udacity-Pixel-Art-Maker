// Get the submit button
const submitTb = document.getElementById("submitBtn");
// Get the Color picker element
const colorPickerTb = document.getElementById("colorPicker");
// Get the table element
const tableTb = document.getElementById("pixelCanvas");
// Get the grid height element
const gridHeightTb = document.getElementById("inputHeight");
// Get the width element
const gridWidthTb = document.getElementById("inputWidth");

// Add an event listener to the submit Query input
// so as to call makeGrid method
submitTb.addEventListener('click', (e) => {
    // Prevent the form from default acton
    e.preventDefault();
    // Remove all previous element in the table element
    tableTb.replaceChildren("");
    // Call the makeGrid function
    makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Get the actual height value of the grid
    const heightOfGrid = gridHeightTb.value;
    //Get the actual width of the grid
    const widthOfGrid = gridWidthTb.value;

    // BUild the grid
    for(let i = 0; i < heightOfGrid; i++) {
        // Create a table row element
        const tr = document.createElement('tr');
        // Add a class name of container to the table row
        tr.classList.add('container');

        // For the individual squares
        for(let i = 0; i< widthOfGrid; i++) {
            // Create a table data element
            const td = document.createElement('td');
            // Add a class of square to the table data
            td.classList.add('square');
            // Append the table data element to the table row element
            tr.appendChild(td);
        }
        // Add an event delegation to the table row
        tr.addEventListener(
            'click',
            function(e)
            {
                // Check if the target of the table row contains a class
                // of square
                if(e.target.classList.contains('square')){
                    // If true, set the background color of the target
                    // to the value of the color picker element
                    e.target.style.backgroundColor = colorPickerTb.value;
                }
            });
        
        // Append the table row to the table element
        tableTb.appendChild(tr);
    }
    
}
