const menu = document.querySelector('.hamburger');
const navList = document.querySelector('.mob-nav-list');
const close = document.querySelector('.close');
const lists = document.querySelectorAll('.mob-nav-list li');

menu.addEventListener('click', () => {
  navList.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navList.style.marginLeft = '-1000px';
});

lists.forEach((list) => {
  list.addEventListener('click', () => {
    navList.style.marginLeft = '-1000px';
  });
});

const { body } = document;
const recentWorks = document.querySelector('.Recent-works');

const recentWorksHeading = document.createElement('div');
recentWorksHeading.className = 'recent-works-heading';
recentWorks.appendChild(recentWorksHeading);

const recentWorksTitle = document.createElement('div');
recentWorksTitle.className = 'recent-works-title';
recentWorksTitle.innerHTML = '<h2>My Recent Works</h2>';
recentWorksHeading.appendChild(recentWorksTitle);

const titleLine = document.createElement('div');
titleLine.className = 'line';
titleLine.style.width = '40%';
recentWorksHeading.appendChild(titleLine);

class Project {
  constructor(name, description, featuredImage, technologies, liveLink, sourceLink, className) {
    this.name = name;
    this.description = description;
    this.featuredImage = featuredImage;
    this.technologies = technologies;
    this.liveLink = liveLink;
    this.sourceLink = sourceLink;
    this.className = className;
  }
}

