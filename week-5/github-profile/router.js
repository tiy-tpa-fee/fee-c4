var Router = Backbone.Router.extend({
  routes: {
    '': 'showAbout',
    'about': 'showAbout',
    ':name/repos/': 'showRepos',
    ':name': 'showProfile',
  },

  showAbout: function() {
    this.showPage('about');
  },

  showProfile: function(name) {
    Promise.all([
      this.showPage('profile'),
      $.get('https://api.github.com/users/' + name)
    ]).then(function(data) {
      // TODO: Could be better with a Backbone view and template
      var profile = data[1];
      $('.content h1').text(profile.name + '\'s Profile');
      $('.content h2').text(profile.login);
      $('.content img').attr('src', profile.avatar_url);
      $('.content .vcard-details .location').text(profile.location);
    });
  },

  showRepos: function(name, foo) {
    console.log(foo)
    Promise.all([
      this.showPage('repos'),
      $.get('https://api.github.com/users/' + name + '/repos')
    ]).then(function(data) {
      _.each(data[1], function (repo) {
        $('.content ul').append('<li>' + repo.name + '</li>');
      })
    });
  },

  showPage: function(pageName) {
    document.title = "Github - " + pageName.toUpperCase();

    $('nav li').removeClass('active');
    $('nav li.' + pageName).addClass('active');

    return $.get(pageName + '.html').then(function(data) {
      $('.content').html(data);
    });
  },

  initialize: function() {
    Backbone.history.start();
  }
});

$(function() {
  var router = new Router();
})
