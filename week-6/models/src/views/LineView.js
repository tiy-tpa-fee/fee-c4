import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

class LineView extends Backbone.View {
  get tagName () { return 'li' }

  get template () { return _.template($('#lineViewTemplate').text()); }

  get events () {
    return {
      "click .comments": "goToComments"
    }
  }

  goToComments () {
    let path = `#${this.model.get('id')}/comments`;
    window.router.navigate(path, { trigger: true });
  }

  render () {
    this.$el.html(this.template(this.model.serialize()));
    return this.$el;
  }
}

export default LineView;
