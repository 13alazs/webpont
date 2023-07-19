<template>
  <div class="language-picker">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="(label, lang) in languages" :value="lang" :key="lang">
        {{ lang.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script>
import languageData from "@/assets/language.json";

export default {
  data() {
    return {
      selectedLanguage: "en",
      languages: languageData,
    };
  },
  methods: {
    changeLanguage() {
      this.$emit("language-change", this.selectedLanguage);
    },
  },
};
</script>

<style>
.language-picker {
  display: inline-block;
}
</style>
