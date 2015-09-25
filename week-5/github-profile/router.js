var Router = Backbone.Router.extend({
  routes: { // url extensions and their corresponding functions, Router expects routes to be defined
    '': 'showIndex',
    ':name/repos': 'showRepos', //translates as variable/repos
    ':name': 'showProfile',
  },

  showIndex: function() {
    this.navigate('#ambethia', { //navigate is a built in function to the router
      trigger: true //this actually triggers the function (only needed with .navigate)
    });
  },

  showProfile: function(name) {
    this.user.set('login', name);
    this.user.fetch().then(function(data) { //makes call to githubs api using the url from the model
      $('.content').html(this.profileView.render()); //sets content dom node to render what the profileView returns
      $('.nav').html(this.navView.render());
    }.bind(this));
  },

  showRepos: function(name) {
    this.user.set('login', name);
    this.user.fetchRepos().then(function(data) {
      this.reposView.repos = data;
      $('.nav').html(this.navView.render()); //returns rendered element and sticks it into page
      $('.content').html(this.reposView.render());
    }.bind(this));
  },

  initialize: function() { //when router initialized...
    this.user = new User({ //user is set to new User (see this.user used in above functions)
      login: 'ambethia' //these become the attributes of the model
    });

    this.profileView = new ProfileView({model: this.user});
    this.navView = new NavView({model: this.user});
    this.reposView = new ReposView({repos: []}); //repos view set to empty array

    Backbone.history.start();
  }
});
