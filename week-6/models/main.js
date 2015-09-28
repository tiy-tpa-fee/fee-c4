var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id/comments': 'comments'
  },

  index: function () {
    var collection = new ArticleCollection();
    $('ul').empty();
    collection.fetch().then(function () {
      // equivalent of rendering a view instead
      _.each(collection.models, function (article) {
        $('ul').append(
          '<li><a href="#' + article.get('id') + '/comments">' + article.get('title') + '</a></li>'
        );
      });
    });
  },

  comments: function (article_id) {
    var article = new Article({id: article_id});
    $('ul').empty();

    article.fetch().then(function () {
      // equivalent of rendering a view instead
      _.each(article.get('comments'), function (comment) {
        $('ul').append('<li>' + comment.message + '</li>');
      });
    });
  }
});

var Article = Backbone.Model.extend({
  url: function() {
    return 'http://iron-news.herokuapp.com/articles/' + this.get('id');
  }
});

var ArticleCollection = Backbone.Collection.extend({
  url: 'http://iron-news.herokuapp.com/articles',
  model: Article
});


$(function () {
  var router = new Router();
  Backbone.history.start();
})
