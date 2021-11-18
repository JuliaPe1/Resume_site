// const navItems = document.querySelectorAll('.navitem');
//     const elem1 = document.getElementById('summary')
//     const elem2 = document.getElementById('experience')
//     const elem3 = document.getElementById('education')
//     const elem4 = document.getElementById('myprojects')
    
// 		navItems.forEach(navItem => {
//     navItem.addEventListener('click', changeColor(navItem))
//         });
// 		function changeColor(navItem) {
// 			const hash = navItem.getAttribute('href');
//       console.log(hash);
//       let hashName = hash.substr(1)
//       console.log(hashName);
      
// 		}

///////////////////////////

const navItems = document.querySelectorAll('.navitem');
  
		navItems.forEach(navItem => {
    navItem.addEventListener('click', changeColor(navItem))
        });
        
		function changeColor(navItem) {
            let hashName = navItem.getAttribute('href').substr(1);
			const content = document.querySelectorAll('.content');
            const contentId = content.id;
            console.log(`${hashName} ${contentId}`);
      }


////////////////////////////////////

// const navItems = document.querySelectorAll('.navitem');
// const elem1 = document.getElementById('summary')
// const elem2 = document.getElementById('experience')
// const elem3 = document.getElementById('education')
// const elem4 = document.getElementById('myprojects')

// navItems.forEach(navItem => {
// 	navItem.addEventListener('click', changeColor(navItem));
// })



// function changeColor() {
//     elem1.style.background = '#63c7bc';
// }

// function changeColor() {
//     const hash = navItems[index].getAttribute('href');
//     const elem1 = document.getElementById('summary');
//     const elem2 = document.getElementById('experience');
//     const elem3 = document.getElementById('education');
//     const elem4 = document.getElementById('myprojects');

//     switch(true) {
//         case (navItem.hasAttribute('#summary')):
//         elem1.style.background = '#63c7bc';
//         break;
        
//         case (navItem.hasAttribute('#experience')):
//         elem2.style.background = '#63c7bc';
//         break;

//         case (navItem.hasAttribute('#education')):
//         elem3.style.background = '#63c7bc';
//         break;

//     }
    
//   }

////////////////////////////////////
// let navItemArray = [...navItem];
// let i=0;
// const hash = navItem[i].getAttribute('href')
// for (let i=0; i < navItemArray.length; i++) {
//         console.log(hash);
//     }

// navItemArray.forEach(changeColor);

// function changeColor(item, index, arr) {
    
// }

// changeColor();

//////////////////////////////

// for (let i=0; i < navItemArray.length; i++) {
//     console.log(hash);

// }

// console.log(hash);

// const checkHash = document.querySelectorAll('.navitem.attr.value),

// console.log(checkHash);


// for (let i=0; i < navItemArray.length; i++) {
//     navItemArray.find(function checkHash(){
//         return value = "myprojects";
//     });        
// }

// console.log(value);


/////////////////
//works

// navItem1.addEventListener('mouseover', function() {
//     elem1.style.background = '#63c7bc';
// });

// navItem1.addEventListener('mouseout', function() {
//     elem1.style.background = 'transparent';
// });

// navItem2.addEventListener('mouseover', function() {
//     elem2.style.background = '#eedb9d';
// });

// navItem2.addEventListener('mouseout', function() {
//     elem2.style.background = 'transparent';
// });

// navItem3.addEventListener('mouseover', function() {
//     elem3.style.background = '#63c7bc';
// });

// navItem3.addEventListener('mouseout', function() {
//     elem3.style.background = 'transparent';
// });

// navItem4.addEventListener('mouseover', function() {
//     elem4.style.box-shadow = '10px 10px';
// });

// navItem4.addEventListener('mouseout', function() {
//     elem4.style.box-shadow = 'none';
// });
