let $ = require('jquery');
import '../css/style.css';
import module1 from './module1';

let people = require('./feature-modules/featureOne');

$('body').append('<h1>Setting up</h1>');
$('body').append('<h1>'+people[4]+'</h1>');

let button = document.createElement('button');
button.innerHTML = 'click me and check console';
button.onclick = module1;
$('body').append(button);