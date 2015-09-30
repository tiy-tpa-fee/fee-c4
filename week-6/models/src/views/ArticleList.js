import Backbone from 'backbone';

class ArticleList extends Backbone.View {
  get tagName () { return 'ol' }

  render () {
    const self = this;
    console.log('boo', this.collection);
    this.collection.each((article) => {
      console.log('hoo');
      // let view = new LineView({model: article});
      let view = `<p><a href="#${article.get('id')}/comments">${article.get('title')}</a></p>`
      self.$el.append(view);
    });
    return this.$el;
  }
}

export default ArticleList;
