var imgPath = 'assets/images/team/';
var team = {
    'harshit-jawla': [true, 'harshit-jawla.png', 'Harshit Jawla', 'Full Stack Dev', 'Developer', 'links ', ['JavaScript','HTML5','CSS3','Express','React','Flutter','Node']],
    'ketan-sharma': [true, 'ketan-sharma.jpg', 'Ketan Sharma', 'Digital Marketer', 'Tourist', 'links', ['Marketing','Growth','SEO','Analyst','Social Presence']],
    'kartik-aggarwal': [true, 'kartik-aggarwal.jpg', 'Kartik Aggarwal', 'UI-UX Designer', 'Developer', 'links', ['UI-UX','Social Media','Figma','Content Master']],
    'siddharth-gupta': [true, 'siddharth-gupta.png', 'Siddharth Gupta', 'SEO Expert', 'Creator', 'links', ['Web App Dev','MEAN Stack','Social Media','SEO','Core']],
};

function showPortfolio(el) {
    if (Object.keys(team).indexOf(el.id)!==-1) {
        document.getElementsByClassName("team")[0].style.display="none";
        document.getElementsByClassName("profile")[0].style.display="inline-block";
    }
}

function showTeam() {
    document.getElementsByClassName("profile")[0].style.display="none";
    document.getElementsByClassName("team")[0].style.display="inline-block";
}


function introNext() {
    document.getElementsByClassName("intro1")[0].style.display="none";
    document.getElementsByClassName("intro2")[0].style.display="inline-block";
}

function introBack() {
    document.getElementsByClassName("intro1")[0].style.display="inline-block";
    document.getElementsByClassName("intro2")[0].style.display="none";
}

window.onload = function() {
    //check url and-or redirect
    //if (window.location.pathname!="/" && (Object.keys(team).indexOf(window.location.pathname)!==-1){
    uid=window.location.href.split('/').pop();
    if (Object.keys(team).indexOf(uid)!==-1) {
        showProfile(uid);
    }
    // team list
    let teamClass = document.getElementsByClassName("our-team");
    for (let i=0; i < teamClass.length; i++) {
        let cp = teamClass[i];           // cp = current rofile object
        if (Object.keys(team).indexOf(cp.id)!==-1) {
            pdata=team[cp.id];
            if (pdata[0]==true) {
                cp.firstElementChild.firstElementChild.style.display="inline-block";
            }
            if (pdata[1].startsWith('http')) {
                cp.firstElementChild.nextElementSibling.firstElementChild.src=pdata[1];
            }
            else {
                cp.firstElementChild.nextElementSibling.firstElementChild.src=imgPath+pdata[1];
            }
            cp.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=pdata[2];
            cp.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=pdata[3];
        }
    }
}


function showProfile(pid) {
    if (Object.keys(team).indexOf(pid)!==-1) {
        let cardObj = document.getElementsByClassName("card-container")[0];
        pdata=team[pid];
        if (pdata[0]==true) {
            //console.log(cardObj.firstElementChild.innerHTML);
            cardObj.firstElementChild.innerHTML='FOUNDER';
        }
        else {
            cardObj.firstElementChild.innerHTML='';
        }
        if (pdata[1].startsWith('http')) {
            cardObj.firstElementChild.nextElementSibling.src=pdata[1];  //img
        }
        else {
            cardObj.firstElementChild.nextElementSibling.src=imgPath+pdata[1];
        }
        cardObj.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=pdata[2]; //name
        cardObj.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=pdata[4]; //cat
        cardObj.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=pdata[3]; //title
        skillsLiObj=document.getElementsByClassName('skills')[0].firstChild.nextElementSibling.nextElementSibling;
        skillsLiObj.innerHTML='';
        for (let i of pdata[6]) {
            li=document.createElement('li');
            skill=document.createTextNode(i);
            li.appendChild(skill);
            skillsLiObj.appendChild(li);
        }
        document.getElementsByClassName("team")[0].style.display="none";
        document.getElementsByClassName("profile")[0].style.display="inline-block";
     }
}

