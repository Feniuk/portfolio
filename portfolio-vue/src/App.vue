<script setup>
import { ref, computed, watch } from "vue";
import { translations } from "./i18n/translations";

// theme state
const isDark = ref(false);

// language state
const currentLanguage = ref("en");

// translations
const t = computed(() => translations[currentLanguage.value]);

function toggleTheme() {
  isDark.value = !isDark.value;
}

function toggleLanguage() {
  currentLanguage.value = currentLanguage.value === "en" ? "de" : "en";
}

watch(isDark, (newValue) => {
  if (newValue) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
</script>

<template>
  <div>
    <div class="wave-container">
      <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="M0,160L80,154.7C160,149,320,139,480,128C640,117,800,107,960,106.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          fill="#2e86de"
        />
      </svg>
    </div>

    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ t.title }}</h1>

      <button class="theme_btn btn" @click="toggleTheme">
        {{ isDark ? "Light" : "Dark" }}
      </button>

      <button class="language_btn btn" @click="toggleLanguage">
        {{ currentLanguage === "en" ? "DE" : "EN" }}
      </button>
    </header>

    <!-- Projects -->
    <div class="project_wrapper">
      <div class="project">
        <h2 class="subtitle">{{ t.bookshelf_title }}</h2>
        <p class="text">{{ t.bookshelf_text }}</p>
        <a
          href="https://stelmakh1991.github.io/CodeCrafters/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.website_link }}
        </a>
      </div>

      <div class="project">
        <h2 class="subtitle">{{ t.vyshyvanka_title }}</h2>
        <p class="text">{{ t.vyshyvanka_text }}</p>
        <a
          href="https://stelmakh1991.github.io/DreamTeamGoIT-project-21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.website_link }}
        </a>
      </div>
    </div>

    <!-- Links -->
    <div class="links">
      <a
        href="https://drive.google.com/file/d/1v6MXMxJGj-YMleNn9wCueqXE0l47FOBG/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <a
        href="https://github.com/Feniuk"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/mykhailo-feniuk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</template>

<style></style>
