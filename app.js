const navItem1 = document.querySelector('.navitem1')
const navItem2 = document.querySelector('.navitem2')
const navItem3 = document.querySelector('.navitem3')

const elem1 = document.getElementById('summary')
const elem2 = document.getElementById('experience')
const elem3 = document.getElementById('education')


navItem1.addEventListener('mouseover', function() {
    elem1.style.background = '#63c7bc';
});

navItem1.removeEventListener('mouseout', function() {
    elem1.style.background = '#63c7bc';
});

navItem2.addEventListener('mouseover', function() {
    elem2.style.background = '#eedb9d';
});

navItem3.addEventListener('mouseover', function() {
    elem3.style.background = '#63c7bc';
});
