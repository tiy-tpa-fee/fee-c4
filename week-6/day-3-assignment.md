# Backbone TODOs

## Description

Create an app that lets you manage a list of Tasks. Each Task can (but not required to) have:

1. description (string)
2. isUrgent (boolean)
3. isDone (boolean)
4. dueDate (Date)

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the difference between creating your own Backbone constructors and Backbone instances
* Understand and be comfortable using:
    - `Backbone.*.extend(...)`
    - The `Backbone.Events` mixin/prototype
    - `Backbone.View`, `Backbone.Model`, `Backbone.Collection`, `Backbone.Router`
* Understand what `this` refers to inside of the methods you extend from a Backbone Constructor
* Understand manipulating and using Backbone Models and their events
* Understand manipulating and using Backbone Collections and their events

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use Backbone.View's `events`,`tagName`,`className`,`initalize`,`render` properties.
* Attach a Backbone.View's `el` to the DOM
* Render out a View and it's connected data (from a Model or Collection) with an external template (such as with `Backbone.TemplateView`)
* Create any object with `_.extend({}, Backbone.Events)` and hook it up to a Backbone application/View/etc through the use of the `Events` methods.
* Backbone.Model's
    - getters/setters
    - validation
    - built-in events
* Backbone.Collection's
    - get/set/add/create/filter/map/reduce/reset
    - sorting
    - built-in events
* Backbone.Router

## Details

### Deliverables

* A publicly visible website (gh-pages, etc.)

## Explorer Mode

Create an app that has a form for entering Task descriptions and adds them to a Todo List below (described above).

- [ ] You should wireframe and design a basic layout before starting this app.
- [ ] Your app should use HTML/SCSS extensively for styling.
- [ ] Some of the information can be optional
- [ ] The app should re-render automatically (by use of the Backbone events)
- [ ] You should use a Backbone.Router to handle routes for a home screen.
- [ ] You should have one Backbone.View sub-classes: a HomeView constructor.
- [ ] You should have a Task model and a TodoList collection that uses the Task model

## Adventure Mode

Add sorting to the TodoList collection, using the following rules:
  - All "urgent" Tasks should be at the top of the list view, sorted by due date and description
  - All "done" Tasks should be at the bottom of the list view, sorted by due date and description
  - All Tasks that are neither "done" or "urgent" should be in the middle of the list, sorted by due date and description

## Epic Mode

Using a persistence layer (localStorage, Parse, Firebase), add the ability for your Backbone Models/Collections to load from the data resource. Any subsequent page refreshes should re-render existing data on the server.
