const theme_button = document.getElementById("theme_btn");
const laguage_button = document.getElementById("language_btn");
let currentLanguage = "en";

theme_button.addEventListener("click", switch_function);
laguage_button.addEventListener("click", switch_laguage);

function switch_function() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    theme_button.textContent = "Light";
  } else {
    theme_button.textContent = "Dark";
  }
}

function switch_laguage() {
  if (currentLanguage === "en") {
    currentLanguage = "de";
  } else {
    currentLanguage = "en";
  }
  laguage_button.textContent = currentLanguage === "en" ? "DE" : "EN";
  applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
}

const translations = {
  en: {
    title: "My Portfolio",
    bookshelf_title: "Bookshelf",
    bookshelf_text:
      'The "Bookshelf" project is a well-structured digital service designed to help users easily discover and access books across a variety of categories. Developed as part of a collaborative team effort, the platform features multiple intuitive sections aimed at enhancing the user experience. In this project, I contributed not only as a developer, working on core functionality and interface components, but also took on the role of Scrum Master, facilitating agile practices, coordinating team sprints, and ensuring effective communication throughout the development cycle.',
    vyshyvanka_title: "Vyshyvanka",
    vyshyvanka_text:
      'The "Vyshyvanka" project is a team-developed website that showcases a collection of traditional Ukrainian embroidered shirts. The site features a clean and user-friendly layout with simple sections, allowing visitors to easily browse through various designs and styles. As part of the development team, I contributed to building the core structure and ensuring smooth navigation.',
    website_link: "Link to the Project website",
  },

  de: {
    title: "Mein Portfolio",
    bookshelf_title: "Bücherregal",
    bookshelf_text:
      "Das Projekt „Bookshelf“ ist ein gut strukturierter digitaler Service, der Nutzerinnen und Nutzern hilft, Bücher aus verschiedenen Kategorien einfach zu entdecken und darauf zuzugreifen. Es wurde im Rahmen einer Teamarbeit entwickelt und bietet mehrere intuitive Bereiche zur Verbesserung der Benutzererfahrung. In diesem Projekt war ich sowohl als Entwickler tätig – mit Fokus auf Kernfunktionalitäten und UI-Komponenten – als auch als Scrum Master, indem ich agile Prozesse moderierte und die Teamkommunikation sicherstellte.",
    vyshyvanka_title: "Vyshyvanka",
    vyshyvanka_text:
      "Das Projekt „Vyshyvanka“ ist eine im Team entwickelte Website, die traditionelle ukrainische bestickte Hemden präsentiert. Die Website verfügt über ein klares und benutzerfreundliches Layout mit einfachen Bereichen, sodass Besucher verschiedene Designs und Stile leicht erkunden können. Mein Beitrag lag im Aufbau der Grundstruktur und der Sicherstellung einer reibungslosen Navigation.",
    website_link: "Link zu dem Projekt website",
  },
};
