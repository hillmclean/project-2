# Pong Game by Hillary

This project is mainly JavaScript and was created mostly in an in-class code-along with some tweeks added after such as color edits, announcing the winner, and shortening the paddles once a player hits 5 points. 

## Technolgy Used 

In this repo, you will find the following files:

- HTML
- CSS 
- JavaScript
- JSON
- ICO
- Node Modules

## Personal Learnings

In the making of this project, I have started to learn the following:

- Objects
- Functions
- Arrays
- Loops
- Conditions
- Nodes
- Classes
- Modules

What I found the most challenging during this project was figuring out what goes where and trying to understand how everything connects to one another and in which files. This is definitely still something I need to get better at (among many other things as well...).


## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂
