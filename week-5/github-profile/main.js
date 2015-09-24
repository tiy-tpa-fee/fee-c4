_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var User = Backbone.Model.extend({
  url: function() {
    return 'https://api.github.com/users/' + this.get('login');
  },

  reposUrl: function() {
    return this.url() + '/repos';
  },

  fetchRepos: function() {
    return $.get(this.reposUrl());
  }
});

var ProfileView = Backbone.View.extend({
  template: _.template($('#profileTemplate').text()),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});

var NavView = Backbone.View.extend({
  template: _.template($('#navTemplate').text()),

  render: function() {
    $('nav li', this.$el).removeClass('active');
  
    return this.$el.html(this.template(this.model.attributes));
  }
});

var ReposView = Backbone.View.extend({
  template: _.template($('#reposTemplate').text()),
  render: function() {
    console.log('rewrew')
    this.$el.html(this.template());
    _.each(this.repos, function(repo) {
      $('ul', this.$el).append('<li>' + repo.name + '</li>');
    }.bind(this));

    return this.$el;
  },

  initialize: function(options) {
    this.repos = options.repos;
  }
});

$(function() {
  var router = new Router();
  $(document).on('change', 'form.search input[type=search]', function(event) {
    router.navigate('#' + $(this).val(), {
      trigger: true
    });
  });

  $(document).on('submit', 'form.search', function(event) {
    event.preventDefault();
  });
});
