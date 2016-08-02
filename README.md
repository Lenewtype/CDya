# CD屋

CD屋 (read: 'CD-ya'), is a pet project of mine. It is an organized catologue of foreign CDs (the music kind) with informatoin about their respective artists and associated labels. It will also give users the ability to mark items as part of their collection and provide ratings and comments on their favorite (or least favorite, most likely) releases. Sources of this data will be drawn from several different resources around the net, but as I am trying to ensure accuracy of information, it will need to be created manually.

This project was start with "Seed project for React + MobX," created by Sapient Global Markets. To it, I've add Firebase and Material-UI. To view the original project and possibly start your own, check out their [Github page](https://github.com/sapientglobalmarkets/react-mobx-seed).


[![Dependency Status](https://david-dm.org/sapientglobalmarkets/react-mobx-seed.svg)](https://david-dm.org/sapientglobalmarkets/react-mobx-seed)

## Getting started
Getting this to run should only really need two commands:

```shell
> npm install
> npm start
```

(Make sure nothing else is running on port 3000. Made that mistake a few times...)


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

A lovely, and somewhat hastily thrown together domain model made with Microsoft Word (I'm a developer, give me a break!!). This was created to show the expected values for what are essentially the 5 main kinds of data that I'll be using for this project: Release, Artist, Track, Label, and Muscian. I will need to be adding a 6th eventually, representing the user. 

**Release** represents a physical (or digital) selection of music, interpreted as **Tracks**. A **Release** can have 1 or more **Tracks**.

**Track** is the name of a song and which number it should be displayed in.

**Artist** is the name of the group or individual who perform and create music. Oddly enough, an **Artist** does not actually have to have any **Releases**, but in most cases they will.

**Musicians** are the individuals who **Artists** are comprised of. They typically only have one role (guitar, bass, etc), but in some cases that role changes during their career. Others have several roles. 

Solo projects are still considered an **Artist** made up of a single **Muscian**, as they usually still have a support entourage.

**Labels** are responsible for the distrubtion of **releases** and managing the performances of **Artists**. **Artists** associated with a label can be bands currently signed or one's that are now "graduates" of aforementioned **Label** but are signed elsewhere. Some **Labels** are only around to produce omnibus **Releases** and do not actually manage **Artists**.

Several properties have an associated "romaji" version associated with them. Romaji is the name for turning Japanese characters into Roman letters-- "roma" being Japanese for "Rome" or "Roman", and "ji" means "character" or "letter." This will be vital for my project as most users will not be able to read Japanese unassisted, and it will help with SEO if someone is looking for a particular CD. Example:

**鳥籠愛人** - Torikago Aijin

These properties will be helpful in things such as: song titles, custom release types (i.e.: "Concept Singles"), label names, artist names, etc. 


## TODO

- Build it ¯\\_(ツ)_/¯  
-Create Firebase Instance  
-See if I can get a working URL up  
-Piece together what a release component looks like  

## DONE

✓ Created README  
✓ Added Material-UI  

