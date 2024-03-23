var aboutLinks = document.getElementsByClassName('aboutLinks');
var linksContent = document.getElementsByClassName('linksContent');

function openTab(tabname){
    for(aboutLink of aboutLinks)
    {
        aboutLink.classList.remove('active-link');
    }
    for(linksContents of linksContent)
    {
        linksContents.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');

}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

  
  
