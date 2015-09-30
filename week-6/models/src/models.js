import Backbone from 'backbone';

export class Article extends Backbone.Model {
  get url() {
    return `http://iron-news.herokuapp.com/articles/${this.get('id')}`;
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
