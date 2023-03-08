const header = document.createElement('header');
//basic header that will hold all the links

//link with the sites logo for easy navigation back home across the site
const titleLink = document.createElement('a');
titleLink.href = '../index.html';
titleLink.innerText = 'title';
titleLink.id = 'titleLink';
header.appendChild(titleLink);

//navigation to main sections 

const navBar = document.createElement('nav');
navBar.id = 'navigation';
header.appendChild(navBar);

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
 document.body.insertBefore(header, headHead);