const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = '☀️';
} else {
    body.classList.remove("light-mode");
    toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');


if(body.classList.contains('light-mode')){
    localStorage.setItem("theme", "light");
    toggleButton.textContent = '☀️';
} else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = '🌙';
}
});

const gb = document.getElementById('flag');

const translations = {
    en: {
        greeting: "Hello! My name is Alex Becker",
        projects: "Projects",
        language: "Languages:",
        finProjects: "Projects",
        flag: "🇬🇧",
        about: "About Me",
        mainPart1: "I am an aspiring software developer with a strong interest in technology that started in my childhood through video games and computers. Over time, that curiosity grew into a desire to understand how software works and how it is built.",
        mainPart2: "I recently started learning programming and am currently focused on building a solid foundation in HTML, CSS, and JavaScript while continuing to develop my skills in web development. You can find a <a href='projects.html'>complete list of my projects here</a>.",
        mainPart3: "I created this portfolio to showcase my projects, highlight my progress, and share a bit <a href='aboutme.html'>about myself</a>. At the same time, it allows me to gain practical experience in web development.",
        games: "Games",
        movies: "Movies",
        shows: "Shows",
        books: "Books",
        music: "Music",
        beschreibung: "When I'm not building projects, I like spending my time working out, playing games and exploring new media.",
        satz1: "This page showcases my software development projects.",
        satz2: "More projects will be added as I continue improving my skills.",
        projGrid1: "A simple rock, paper, scissors game"
    },
    de: {
        greeting: "Hallo! Mein Name ist Alex Becker",
        projects: "Projekte",
        language: "Porgrammierprachen:",
        finProjects: "Projekte",
        flag: "🇩🇪",
        about: "Über mich",
        mainPart1: "Ich strebe eine Karriere als Anwendungsentwickler an, weil ich mich schon seit meiner Kindheit für Technologie interessiere. Besonders durch Videospiele und Computer ist meine Neugier entstanden, mehr darüber zu verstehen, wie Software funktioniert und wie sie entwickelt wird.",
        mainPart2: "Mein momentaner Fokus liegt darauf, eine gute Programmierbasis mit HTML, CSS und JavaScript aufzubauen, und ich bin motiviert, meine Fähigkeiten in der Web- und Softwareentwicklung zu erweitern.  Meine Projekte <a href='projects.html'>findest du hier</a>.",
        mainPart3: "Ich habe dieses Portfolio erstellt, um meine Projekte zu präsentieren, meinen Fortschritt zu zeigen und etwas <a href='aboutme.html'>über mich</a> zu teilen. Gleichzeitig sammle ich dadurch praktische Erfahrung beim Entwickeln von Webseiten.",
        games: "Videospiele",
        movies: "Filme",
        shows: "Serien",
        books: "Bücher",
        music: "Musik",
        beschreibung: "Wenn ich nicht gerade an Projekten arbeite, verbringe ich meine Zeit mit Sport, Videospielen und entdecke neue Filme, Serien und Bücher.",
        satz1: "Hier zeige ich meine Softwareprojekte.",
        satz2: "Weitere Projekte werden folgen, während ich meine Fähigkeiten weiter ausbaue.",
        projGrid1: "Ein einfaches Schere, Stein, Papier Spiel"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

updateLanguage(currentLanguage);

function updateLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        
    if (element.dataset.hasHtml !== undefined) {
    element.innerHTML = translations[lang][key];
    } else {
        element.textContent = translations[lang][key];
    }    
  });
}

gb.addEventListener('click', () => {
    currentLanguage = currentLanguage === "en" ? "de" : "en";
    localStorage.setItem("language", currentLanguage);
    updateLanguage(currentLanguage);
    btn.innerHTML = translations[currentLanguage][activeTopic] + ' <span class="arrow"> v</span>';
});

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");
const options = document.querySelectorAll(".option");
const topics = document.querySelectorAll(".topic");
let activeTopic = "games";

const arrow = btn.querySelector(".arrow");

btn.onclick = () => {
    menu.classList.toggle("open");
    arrow.classList.toggle("rotate");
};

options.forEach(option => {
    option.onclick = () => {
        
        const key = option.dataset.translate;

        btn.innerHTML = translations[currentLanguage][key] + ' <span class="arrow"> v</span>';

        options.forEach(o => o.classList.remove("active"));
        option.classList.add("active");

        const topic = option.dataset.topic;
        activeTopic = topic;

        topics.forEach(t => t.classList.add("hidden"));
        document.getElementById(topic).classList.remove("hidden");

        menu.classList.remove("open");
    }
});