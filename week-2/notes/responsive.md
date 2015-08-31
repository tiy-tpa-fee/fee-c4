# Responsive Web Design

Several different layout properties have been assessed, and the primary approach to create type-setting "grids" (for example, a newspaper layout), is to create a parent element with a bunch of child elements that `float:left`.

This works well, and is easily implemented with the following:

```css
.parent-element {
    position: relative;
    overflow-y: auto; /* force the height of the parent-element to be as tall as that of the floated elements inside it */
}
.parent-element > * {
    float:left;
    width: 50%;
}
```

The technique above creates "rows of two". For "rows of three", change the width of `.parent-element`'s children (the grid elements) to 33%.

Also, in this approach, the grid elements have no seperation. This isn't ideal, so let's reduce the width of each grid element by 2% and add 1% margins for whitespace:

```css
.parent-element {
    position: relative;
    overflow-y: auto;
}
.parent-element > * {
    float:left;
    width: 48%;
    margin: 0 1% 1.5em 1%; /* top right bottom left */
}
```

This will put some space in-between each grid element.

**Adapting the number of columns to the screen size**

One of the most prominent topics today in the CSS arena is how to approach making "one-size-fits-all" websites. These "responsive" sites work well with large desktop screens, small phone screens, and everything in-between.

For these sites to work "well", sometimes we must implement "collapsing columns", which means as the screen size grows, columns or layout can change. We will cover one primary approach to create "collapsing columns" with **media queries**.

**Rule #1** for using media queries is to start "mobile first". That is:

1. Make all of your CSS statements that are **NOT** inside a media query declare styles for a mobile screen.
2. Find the "breakpoints" - the widths or heights of your browser that a style should change, and write them down
3. Write mediaqueries for each "breakpoint".

Thus, if the CSS from earlier should be changed to mobile first, we would start with a "single column" layout.


```css
.parent-element {
    position: relative;
    overflow-y: auto;
}
.parent-element > * {
    float:left;
    width: 98%;
    margin: 0 1% 1.5em 1%; /* top right bottom left */
}
```

Next, we want to have two columns when the screen is at a tablet size (about 765px), and three columns when the screen is at a reasonable desktop size (about 1024px):

```css
.parent-element {
    position: relative;
    overflow-y: auto;
}
.parent-element > * {
    float:left;
    width: 98%;
    margin: 0 1% 1.5em 1%; /* top right bottom left */
}
@media (min-width: 765px) {
    /* change to two columns */
    .parent-element > * {
        width: 48%;
    }
}
@media (min-width: 1024px) {
    /* change to three columns */
    .parent-element > * {
        width: 31%;
    }
}
```
