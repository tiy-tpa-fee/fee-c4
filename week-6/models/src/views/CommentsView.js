import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import LineView from './LineView';

class CommentsView extends Backbone.View {
  get template() {
    return _.template($('#commentsViewTemplate').text());
  }

  get events() {
    return {
      "submit form.newComment": "createComment"
    }
  }

  createComment(event) {
    event.preventDefault();
    let form = $(event.target);

    let message = $('[name=message]', form).val();
    let name = $('[name=name]', form).val();

    if (message.length > 0 && name.length > 0) {
      this.model.createComment(message, name).then(function () {
        $('ul', self.$el).prepend(`<li>
          <div class="message">${message}</div>
          <div class="author">by ${name}</div>
        </li>`);
      });

      event.target.reset();
    }
  }

  render() {
    let self = this;
    let lineView = new LineView({
      model: this.model
    });

    this.$el.html(this.template());

    _.each(this.model.get('comments'), function(comment) {
      $('ul', self.$el).append(`<li>
        <div class="message">${comment.message}</div>
        <div class="author">by ${comment.name}</div>
        ${(new Date(comment.created_at)).toLocaleString()}
      </li>`);
    });

    $('.line', this.$el).html(lineView.render());

    return this.$el;
  }
}

export default CommentsView;
