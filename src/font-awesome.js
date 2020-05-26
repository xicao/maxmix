import { library } from "@fortawesome/fontawesome-svg-core";
import Vue from "vue";

// internal icons
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
  faSortUp,
  faSortDown,
  faInstagram
);
Vue.component("vue-fontawesome", FontAwesomeIcon);
