let introtext = document.getElementById('introtext')
let introtext2 = document.getElementById('introtext2')
let introtext3 = document.getElementById('introtext3')
setTimeout(() => {
    introtext.classList.remove('hidden')
    introtext.classList.add('visib')
}, 800);

setTimeout(() => {
    introtext2.classList.remove('hidden')
    introtext2.classList.add('visib')
}, 1300);

setTimeout(() => {
    introtext3.classList.remove('hidden')
    introtext3.classList.add('visib')
}, 1700);


// fade out
setTimeout(() => {
    introtext.classList.remove('visib')
    introtext.classList.add('hidden')
}, 4000);

setTimeout(() => {
    introtext2.classList.remove('visib')
    introtext2.classList.add('hidden')
}, 4200);

setTimeout(() => {
    introtext3.classList.remove('visib')
    introtext3.classList.add('hidden')
}, 4400);


// load app page
setTimeout(() => {
    window.location.href = 'app.html'
}, 5000);