// stylelint.config.js
import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: '@archoleat/stylelint-config-extended-scss',
  rules: {
    'declaration-empty-line-before': null,
  },
});
