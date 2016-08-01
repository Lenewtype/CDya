# react-mobx-seed
This project was start with "Seed project for React + MobX," created by Sapient Global Markets. To it, I've add Firebase and Material-UI.


[![Dependency Status](https://david-dm.org/sapientglobalmarkets/react-mobx-seed.svg)](https://david-dm.org/sapientglobalmarkets/react-mobx-seed)

## Getting started
Create your own project on Github or elsewhere. Then add a git-remote pointing to this repo. Let's name it `mobx-seed`. Merge into your own branch.

```shell
> git remote add mobx-seed https://github.com/sapientglobalmarkets/react-mobx-seed.git
> git pull mobx-seed master
```

At this point you should have all the seed files. Now you can run:
```shell
> npm install
> npm start
```

(Make sure nothing else is running on port 3000. Made that mistake!!)


## Libraries used

#### Language
- ES2015 + stage-1

#### Application Frameworks

- React
- PostCSS (cssnext + precss + css-modules)
- Material-UI

#### State Management

- MobX

#### Database
- Firebase (data + user auth)
- Firebase Tools (for deployment)

#### Testing

- Mocha
- Karma
- Enzyme
- Coverage with Istanbul

#### Build

- Webpack
- Webpack Dev Server
- ESLint
- Plop (`generator`)
- React-Hot-Reload

####Domain Model

![Release](https://66.media.tumblr.com/4ec85329f57faa1543490e82640d2cd6/tumblr_ob8jrt1Uss1ufu590o2_400.png "Release") ![Track](https://66.media.tumblr.com/c74c17c44e8b28c3c37420e8ab1ffc96/tumblr_ob8jrt1Uss1ufu590o1_250.png "Track")

![Artist](https://67.media.tumblr.com/e459ec303367c0109e0eb9ddd2af069d/tumblr_ob8jrt1Uss1ufu590o3_540.png "Artist")

![Label](https://67.media.tumblr.com/3bde15da96ff5c1d79c3168ea0920728/tumblr_ob8jrt1Uss1ufu590o5_540.png "Label")

A lovely, and somewhat hastily thrown together domain model made with Microsoft Word (I'm a developer, give me a break!!). This was created to show the expected values for what are essentially the 5 main kinds of data that I'll be using for this project. I will need to be adding a 6th eventually, representing the user. 

Several properties have an associated "romaji" version associated with them. Romaji is the name for turning Japanese characters into Roman letters-- "roma" being Japanese for "Rome" or "Roman", and "ji" means "character" or "letter." This will be vital for my project as most users will not be able to read Japanese unassisted, and it will help with SEO if someone is looking for a particular CD. Example:

**鳥籠愛人** - Torikago Aijin

These properties will be helpful in things such as: song titles, custom release types (i.e.: "Concept Singles"), label names, artist names, etc. 


## TODO

- Build it ¯\\_(ツ)_/¯
