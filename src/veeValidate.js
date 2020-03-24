import { extend, localize } from "vee-validate";
import { digits, required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", required);
extend("digits", digits);
// extend("email", email);

// Install messages
localize({
  en
});
