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

When reading code you have to adopt the top-down approach: Generality first, then  when you are confortable with big picture going in details

In our example what we got  first is an object with 3 property and  4 function. After declaration, this object is use in condition, we don't exactly know what it does now and we don't care for the moment.

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
