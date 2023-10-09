# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

**Snapshot of Single Price Grid Component - desktop view of 1440px**

![](images/Single-Price-Snap-2.png)

**Snapshot of Single Price Grid Component - mobile view of 375px**

![](images/Single-Price-Snap-1.png)

### Links

- Solution URL: [Source Code](https://github.com/SoniBasant/Frontend-Mentor-Projects/tree/main/A5-Single-Price-Grid-Component)

- Live Site URL: [Live Link](https://sonibasant.github.io/Frontend-Mentor-Projects/A5-Single-Price-Grid-Component/singlePriceGrid.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I used CSS grid to change the display.

**For one column - three row display**

```css
#card {
  display: grid;
  grid-template-columns: 1fr;
}
```

**For one column in top row and two column in bottom row**

```css
#card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

header {
  grid-row: 1;
  grid-column: 1 / span 3;
}

#subscription {
  grid-row: 2;
}

footer {
  grid-row: 2;
}
```

## Author

- GitHub - [@SoniBasant](https://github.com/SoniBasant)
- Frontend Mentor - [@SoniBasant](https://www.frontendmentor.io/profile/SoniBasant)
- CodePen - [@SoniBasant](https://codepen.io/sonibasant)
- Hashnode - [@SoniBasant](https://sonibasant.hashnode.dev/)
