const menu = document.createElement('div');
menu.id = 'sideMenu'
//basic container that will hold all the links

//close side menu
const closeButton = document.createElement('a');
closeButton.href = "";
closeButton.id = 'closeMenu';
closeButton.className = "begone";
closeButton.innerText = 'x';
menu.append(closeButton);


//link with the sites logo for easy navigation back home across the site EDIT: redesigned site therefore this in the navigation is redundant 
/*const titleLink = document.createElement('a');
titleLink.href = '../index.html';
titleLink.innerText = 'title';
titleLink.id = 'titleLink';
menu.appendChild(titleLink);*/

//navigation to main sections 

const navBar = document.createElement('nav');
navBar.id = 'navigation';
menu.appendChild(navBar);

//dynamically created list to easily add more links or pages
 const navList = document.createElement('ul');
 navList.id ='ulNav';
 const navItems =[
    {title: 'theory', link: '../pages/theory.html'},
    {title: 'design', link: '../pages/design.html'},
    {title: 'artwork', link: '../pages/art.html'}

 ];

 for(let item of navItems){
    const li = document.createElement('li');
    li.id = 'liNav';

    const a = document.createElement('a');
    a.id = 'aNav';
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);
    navList.appendChild(li);
 }
 navBar.appendChild(navList);

 //the header is the main parent and now the nav bar has a list as a child and each list element as a link as a child

 const headHead = document.getElementById("mainPage");
 document.body.insertBefore(menu, headHead);


 //open and closing the menu 

 function sideBar(){
   document.getElementById("sideMenu").style.width = "50%";
 }

 document.getElementById("closeMenu").addEventListener(click, closeBar);

 function closeBar(){
   document.getElementById("sideMenu").style.width = "0";
 }

//creating actual header but this is NOT workingngngngngnngng
/* 
const heading = document.createElement('header');
heading.id = 'heading';

const headingList = document.createElement('ul');
headingList.id = 'headingUl';
heading.appendChild(headingList);

const headingItems =[
   {name: '<i class="fa-solid fa-bars"></i>', linky: '', tag: 'sideMenu'},
   {name: 'the myth', linky: '../index.html', tag: 'titleName'},
   {name: '<i class="fa-solid fa-magnifying-glass"></i>', linky: '', tag: 'searchIcon'}
];
for(let item of headingItems){
   const headingLi = document.createElement('li');
   headingLi.id = 'headingLi';

   const headingA = document.createElement('a');
   headingA.id = item.tag;
   headingA.innerHTML = item.name;
   headingA.href = item.linky;
   headingLi.appendChild(headingA);
   headingList.appendChild(headingLi);
}
document.body.append(heading);*/