<template>
  <div id="app">
    <header>
      <LanguagePicker @language-change="changeLanguage" />
    </header>
    <router-view />
  </div>
</template>

<script>
import LanguagePicker from "@/components/LanguagePicker";

export default {
  components: {
    LanguagePicker,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>