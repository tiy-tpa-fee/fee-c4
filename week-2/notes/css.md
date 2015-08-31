# CSS

The **first** and **most important** rule of CSS is that all elements have default styles, provided by a default stylesheet (comes from the browser). Any element can be customized with nearly any custom CSS.

As developers and designers, we have the opportunity to customize the default stylesheet provided by the browser, by providing our own CSS for the browser to load in addition.

The **second** rule of CSS in this class is that with HTML and CSS, for _any_ layout, less is more. Consider all the permutations of layouts and the CSS declarations, and this will help you to build mind map and a "practiced" routine for particular layout and design techniques.

**Syntax**

CSS is comprised of a series of CSS _statements_, each of which have 0 or more CSS _property/value_ pairs.

Here is a single CSS _statement_ with two _property/value_ pairs:

```css
<selector> {
    display: inline-block;
    border: 3px solid red;
    border-radius: 50%;
}
```

A CSS _statement_ applies the block of _properties_ to any element that matches any and all elements in the webpage that match the _statement target_ (like `img` above).

The _selector_ can be any combination of:

_identifiers_

1. a `tagname`
- a `.class`
- an `#id`
- a star `*` (which matches any `tagname`)
- `[att=value]` - The attribute has to have the exact value specified.
- `[att~=value]` - The attribute’s value needs to be a whitespace separated list of words (for example, class=”title featured home”), and one of the words is exactly the specified value.
- `[att|=value]` - The attribute’s value is exactly “value” or starts with the word “value” and is immediately followed by “-“, so it would be “value-“.
- `[att^=value]` - The attribute’s value starts with the specified value.
- `[att$=value]` - The attribute’s value ends with the specified value.
- `[att*=value]` - The attribute’s value contains the specified value.

_pseudo-classes_

1. `:active`
- `:checked`
- `:default`
- `:empty`
- `:enabled`
- `:first`
- `:first-child`
- `:first-of-type`
- `:focus`
- `:fullscreen`
- `:hover`
- `:invalid`
- `:last-child`
- `:last-of-type`
- `:link`
- `:not()`
- `:nth-child()`
- `:nth-last-child()`
- `:nth-last-of-type()`
- `:nth-of-type()`
- `:only-child`
- `:only-of-type`
- `:optional`
- `:required`
- `:target`
- `:valid`
- `:visited`

_pseudo-objects_

1. `::after`
- `::before`
- `::first-letter`
- `::first-line`
- `::selection`

_combinators_

1. `A B` - descendant selector
- `A > B` - direct child
- `A ~ B` - general sibling
- `A + B` - adjacent sibling
- `A, B` - group selector

Putting it all together, here are some valid CSS statements:

```css
div {}
div.class {}
.class {}
div#id.class {}
#id.class {}

.grid > * {}
.grid > *:nth-child(2n+1) {}

table tr:nth-child(2n+1) {}

article p:first-of-type::first-letter {
    float: left;
    font-size: 2.5em;
}

article a:hover {}

.first + .second {}
```

**Specificity**

Every CSS _statement_ we declare in our own stylesheet overrides the default stylesheet because it is included in the webpage after the default, essentially overwriting any conflicting properties with the latest one.

But what happens if we have two _statements_ adding styles to `p` tags:

```css
html body p { color: green; }
body p { color: red; font-size: 3em; }
```

The paragraph font size will be `3em`, however text color will be green, because the color property has a more **specific** selector applying a value: `html body p`.

Numerically, there is a hidden point system in CSS that determines how this works. Here's the "points" awarded to a selector:

- 1 point per tagname
- 5 points per class
- 25 points per id
- `A B` (descendant) adds the points of A and B together
- `A > B` (direct child) adds A, B, and an extra amount of points
- and so forth...

Thus, generally you should be careful about how specific your _selectors_ are until you need them. We will cover this in greater detail throughout the course.

**Layout techniques**

(From http://learnlayout.com) Creating "columns"

1. `position: absolute`
- `float: left`
- `display: inline-block`

**Pseudo-elements**

There are two "free" elements that you can use with any HTML tag. These can be used to reduce the amount of code needed to produce some graphical effect, and can be added to many elements on multiple HTML pages with just a few lines of CSS.

By default, these pseudo-elements exist inside any element:

```css
div::before {

}

div::after {

}
```

They are simply hidden by default. We can "enable" these hidden elements by adding:

```css
div::before {
    content: "hi!"
}

div::after {
    content: "bye!"
}
```

This will make the `::before` and `::after` elements visible, which are now the very first and very last element in each div.

We can style pseudo-elements with any CSS attributes our hearts desire:

```css
div::before {
    content: "hi!"
    display: inline-block;
    float: left;
    padding: 1em;
    color: #ccc;
    font-size: 1.5em;
}
```

If deconstructing [codepens](http://codepen.io) hasn't taught you what you can do with pseudo-elements, perhaps we can look at a few examples.

**Custom attributes**

```html
<div name="Matt"></div>
```

```css
div::before {
    content: "Hello, my name is " attr(name);
    display: inline-block;
    float: left;
    padding: 1em;
    color: #ccc;
    font-size: 1.5em;
}
```

As in the above, we can access attributes on an element through the CSS with `attr()`.

**Counters**

CSS has counters as well. We can count the occurance of elements. The following code will add a counter to every `<h3>`, and write it out to a pseudo-element's `content`:

```css
body {
  counter-reset: section;
}
h3:before {
  counter-increment: section;
  content: "Section" counter(section) ": ";
}
```

We can even go crazy and count every single element on the page:

```css
body {
  counter-reset: element;
}
*:before {
  counter-increment: element;
  content: "Element" counter(section) ": ";
}
```

**Transitions and Pseudo-classes**

Pseudo-classes like `:hover` can be used to style an element when you hover over it with your mouse.

In a common scenario:

```css
a {
    color: green;
}
a:hover {
    color: red;
}
```

The above CSS will "flicker" between green and red. I want the transition to be smooth!

```css
a {
    color: green;
    transition: color .5s ease;
}
a:hover {
    color: red;
}
```

That's better. :-)

**Transforms**

One method of moving elements up, left, down, and right is to give said element a `position`:

- `relative`,
- `absolute`, or
- `fixed`

However, there is another method to moving elements around on the screen (and more, like rotating, skewing, scaling, etc). We do that with `transform`:

```css
div {
    transition: transform .5s ease;
}
div:hover {
    transform: translateX(10px) translateY(5px) rotate(45deg) skew(20deg) scale(.8);
}
```

We can use any combination of the following in the `transform` property:

1. `translate(X, Y)`
- `translateX(a)`
- `translateY(a)
- `translateZ(a)
- `rotate(Adeg)` same as `rotateZ(Adeg)`
- `rotateX(Adeg)`
- `rotateY(Adeg)`
- `skew(Adeg)`
- `scale(A)`

**Keyframes**

Keyframe animations let us control the intermediate steps of an animation (which is not possible in a transition). The following will demonstrate a method to define an animation in CSS and add it to a hover-state:

```css
@keyframes zoomInAndRotate {
    0% {
        transform: scale(1) rotate(0deg);
    }
    50% {
        transform: scale(1.5) rotate(5deg);
    }
    100% {
        transform: scale(1.5) rotate(90deg);
    }
}
```

```html
.animated:hover {
    animation: zoomInAndRotate 1s linear both;
}
```
