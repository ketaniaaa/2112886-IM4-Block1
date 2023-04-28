//dynamically created a header which contains a button that expands the menu and the logo with the site name. This 
const header = document.createElement('header');
header.id = 'mainMenu';

const menuButton = document.createElement('p');
menuButton.id = "menuButton";
menuButton.innerHTML = "&plus;";
menuButton.addEventListener("click", sideBar);
header.appendChild(menuButton);

const logoLink = document.createElement('a');
logoLink.id = "logoA"
logoLink.href = '../index.html'
header.appendChild(logoLink);

const logoImg = document.createElement('img');
logoImg.src = "../assets/highresLogo.png";
logoImg.alt = "logo for the Myth with says The Myth and has a slanted line and circle to represent the boulder up a mountain"
logoImg.id = "logoImg";
logoLink.appendChild(logoImg);



const menu = document.createElement('div');
menu.id = 'sideMenu'
//basic container that will hold all the links

//close side menu
const closeButton = document.createElement('p');

closeButton.id = 'closeMenu';
closeButton.className = "begone";
closeButton.innerHTML = '&times;';
menu.append(closeButton);

const navContainer = document.createElement('div');
navContainer.id = "navCont";
menu.appendChild(navContainer);
//navigation to main sections 
const contents = document.createElement('h1');
contents.id = 'contentTitle';
contents.innerText = 'Contents';
navContainer.appendChild(contents);


const navBar = document.createElement('nav');
navBar.id = 'navigation';
navContainer.appendChild(navBar);

//dynamically created list to easily add more links or pages
 const navList = document.createElement('ul');
 navList.id ='ulNav';
 const navItems =[
   {title: 'i. home', link: '../index.html'},
    {title: 'ii. theory', link: '../pages/theory.html'},
    {title: 'iii. design', link: '../pages/design.html'},
    {title: 'iv. artwork', link: '../pages/art.html'}

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

//const blogSub = document.createElement('ol');
//blogSub.id = "blogSubMenu";



const footer = document.createElement('footer');
footer.id ="footsy";
navContainer.appendChild(footer);

const authorCredit = document.createElement('p');
authorCredit.id = 'endCredit';
authorCredit.innerText = "Ketania Govender 2023"
footer.appendChild(authorCredit);

const exLinks = document.createElement('ul');
exLinks.id = 'ulExlink';
const exItems = [
   {title: 'Github', link: 'https://github.com/ketaniaaa/2112886-IM4-Block1', target: '_blank'},
   {title: 'Figma', link: 'https://github.com/ketaniaaa/2112886-IM4-Block1', target: '_blank'},
   {title: 'Resources', link: 'https://github.com/ketaniaaa/2112886-IM4-Block1', target: '_blank'},
   {title: 'LinkedIn', link: 'https://github.com/ketaniaaa/2112886-IM4-Block1', target: '_blank'}
];
for (let item of exItems){
   const exLi = document.createElement('li');
   exLi.id = 'liEx';

   const exA = document.createElement('a');
   exA.id ='aEx';
   exA.innerText = item.title;
   exA.href = item.link;
   exA.setAttribute("target", "_blank");
   exLi.appendChild(exA);
   exLinks.appendChild(exLi);
}
footer.appendChild(exLinks);

 //the header is the main parent and now the nav bar has a list as a child and each list element as a link as a child

 const headHead = document.getElementById("mainPage");
 document.body.insertBefore(menu, headHead);
 document.body.prepend(header);


 //open and closing the menu 

 function sideBar(){
   document.getElementById("sideMenu").style.width = "50%";
   
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById('menuButton').innerHTML = '&times;'
 }

 document.getElementById("closeMenu").addEventListener('click', closeBar);

 function closeBar(){
   document.getElementById("sideMenu").style.width = "0";
    document.getElementById('menuButton').innerHTML = '&plus;'
 }


////////////////////////////////////////////////Blog and Theory 

/*
const tdContainer = document.getElementsByClassName('tdCont');

const tdList = document.createElement('ol');
tdList.id ='tdList';

const tdListItems = [
   {title: 'blog one', link: '../pages/blogone.html'},
   {title: 'blog two', link: ''},
   {title: 'blog three', link: ''},
   {title: 'blog four', link: ''},
   {title: 'blog five', link: ''},
];
for(let item of tdListItems){
   const tdLi = document.createElement('li');
   tdLi.id = 'tdLi';

   const tdA = document.createElement('a');
   tdA.id = 'tdA';
   tdA.href = item.link;
   tdA.innerText = item.title;
   tdLi.appendChild(tdA);
   tdList.appendChild(tdLi);
}

*/






/* document.addEventListener('click', function handleClickOutsideBox(event) {
  const box = document.getElementById('box');

  if (!box.contains(event.target)) {
    box.style.display = 'none';
  }
});
 */




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