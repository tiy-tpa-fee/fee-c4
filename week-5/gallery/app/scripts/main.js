var Router = Backbone.Router.extend({
  routes: {
    "": "listAlbums",
    "album/:name": "showAlbum",
    "about": "about"
  },

  listAlbums: function () {
    $.ajax("list_albums.html").then(function (page) {
      $('.content').html(page)
    })
  },

  showAlbum: function(name) {
  },

  about: function () {
    $.ajax("about.html").then(function (page) {
      $('.content').html(page)
    })
  },

  initialize: function() {
    Backbone.history.start();
  }
});

var Album = Backbone.Model.extend({
  url: function() { return 'albums/' + this.title + '.json'; },
  initialize: function (options) {
    if (options) {
      this.title = options.title;
    }
  }
});

var Gallery = Backbone.Collection.extend({
  url: "albums.json",
  model: Album
});

//
// var GalleryAlbumView = Backbone.View.extend({
//   initialize: function() {
//   },
//   render: function() {
//     return $("<h1>WHAT</h1>");
//   }
// });
//
// var GalleryView = Backbone.View.extend({
//   initialize: function () {
//     this.albumViews = [];
//     this.collection = new Gallery();
//
//     this.collection.fetch().then(function (albums) {
//       _.each(albums, function (album) {
//         this.albumViews.push(new GalleryAlbumView({ model: album }));
//       }.bind(this));
//     }.bind(this));
//     this.render();
//   },
//
//   render: function() {
//     _.each(this.albumViews, function (view) {
//       var foo = $(this.el).append(view.render());
//       console.log(foo);
//     });
//
//     $('.content').html(this.el);
//   }
// });

var router = new Router();
// var galleryView = new GalleryView();
