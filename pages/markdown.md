---
title: "Let's do a game!"
---

Learn is pretty cool if you ask me.

# Pick a game in vanilla js

Today we gonna transform [this game](https://web.archive.org/web/20160506160048/http://jsfiddle.net/Tiro/zG3hV/3) from vanilla js to react. The mission is double :

1. Understand legacy code write by others (happens often, this skills must be develop)
2. Learn and pratice react for other thing that a simple todo (you can pick other front-end lib like : vue, angular or even mithril !!)

the code of the game :

```javascript
var fifteen = {
  Move: {up: -4, left: -1, down: 4, right: 1},
  order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function() { return Math.random()-.5; }).concat(0),
  hole: 15,
  isCompleted: function() { return !this.order.some(function(item, i) { return item > 0 && item-1 !== i; }); },
  go: function(move) {
    var index = this.hole + move;
    if (!this.order[index]) return false;
    if (move == fifteen.Move.left || move == fifteen.Move.right)
      if (Math.floor(this.hole/4) !== Math.floor(index/4)) return false;
    this.swap(index, this.hole);
    this.hole = index;
    return true; },
  swap: function(i1, i2) { var t = this.order[i1]; this.order[i1] = this.order[i2]; this.order[i2] = t; },
  solvable: function(a) {
    for (var kDisorder = 0, i = 1, len = a.length-1; i < len; i++)
      for (var j = i-1; j >= 0; j--) if (a[j] > a[i]) kDisorder++;
    return !(kDisorder % 2); } };

if (!fifteen.solvable(fifteen.order)) fifteen.swap(0, 1);
var box = document.body.appendChild(document.createElement('div'));
for (var i = 0; i < 16; i++) box.appendChild(document.createElement('div'));
window.addEventListener('keydown', function(e) {
  if (fifteen.go(fifteen.Move[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
    draw(); if (fifteen.isCompleted()) {
      box.style.backgroundColor = "gold";
      window.removeEventListener('keydown', arguments.callee); } }});

draw();
function draw() {
  for (var i = 0, tile; tile = box.childNodes[i], i < 16; i++) {
    tile.textContent = fifteen.order[i]; tile.style.visibility = fifteen.order[i]? 'visible' : 'hidden'; } };
```

Not pretty clear isn't it ? Let's start

When reading code you have to adopt the top-down approach: Generality first, then when you are confortable with big picture going in details

In our example what we got first is an object with 3 property and 4 function. After declaration, this object is use in condition, we don't exactly know what it does now and we don't care for the moment.

Then the final part we have draw function declaration and invocation.

It's funny but pattern used in this code is exactly what react class component work

```javascript
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    // react use this method to set property in class
    this.state = {
      move: ////etc


    }
  }
  methode1() {

  }
  methode2() {

  }
  render() {

  }
}
```

The mission will be not so complicate to do as our vanlla code has the same structure.

```javascript
var fifteen = {
  Move: {up: -4, left: -1, down: 4, right: 1},
  order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function() { return Math.random()-.5; }).concat(0),
  hole: 15,

  // the first part become
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Move: { up: -4, left: -1, down: 4, right: 1 },
        order: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
          .sort(function() {
            return Math.random() - .5;
          })
          .concat(0),
        hole: 15,
      }
      // doing the same for methode
      isCompleted() {
        return !order.some(function(item, i) {
          return item > 0 && item - 1 !== i;
        });
      }
      go(move) {
        const index = hole + move;
        if (!order[index]) return false;
        if (move === Move.left || move === Move.right)
          if (Math.floor(hole / 4) !== Math.floor(index / 4))
            return false;
        this.swap(index, this.state.hole);
        //this.state.hole = index;
        hole= index
        return true;
      }
```

As you can see we didn't change many thing, the rest of the code will be place in constructor. It will be work like in the vanilla, called on time on the loading when the page load. The small differnce here is thta we don't call object by his name but with this as we are in class

```javascript
if (!this.solvable(this.order)) this.swap(0, 1);
var box = document.body.appendChild(document.createElement('div'));
for (var i = 0; i < 16; i++) box.appendChild(document.createElement('div'));
window.addEventListener('keydown', function(e) {
  if (this.go(fifteen.Move[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
    draw(); if (this.isCompleted()) {
      box.style.backgroundColor = "gold";
      window.removeEventListener('keydown', arguments.callee); } }});

draw();
function draw() {
  for (var i = 0, tile; tile = box.childNodes[i], i < 16; i++) {
    tile.textContent = this.order[i]; tile.style.visibility = this.order[i]? 'visible' : 'hidden'; } };
```

Finall touch when we call method we have to put 'this' before, and we call property we call this.state.property as we dclare them this way in constructor. Then the entire code loocking this way

```javascript
// the first part become
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Move: { up: -4, left: -1, down: 4, right: 1 },
        order: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
          .sort(function() {
            return Math.random() - .5;
          })
          .concat(0),
        hole: 15,
      }


      if (!this.solvable(this.order)) this.swap(0, 1);
      var box = document.body.appendChild(document.createElement('div'));
      for (var i = 0; i < 16; i++) box.appendChild(document.createElement('div'));
      window.addEventListener('keydown', function(e) {
        if (this.go(fifteen.Move[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
          draw(); if (this.isCompleted()) {
            box.style.backgroundColor = "gold";
            window.removeEventListener('keydown', arguments.callee); } }});

      draw();
      function draw() {
        for (var i = 0, tile; tile = box.childNodes[i], i < 16; i++) {
          tile.textContent = this.order[i]; tile.style.visibility = this.order[i]? 'visible' : 'hidden'; } };

    }
      // doing the same for methode
      isCompleted() {
        return !this.state.order.some(function(item, i) {
          return item > 0 && item - 1 !== i;
        });
      }
      go(move) {
        const index = this.state.hole + move;
        if (!this.state.order[index]) return false;
        if (move === this.state.Move.left || move === this.state.Move.right)
          if (Math.floor(this.state.hole / 4) !== Math.floor(index / 4))
            return false;
        this.swap(index, this.state.hole);
        //this.state.hole = index;
         this.state.hole= index;
        return true;
      }
      swap(i1, i2) {
        const t = this.state.order[i1];

        this.state.order[i1] = this.state.order[i2];
        this.state.order[i2] = t;



      }
      solvable(a) {
        for (var kDisorder = 0, i = 1, len = a.length - 1; i < len; i++)
          for (let j = i - 1; j >= 0; j--)
            if (a[j] > a[i]) kDisorder++;
        return !(kDisorder % 2);
      }
      render() {
        return null;
      }
```
Rigth now it should just work but it present no interest as we render the dom in constructor. You should instead when using react use render method, which does exactly the same thing. To Achieve this we will need some futher modification.

Instead of just mutate state like we does react ways recommend to use setState method

```javascript
// instead of that
 this.state.hole= index;
 // change to this
   this.setState({ hole: index });

```
