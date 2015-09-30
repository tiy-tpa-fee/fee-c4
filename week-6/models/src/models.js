import Backbone from 'backbone';
import $ from 'jquery';

export class Article extends Backbone.Model {
  get url() {
    return `http://iron-news.herokuapp.com/articles/${this.get('id')}`;
  }

  createComment(message, name) {
    return $.post(
      this.url + '/comments', {
        article_id: this.get('id'),
        message: message,
        name: name
      }
    );
  }
}

export class ArticleCollection extends Backbone.Collection {
  get url() {
    return 'http://iron-news.herokuapp.com/articles'
  }

  get model() {
    return Article
  }
}
