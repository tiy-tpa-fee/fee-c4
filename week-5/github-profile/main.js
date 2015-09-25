_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g // regular expression/global, find h1-name and h2-login on index
};

var User = Backbone.Model.extend({ //model = core program logic and data, all api interaction done here
  url: function() { //key value pair of Model object, a value of function means this is a "method"
    return 'https://api.github.com/users/' + this.get('login'); //"this" is model itself, getting a "login" property of model, stores ?? at the "url" function for later use
  },

  reposUrl: function() { //reposUrl method
    return this.url() + '/repos'; // calls url method from above, and adds /repos, gives url to users repos
  },

  fetchRepos: function() { //this builds off of previous two functions
    return $.get(this.reposUrl()); //does ajax to get repos
  }
});

var ProfileView = Backbone.View.extend({ //view = user interface
  template: _.template($('#profileTemplate').text()), // result of this statement returns a function that can be called to render a template
  // ^ returns profileTemplate html piece
  render: function() {
    var rendered = this.template(this.model.attributes); // call template and pass models attributes
    return this.$el.html(rendered); // set this views element to rendered html ($el. is jquery wrapped dom element)
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
  render: function() {
    this.$el.html($('#reposTemplate').text());
    _.each(this.repos, function(repo) { //iterates through each repo
      $('ul', this.$el).append('<li>' + repo.name + '</li>'); //getting ul thats inside this.el
    }.bind(this));  // bind this so that inside each loop "this" is a reference to the view

    return this.$el;
  },

  initialize: function(options) {
    this.repos = options.repos;
  }
});

$(function() { //search functionality
  var router = new Router();
  $(document).on('change', 'form.search input[type=search]', function(event) {
    router.navigate('#' + $(this).val(), {
      trigger: true
    });
  });

  $(document).on('submit', 'form.search', function(event) { //prevents page reload on search
    event.preventDefault();
  });
});
