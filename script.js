console.log("script started");

function start() {
    console.log("click");

    // Create a new h1 element 
    let heading = document.createElement("h1");
    heading.innerText = "Attendance";
    heading.style.color = "blue";
    heading.style.fontSize = "30px";
    document.body.appendChild(heading);

    // Ask for the user's name
    let userName = prompt("What is your first name?");
    console.log(userName);
    let userLAstname = prompt("what is your last name?");
    addName(userName, userLAstname);

    addSeparator();
}

function addName(newName, lastname) {
    // Create a new h2 element
    let nameElement = document.createElement("h2");
    
    // Set the text to the name
    nameElement.innerText = lastname + ", " + newName;
    
    // Add it to the page
    document.body.appendChild(nameElement);
}

function addSeparator() {
    // Create a horizontal rule (line) element
    let separator = document.createElement("hr");
    
    // Add the line to the page
    document.body.appendChild(separator);
}
