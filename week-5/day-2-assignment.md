# Github Profile

## Description

We are going to create AJAX powered versions of Github profile pages using Github's APIs.

### Deliverables

- [ ] A publicly visible website on `gh-pages`

### Explorer Mode

- Create the HTML and CSS similar to [Github's profile pages](https://github.com/ambethia?tab=repositories).
- using two AJAX requests/Promises, pull in profile information from Githubs JSON API:
  - your profile data: `https://api.github.com/users/<username>`
  - your repo list: `https://api.github.com/users/<username>/repos`
- Using `Backbone.Router`), let the `hashroute` determine what username is drawn to the screen.
- Create routes and layouts for both the profile and repository lists.
- Use jQuery's DOM manipulation to insert the data from the JSON API into your page.
- The layout does not need to match exactly. Have fun with it!

### Adventure Mode

Use `Backbone.Model` and `Backbone.View` to render the pages.

### Epic Mode.

Include a "search" field that takes you to the github user's profile who's name you type in.
