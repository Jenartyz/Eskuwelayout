var aiChatContainer = document.querySelector(".aiChatContainer");
var todoContainer = document.querySelector(".todoContainer");
var notesBodyContainer = document.querySelector(".notesBodyContainer");
var calendarSection = document.querySelector(".calendarSection");
var quizSection = document.querySelector(".quizSection");
var addingNotesBody = document.querySelector(".addingNotesBody");
var navbar = document.querySelector(".navbar");
var settingContainer = document.querySelector(".settingContainer");
var UserSettings = document.querySelector(".UserSettings");
var aboutUs = document.querySelector(".aboutUs");


function showAiChatNavigation() {
    if (aiChatContainer.style.display === "none" || aiChatContainer.style.display === "" || todoContainer.style.display === "block") {
        aiChatContainer.style.display = "block";
        todoContainer.style.display = "none"; 
    } else {
        aiChatContainer.style.display = "none";
    }
    localStorage.setItem('todoDisplay', todoContainer.style.display);
    localStorage.setItem('aiChatDisplay', aiChatContainer.style.display);
}

function exitAiChatNavigation(){
    aiChatContainer.style.display = "none";
    localStorage.setItem('aiChatDisplay', aiChatContainer.style.display);
}

function showTodoContainer() {
    if (aiChatContainer.style.display === "block" || aiChatContainer.style.display === "" || todoContainer.style.display === "" || todoContainer.style.display === "none") {
        aiChatContainer.style.display = "none";
        todoContainer.style.display = "block"; 
    } else {
        todoContainer.style.display = "none";
    }
    localStorage.setItem('aiChatDisplay', aiChatContainer.style.display);
    localStorage.setItem('todoDisplay', todoContainer.style.display); // Fixed localStorage key
}

function exitTodoContainer(){
    todoContainer.style.display = "none";
    localStorage.setItem('todoDisplay', todoContainer.style.display); // Fixed localStorage key
}

function showNavigationHeaderContainer(){
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
    localStorage.setItem('navbarDisplay', navbar.style.display);
}

function exitNavigationHeaderContainer(){
    navbar.style.display = "none";
    localStorage.setItem('navbarDisplay', navbar.style.display);
}

function showCalendarContainer() {
        notesBodyContainer.style.display = "none";
        calendarSection.style.display = "flex"; 
        quizSection.style.display = "none";
        addingNotesBody.style.display = "none"; 
}


function showqQuizContainer() {
    notesBodyContainer.style.display = "none";
    calendarSection.style.display = "none"; 
    quizSection.style.display = "block";
    addingNotesBody.style.display = "none";
}

function showNotesContainer() {
    notesBodyContainer.style.display = "block";
    calendarSection.style.display = "none"; 
    quizSection.style.display = "none"; 
    addingNotesBody.style.display = "none"; 
}
function showSettings(){
    settingContainer.style.display = "flex";
    navbar.style.display = "none";
}
function closeSettings(){
    settingContainer.style.display = "none";
}
function showAboutUs(){
    UserSettings.style.display = "none";
    aboutUs.style.display = "block";
}
function showPersonal(){
    UserSettings.style.display = "block";
    aboutUs.style.display = "none";
}

window.onload = function() {
    var aiChatDisplay = localStorage.getItem('aiChatDisplay');
    if (aiChatDisplay) {
        aiChatContainer.style.display = aiChatDisplay;
    }
    
    var navbarDisplay = localStorage.getItem('navbarDisplay');
    if (navbarDisplay) {
        navbar.style.display = navbarDisplay;
    }
    var todoDisplay = localStorage.getItem('todoDisplay');
    if (todoDisplay) {
        todoContainer.style.display = todoDisplay;
    }
};
