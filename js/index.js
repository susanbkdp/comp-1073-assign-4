// create constants to get elements from html
const tableBody = document.querySelector("#results");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const myInfo = document.querySelector("#myInfo");

const myID = "1179966";
const myName = "Susan";

function searchRecipes() {
    // base url
    const baseURL = "https://api.edamam.com/search";
    // application id
    const appId = "164128e8"; 
    // applicatio key
    const appKey = "1c8126f45ac8b80248516e7380e7d54f"; 
    // getting the value from the search input
    const inputValue = searchInput.value;

    // url
    const url = `${baseURL}?q=${inputValue}&app_id=${appId}&app_key=${appKey}`;

    // fetch recipes 
    fetch(url).then(response => response.json()).then(data => displayRecipes(data.hits));
}

function displayRecipes(recipes) {
    // Clear existing table body content
    tableBody.innerHTML = '';
    

    // Loop through the recipes array
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i].recipe;

        // create the elements for the table
        // <tr></tr>
        const tableRow = document.createElement("tr");

        // <td></td>
        const pictureTd = document.createElement("td");
        // <img>
        const pictureImg = document.createElement("img");
        // <img src=...>
        pictureImg.setAttribute("src", recipe.image);
        pictureImg.setAttribute("alt", recipe.label);
        // Append the image to the table cell
        pictureTd.appendChild(pictureImg);
        tableRow.appendChild(pictureTd);

        
        // <td></td>
        const titleTd = document.createElement("td");
        // <td></td>
        const sourceTd = document.createElement("td");
        // <td></td>
        const caloriesTd = document.createElement("td");
        // <td></td>
        const viewRecipeTd = document.createElement("td");

        // add data to td tags
        titleTd.textContent = recipe.label;
        sourceTd.textContent = recipe.source;
        caloriesTd.textContent = recipe.calories;

        
        const viewRecipeLink = document.createElement("a");
        viewRecipeLink.textContent = "View Recipe";
        viewRecipeLink.href = recipe.url;
        viewRecipeTd.appendChild(viewRecipeLink);

        // Adding data to table body
        tableRow.appendChild(titleTd);
        tableRow.appendChild(sourceTd);
        tableRow.appendChild(caloriesTd);
        tableRow.appendChild(viewRecipeTd);

        // Append table row to the table body
        tableBody.appendChild(tableRow);
    }
}

// event listener that waits for the html to load
// then it sets the text content 
document.addEventListener("DOMContentLoaded", function() {
    // set the text content to ID and name
    myInfo.textContent = `Student ID: ${myID} - Name: ${myName}`;
});
// add event listener for button click
searchButton.addEventListener("click", searchRecipes);
// documentation page: https://developer.edamam.com/edamam-docs-recipe-api
