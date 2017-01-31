---
title: Let's do a game!
---

Markdown is pretty cool if you ask me.

## Pick a game in vanilla js

### Numbered
1. me first!
2. I'm second!
3. third :(



And **lots** of other *fun* stuff.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

## Enable additional syntax with Markdown-it plugins

You can add additional Markdown-it plugins with
[a custom markdown loader](https://github.com/gatsbyjs/gatsby-starter-default/blob/master/loaders/markdown-loader/index.js#L22-L32).

### Subscript
H~2~0

### Footnote
Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]

### Definition lists
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

### Abbreviation
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.

### Add a class or other attributes to content.
here be dragons {.warning}

## Some code

Javascript
```javascript
const start = (arr) =>  arr.map((x,y) => x + y )
```
