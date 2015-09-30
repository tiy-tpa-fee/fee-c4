import $ from 'jquery';
import Backbone from 'backbone';

import Router from './router';

$(function () {
  new Router();
  Backbone.history.start();
})
