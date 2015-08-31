# Box Model

## Box Sizing

One of my least favorite parts about layout with CSS is the relationship of width and padding. You’re busy defining widths to match your grid or general column proportions, then down the line you start to add in text, which necessitates defining padding for those boxes. And ‘lo and behold, you now are subtracting pixels from your original width so the box doesn’t expand.

If I say the width is 200px, gosh darn it, it’s gonna be a 200px wide box even if I have 20px of padding!!

Here's a fix:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

And a visual description of how this changes things (for the better):

![](./extras/border-box.jpg)

## The Inline Block Grid

The "inline-block grid" is a slighly different approach from the "float grid". Both approaches can use media queries to make responsive columns. However, the "inline-block grid" takes a different layout approach, and can be customized more.

Let's address the pieces for the grid, one at a time:

1. Box-sizing - keep the padding growing inwards

    ```css
    *, *::before, *::after {
        box-sizing: border-box;
    }
    ```

2. The `.grid` class

    ```css
    .grid {
        font-size: 0px;
        text-align: justify;
        position: relative;
    }
    ```

    - The font-size is set to 0 on the container element because inline elements have "text spaces" between them. We are forcing those "text spaces" to have no width.
    - Justifying the text spreads the items out along the entire horizontal line. This gives the appearance of margins and whitespace b/w the columns if the combined width of the elements doesn't span the width of the container.

3. The `.grid::ifter` pseudo-element

    The last inline element of any container will never be "justified". Because we want all all of our grid elements to be "justified", we are adding a hidden inline-block at the end of the container to let our grid elements justify.

    ```css
    .grid::after {
        content: "";
        display: inline-block;
        width: 100%;
    }
    ```

4. The "mobile-first" case

    ```css
    .grid > * {
        display: inline-block;
        width: 100%;
        text-align: left; /* reset the text-alignment */
        font-size: medium; /* reset the font size */
        vertical-align: top;
        transition: all .25s ease; /* optional, but cool */
    }
    ```

5. The customizations

    ```css
    @media (min-width: 765px){
        .grid-2-765 > * { width: 48%; }
    }

    @media (min-width: 1024px){
        .grid-3-1024 > * { width: 31.33%; }
    }
    ```

    Any combination of customizations can be created and added to an element for granular control of layout.

6. The HTML

```html
<div class="grid grid-2-765 grid-3-1024">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <a href="#"></a>
    <div></div>
    <div></div>
    <li></li>
</div>
```

Now, because the CSS forces every grid element inside the `.grid` container to be an inline block, we can use nearly any element as a child (i.e. `span`, `a`, `div`, `li`, ...).

## Forcing Aspect-Ratio

Forcing the aspect ratio can be done with an `::after` pseudo-element. In this case, `padding-top: 100%;` means give the `::after` element a top padding that is 100% of the container's width.

```css
.squarify > *::after {
    content: "";
    display: block;
    padding-top: 100%;
}
```

## Absolute Centering

http://tiy-houston-front-end-engineering.github.io/TShirts/centering.html

```css
*, *::before, *::after {
    box-sizing: border-box;
}
.square {
    margin: auto;
    width: 200px;
    background-color: chartreuse;
}
.square::after {
    content:"";
    display: block;
    padding-top: 100%;
}
.centerify {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
