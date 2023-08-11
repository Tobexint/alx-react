import $ from "jquery";
import _ fom "lodash";
import './body.css';


$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");

let count = 0;

function updateCounter() {
    count ++;
    $("#count").append(`${count} clicks on the button`);
};

$("button").on('click', _.debounce(updateCounter, 500));