const featuredProject = new Project('Multi Post Stories',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', './images/featured-work.png',
  [['CSS'], ['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'featured');

const project1 = new Project('Professional Art Printing Data',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Project-BG.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project1');

const project2 = new Project('Website Portfolio',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Project-BG.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project2');

const project3 = new Project('Data Dashboard Healthcare',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Proj3-bg.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project3');

const project4 = new Project('Website Portfolio',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Project-BG.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project1');

const project5 = new Project('Professional Art Printing Data',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Project-BG.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project2');

const project6 = new Project('Data Dashboard Healthcare',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  './images/Proj3-bg.png',
  [['HTML'], ['Bootstrap'], ['Ruby']], '#', '#', 'project project3');

const featuredWork = document.createElement('div');
featuredWork.className = featuredProject.className;
recentWorks.appendChild(featuredWork);

const gymfit = document.createElement('div');
gymfit.className = 'gymfit';
featuredWork.appendChild(gymfit);

const gymfitImg = document.createElement('img');
gymfitImg.src = featuredProject.featuredImage;
gymfitImg.style.width = '100%';
gymfit.appendChild(gymfitImg);

const mpsTitle = document.createElement('div');
mpsTitle.className = 'post-stories';
mpsTitle.innerHTML = featuredProject.name;
featuredWork.appendChild(mpsTitle);

const featText = document.createElement('div');
featText.className = 'feat-text';
featText.innerHTML = featuredProject.description;
featuredWork.appendChild(featText);

const featLangList = document.createElement('ul');
featLangList.className = 'lang-list-4';
featuredWork.appendChild(featLangList);

const [tech1, tech2, tech3, tech4] = featuredProject.technologies;

const featHtml = document.createElement('li');
featHtml.className = 'html';
featHtml.innerHTML = tech2;
featLangList.appendChild(featHtml);

const featCss = document.createElement('li');
featCss.className = 'css';
featCss.innerHTML = tech1;
featLangList.appendChild(featCss);

const featbootstrap = document.createElement('li');
featbootstrap.className = 'bootstrap';
featbootstrap.innerHTML = tech3;
featLangList.appendChild(featbootstrap);

const featRuby = document.createElement('li');
featRuby.className = 'Ruby';
featRuby.innerHTML = tech4;
featLangList.appendChild(featRuby);

const featSeeProject = document.createElement('button');
featSeeProject.className = 'see-project';
featSeeProject.innerHTML = '<h2>See Project<h2>';
featuredWork.appendChild(featSeeProject);

featSeeProject.addEventListener('click', () => {
  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  body.appendChild(projectPopup);

  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  body.appendChild(overlay);

  const popupTitle = document.createElement('div');
  popupTitle.className = 'popup-title';
  popupTitle.innerHTML = featuredProject.name;
  projectPopup.appendChild(popupTitle);

  const popupClose = document.createElement('img');
  popupClose.className = 'popup-close';
  popupClose.src = './images/close.png';
  popupTitle.appendChild(popupClose);

  const popupLangs = document.createElement('ul');
  popupLangs.className = 'popup-buttons';
  popupTitle.appendChild(popupLangs);

  const [tech1, tech2, tech3] = featuredProject.technologies;

  const popupLang1 = document.createElement('li');
  popupLang1.className = 'popup-lang';
  popupLang1.innerHTML = tech1;
  popupLangs.appendChild(popupLang1);

  const popupLang2 = document.createElement('li');
  popupLang2.className = 'popup-lang';
  popupLang2.innerHTML = tech2;
  popupLangs.appendChild(popupLang2);

  const popupLang3 = document.createElement('li');
  popupLang3.className = 'popup-lang';
  popupLang3.innerHTML = tech3;
  popupLangs.appendChild(popupLang3);

  const popupImgDiv = document.createElement('div');
  popupImgDiv.className = 'popup-image';
  projectPopup.appendChild(popupImgDiv);

  const popupImg = document.createElement('img');
  popupImg.src = featuredProject.featuredImage;
  popupImg.style.width = '100%';
  popupImg.style.height = '99%';
  popupImgDiv.appendChild(popupImg);

  const popupDesc = document.createElement('div');
  popupDesc.className = 'popup-desc';
  popupDesc.innerHTML = featuredProject.description;
  projectPopup.appendChild(popupDesc);

  const popupSeeMore = document.createElement('div');
  popupSeeMore.className = 'popup-see-more';
  popupDesc.appendChild(popupSeeMore);

  const seeLive = document.createElement('button');
  seeLive.innerHTML = '<h2>See Live <img class="popup-links" src="./images/See-Live.png" alt="Live link"><h2>';
  seeLive.className = 'see-more';
  popupSeeMore.appendChild(seeLive);

  const seeSource = document.createElement('button');
  seeSource.className = 'see-more';
  seeSource.innerHTML = '<h2>See Source <img class="popup-links" src="./images/github-white-icon.png" alt="github link"><h2>';
  popupSeeMore.appendChild(seeSource);

  popupClose.addEventListener('click', () => {
    body.removeChild(projectPopup);
    body.removeChild(overlay);
  });
});

const projectsSection = document.createElement('div');
projectsSection.className = 'projects';
recentWorks.appendChild(projectsSection);

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

projects.className = 'projects';

projects.forEach((project) => {
  const projectdiv = document.createElement('div');
  projectdiv.className = project.className;
  projectsSection.appendChild(projectdiv);

  const projTitle = document.createElement('div');
  projTitle.className = 'professional';
  projTitle.innerHTML = project.name;
  projectdiv.appendChild(projTitle);

  const projdesc = document.createElement('div');
  projdesc.className = 'proj-desc';
  projdesc.innerHTML = project.description;
  projectdiv.appendChild(projdesc);

  const projLangList = document.createElement('ul');
  projLangList.className = 'buttons';
  projectdiv.appendChild(projLangList);

  const [tech1, tech2, tech3] = project.technologies;

  const projLang1 = document.createElement('li');
  projLang1.className = 'proj-lang';
  projLang1.innerHTML = tech1;
  projLangList.appendChild(projLang1);

  const projLang2 = document.createElement('li');
  projLang2.className = 'proj-lang';
  projLang2.innerHTML = tech2;
  projLangList.appendChild(projLang2);

  const projLang3 = document.createElement('li');
  projLang3.className = 'proj-lang';
  projLang3.innerHTML = tech3;
  projLangList.appendChild(projLang3);

  const seeProject = document.createElement('button');
  seeProject.innerHTML = '<h2>See Project<h2>';
  seeProject.className = 'project-link-btn';
  seeProject.innerHTML = '<h2>See Project<h2>';
  projectdiv.appendChild(seeProject);

  seeProject.addEventListener('click', () => {
    const projectPopup = document.createElement('div');
    projectPopup.className = 'project-popup';
    body.appendChild(projectPopup);

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    body.appendChild(overlay);

    const popupTitle = document.createElement('div');
    popupTitle.className = 'popup-title';
    popupTitle.innerHTML = project.name;
    projectPopup.appendChild(popupTitle);

    const popupClose = document.createElement('img');
    popupClose.className = 'popup-close';
    popupClose.src = './images/close.png';
    popupTitle.appendChild(popupClose);

    const popupLangs = document.createElement('ul');
    popupLangs.className = 'popup-buttons';
    popupTitle.appendChild(popupLangs);

    const [tech1, tech2, tech3] = project.technologies;

    const popupLang1 = document.createElement('li');
    popupLang1.className = 'popup-lang';
    popupLang1.innerHTML = tech1;
    popupLangs.appendChild(popupLang1);

    const popupLang2 = document.createElement('li');
    popupLang2.className = 'popup-lang';
    popupLang2.innerHTML = tech2;
    popupLangs.appendChild(popupLang2);

    const popupLang3 = document.createElement('li');
    popupLang3.className = 'popup-lang';
    popupLang3.innerHTML = tech3;
    popupLangs.appendChild(popupLang3);

    const popupImgDiv = document.createElement('div');
    popupImgDiv.className = 'popup-image';
    projectPopup.appendChild(popupImgDiv);

    const popupImg = document.createElement('img');
    popupImg.src = project.featuredImage;
    popupImg.style.width = '100%';
    popupImg.style.height = '99%';
    popupImgDiv.appendChild(popupImg);

    const popupDesc = document.createElement('div');
    popupDesc.className = 'popup-desc';
    popupDesc.innerHTML = project.description;
    projectPopup.appendChild(popupDesc);

    const popupSeeMore = document.createElement('div');
    popupSeeMore.className = 'popup-see-more';
    popupDesc.appendChild(popupSeeMore);

    const seeLive = document.createElement('button');
    seeLive.innerHTML = '<p>See Live<p> <img class="popup-links" src="./images/See-Live.png" alt="Live link">';
    seeLive.className = 'see-more';
    popupSeeMore.appendChild(seeLive);

    const seeSource = document.createElement('button');
    seeSource.className = 'see-more';
    seeSource.innerHTML = '<p>See Source<p> <img class="popup-links" src="./images/github-white-icon.png" alt="github link">';
    popupSeeMore.appendChild(seeSource);

    popupClose.addEventListener('click', () => {
      body.removeChild(projectPopup);
      body.removeChild(overlay);
    });
  });
});

const contactForm = document.querySelector('form');
const email = document.getElementById('mail');
const emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

contactForm.addEventListener('submit', (event) => {
  if (emailRegExp.test(email.value)) {
    contactForm.submit();
  } else {
    event.preventDefault();
    const errorMSG = document.getElementById('error');
    errorMSG.textContent = 'Please use lowercase letters only for the email address';
    errorMSG.className = 'error';
  }
});