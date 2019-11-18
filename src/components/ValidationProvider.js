import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

// Add a rule.
extend('guestbook-message', {
  validate: value => value === '',
  message: 'The message is invalid.'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);