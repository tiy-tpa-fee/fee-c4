import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Router from './router';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(function () {
  window.router = new Router();
  Backbone.history.start();
})
