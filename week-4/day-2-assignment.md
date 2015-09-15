## Dictionary Search

### Description

Your homework tonight is two parts.

#### Part A

Complete the search functionality for the application we built in class today.
Gavin has already implemented the search action and deployed it to the "cloud".

If you `GET /search` with the query parameter 'q' it will reply with a JSON
array containing the results that match your query. The response format is
_identical_ to the format of the main word list:


```json
[
    {
        "definition": "Awesome",
        "word": "Ruby"
    },
    {
        "definition": "Internet Mascot",
        "word": "Cat"
    },
    {
        "definition": "Instructor",
        "word": "Gavin"
    }
]
```

You can test these URLs:

`http://word-dict.herokuapp.com/words.json`

`http://word-dict.herokuapp.com/search?q=cat`

#### Part B

As part of your experience at the The Iron Yard, it's important to start establishing a presence on the web that will extend beyond just the portfolio of code you are writing.

The second part of your assignment today is to create a blog (if you don't have one already) and write a blog post about your experiences at The Iron Yard so far. The Iron Yard likes to share these writings from student occasionally, you can [read some examples](http://blog.theironyard.com/category/stories/).

If you don't already have a Blog, I recommend using https://medium.com/. You can also look at services like Tumbler or Blogspot.

You might also like to publish the assignement from a few weeks ago, where you wrote about the history of the web.

### Objectives

* Understand AJAX and related jQuery functions
* Understand working with JSON data
* Understand HTML forms, inputs and their JS events

### Deliverables

- [ ] a link to your fork of the original repo.

## Explorer Mode

- [ ] Fork [the project I started today](https://github.com/tiy-tpa-js-q3-2015/web-dict-ui) in class to your own repo (Click the 'Fork' button on the top right of the repo page, it will create a copy of the repo under your account, which you can then clone to your computer with `git clone PUT_THE_CLONE_URL_HERE`).
- [ ] Implement the search form's submit handler. I've already stubbed this out for you in `main.js`

Once you've cloned the app, `cd` into it and run:

    npm install
    bower install

    gulp serve

Once you've completed the assignment, you can commit the changes to your own fork and push them to Github.

## Adventure Mode

- [ ] Deploy to gh-pages using the gh-pages gulp plugin.
- [ ] Have the Add Definition form reset after the AJAX request is complete.

## Additional Resources & Documenation

- [MDN: HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
- [jQuery API Docs](http://api.jquery.com)
- [jQuery Learning Center](https://learn.jquery.com)
- [JSON Spec](http://json.org)
