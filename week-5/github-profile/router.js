var Router = Backbone.Router.extend({
  routes: {
    '': 'showIndex',
    ':name/repos': 'showRepos',
    ':name': 'showProfile',
  },

  showIndex: function() {
    this.navigate('#ambethia', {
      trigger: true
    });
  },

  showProfile: function(name) {
    this.user.set('login', name);
    this.user.fetch().then(function(data) {
      $('.content').html(this.profileView.render());
      $('.nav').html(this.navView.render());
    }.bind(this));
  },

  showRepos: function(name) {
    this.user.set('login', name);
    this.user.fetchRepos().then(function(data) {
      this.reposView.repos = data;
      $('.nav').html(this.navView.render());
      $('.content').html(this.reposView.render());
    }.bind(this));
  },

  initialize: function() {
    this.user = new User({
      login: 'ambethia' //these become the attributes of the model
    });

    this.profileView = new ProfileView({model: this.user});
    this.navView = new NavView({model: this.user});
    this.reposView = new ReposView({repos: []}); //repos view set to empty array

    Backbone.history.start();
  }
});
