const navItem1 = document.querySelector('.navitem1')
const navItem2 = document.querySelector('.navitem2')
const navItem3 = document.querySelector('.navitem3')
const navItem4 = document.querySelector('.navitem4')


const elem1 = document.getElementById('summary')
const elem2 = document.getElementById('experience')
const elem3 = document.getElementById('education')
const elem4 = document.getElementById('myprojects')



navItem1.addEventListener('mouseover', function() {
    elem1.style.background = '#63c7bc';
});

navItem1.addEventListener('mouseout', function() {
    elem1.style.background = 'transparent';
});

navItem2.addEventListener('mouseover', function() {
    elem2.style.background = '#eedb9d';
});

navItem2.addEventListener('mouseout', function() {
    elem2.style.background = 'transparent';
});

navItem3.addEventListener('mouseover', function() {
    elem3.style.background = '#63c7bc';
});

navItem3.addEventListener('mouseout', function() {
    elem3.style.background = 'transparent';
});

// navItem4.addEventListener('mouseover', function() {
//     elem4.style.box-shadow = '10px 10px';
// });

// navItem4.addEventListener('mouseout', function() {
//     elem4.style.box-shadow = 'none';
// });
