const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-links .close-btn');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  closeBtn.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
});
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  closeBtn.style.display = 'none';
});

const userData = {
  homeImage: 'images/employe1.png',
  homeTitle: 'Hello there, <span class="color">I\'m</span>',
  homeName: 'Farhat Sharefi',
  homeRole: 'a <span class="color">Junior web developer</span>',
  homeDescription: 'I\'m Farhat Sharefi, a graphic design student at Kabul University with a passion for coding and creating visually stunning web solutions.',
  aboutImage: 'images/undraw_portfolio_update_re_jqnp 1.png',
  aboutTitle: 'About <span class="color">Me</span>',
  aboutRole: '<span class="color">Junior Developer</span>',
  aboutDescription: 'I\'m Farhat Sharefi, a graphic design student with a passion for coding. I’ve studied photography for a year at Baakhtr Institute in Berlin and continue to enhance my skills in web development through my studies at the Kick Start Foundation. With a background in teaching, I enjoy blending creativity with technical expertise to craft meaningful digital experiences.',
  socialIcons: ['images/linkedin.png', 'images/GitHub.png', 'images/fb.png', 'images/WhatsApp.png'],
  skillIcons: ['images/html-5 2.png', 'images/css-3 2.png', 'images/java-script 2.png'],
};

const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
homeSection.querySelector('#home-image').src = userData.homeImage;
homeSection.querySelector('#home-title').innerHTML = userData.homeTitle;
homeSection.querySelector('#home-name').textContent = userData.homeName;
homeSection.querySelector('#home-role').innerHTML = userData.homeRole;
homeSection.querySelector('#home-description').textContent = userData.homeDescription;

aboutSection.querySelector('#about-image').src = userData.aboutImage;
aboutSection.querySelector('#about-title').innerHTML = userData.aboutTitle;
aboutSection.querySelector('#about-role').innerHTML = userData.aboutRole;
aboutSection.querySelector('#about-description').textContent = userData.aboutDescription;

// Fetch primary color from CSS variables
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

// Update all elements with 'color' class to use primary color
const coloredElements = document.querySelectorAll('.color');
coloredElements.forEach((element) => {
  element.style.color = primaryColor;
});

// Set skill icon colors
const skillIcons = aboutSection.querySelectorAll('.about-skills li img');
skillIcons.forEach((icon, index) => {
  icon.src = `${userData.skillIcons[index]}`;
});

// Apply color to skill names
const skillNames = aboutSection.querySelectorAll('.about-skills li span.yellow-text');
skillNames.forEach((skill) => {
  skill.style.color = primaryColor;
});

// Add social icons dynamically
const socialIcons = homeSection.querySelectorAll('.social-icons img');
socialIcons.forEach((icon, index) => {
  icon.src = `${userData.socialIcons[index]}`;
});

const projects = [
  {
    title: '1: Personal Portfolio Webpage',
    description: 'My Personal Portfolio Webpage showcases my skills and projects in web development. Built with HTML and CSS.',
    images: ['images/portfolio.png'],
    longDescription: 'The Personal Portfolio Webpage represents a culmination of my journey and achievements in web development. Developed using HTML, CSS, and JavaScript, this interactive webpage serves as a comprehensive hub where potential employers, clients, or collaborators can explore my skills, projects, and professional profile.',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
    sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio',
  },
  {
    title: '2: Roman Numeral Converter',
    description: 'Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals.',
    images: ['images/roman.png'],
    longDescription: 'Roman Numeral Converter is a versatile web application designed to convert numbers between Roman numerals and Arabic numerals with ease. Developed using HTML, CSS, and JavaScript, this project showcases my ability to create practical, interactive web tools that offer a seamless user experience.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter',
  },
  {
    title: '3: Palindrome Checker',
    description: 'Palindrome Checker is a web application designed to determine whether a given string is a palindrome.',
    images: ['images/Picture1.png'],
    longDescription: 'Palindrome Checker is an innovative web application that determines whether a given string is a palindrome, meaning it reads the same forwards and backwards. Built using HTML, CSS, and JavaScript, this project demonstrates my proficiency in front-end web development and interactive design.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
    sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker',
  },
  {
    title: '4: Telephone Number Validator',
    description: 'Telephone Number Validator is a web application designed to verify the validity of telephone numbers.',
    images: ['images/Picture3.png'],
    longDescription: 'Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
    sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator',
  },
  {
    title: '5: Pokémon Search App',
    description: 'Pokémon Search App allows users to search for and view detailed information about various Pokémon.',
    images: ['images/picture 5.png'],
    longDescription: 'Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.',
    screenshots: ['images/PPP2.png', 'images/PO2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App',
  },
];
