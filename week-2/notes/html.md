# HTML

**Browser Rendering Process**

1. loads HTML
2. finds tags from top to bottom, and tries to render them
3. CSS found! - loads it in parallel and continues
4. JS found! - loads and executes it while blocking everything else :-(

**Syntax**

1. This is an HTML tag: `<div>`
2. Most tags exist in two's – they have an opening and closing tag: `<div></div>`
3. Tags can be nested.

    Bad:

    ```html
    <div><span></div></span>
    ```

    Good:

    ```html
    <div> <span></span> </div>
    ```

**Tags**

Common HTML tags:

- html
- head
- body
- div
- span
- p
- a
- pre
- blockquote
- hr
- h1, h2, h3, h4, h5, h6
- img
- ol, ul, li
- strong, em

Table HTML tags:

- table
- tr
- td

Form HTML tags:

- form
- input
- textarea
- button
- label
- fieldset
- select, option

HTML5 tags:

- aside
- article
- audio
- address
- header
- footer
- main
- nav
- section

**Attributes**

Tags can have attributes: `<tagname attributeName="..">`. Some attributes have defined _values_ while others do not.

Common attributes include:

- class, id (can be any value you provide)

    ```html
    <div class="header" id="top-of-page"></div>
    ```

- `<input>` type (can be: text, number, telephone, email, password, url, search, date, time, datetime, month, week, color, range)

    ```html
    <input type="text">
    ```

- `<input>` name, required, pattern

    ```html
    <input name="email" type="email" required>
    <input name="alphabeticalOnly" type="text" pattern="[a-zA-Z]+" required>
    ```

- `<input>` placeholder (can be any placeholder text on an input)

    ```html
    <input type="email" placeholder="Enter your email">
    ```

- `<img>` src (a URL to pull an image from)

    ```html
    <img src="...">
    ```

- `<form>` action (a URL to send the data -- default is to the same webpage address), method (can be: POST or GET -- default is GET)

    ```html
    <form id="login" method="POST">
        <input name="email" type="email" required>
        <input name="pass" type="password" required>
    </form>
    ```

- '<a>' href (can be any URL), target (can be )

    ```html
    <a href="...">
    ```

- other `<form>` and `<input>` attributes: autocomplete, autosave, autofocus
