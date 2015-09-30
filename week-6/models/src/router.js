import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import { Article, ArticleCollection } from './models';

import ArticleList from './views/ArticleList';

class Router extends Backbone.Router {

  initialize () {
    this.articles = new ArticleCollection();
    this.articleList = new ArticleList({collection: this.articles});
  }

  get routes () {
    return {
      '': 'index',
      ':id/comments': 'comments'
    };
  }

  index () {
    let collection = new ArticleCollection();
    collection.fetch().then(() => {
      $('body').html(this.articleList.render());
    });
  }

  comments (article_id) {
    const article = new Article({id: article_id});
    $('ul').empty();

    article.fetch().then(() => {
      // equivalent of rendering a view instead
      _.each(article.get('comments'), function (comment) {
        $('ul').append(`<li>${comment.message}</li>`);
      });
    });
  }
}

export default Router;
