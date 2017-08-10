## League of Legends:
## summnr.ui (a pokedex for LOL)
## v0.01


## Overview

** project outline and user stories hosted at 'https://trello.com/b/JATVvofe/project-2'

** project hosted @ 'https://mighty-woodland-27297.herokuapp.com/'

** summnr.ui is a full-stack application created for users of Riot Game's League of Legends(LOL).
The target market being specifically new, inexperienced players looking to shorten their learning curve.

** The application follows an MVC pattern of architechture and utilizes a variety of node.js modules to facilitate middleware and backend functionality.

## Models:

** User: stores a variety of information on site users, primarily login information, but also LOL summoner details and a favorite champion list. Summoner name information is collected via registration and used to conduct api calls to the riot games developer api to store recent data associated with a summoner account.

** Champions: the characters available for LOL players to control. Champion information is hardcoded currently to limit api calls.

** FavoriteList: All lists are stored seperately and referenced by the user


## Views: 
** ejs is used as the view engine responsible for rendering backend data
** The user navigates through 3 main views
	Authentication/Registration +
	UserProfile +
	ChampionProfile


## Controllers:
** mongoose.js - Utilized to communicate CRUDibly with MogoDb - where application collections are stored

Have at least 2 software unit tests using Mocha and Chai

## 3rd Party API
** Data is collected from two sources. Riot games provides a temporary developer key that can be regenerated for use on a daily basis. Permanent keys can be applied for as a project reaches production status.

## Funtionality -v.0.01
** Passport.js - Login & Registration information is collected, passwords are hashed and authenticated. 


** express.js - Middleware functionality to create RESTful routes

JSON interaction - a dropdown menu is available in the top navigation with available url api endpoints where JSON is accessed


Front-End
Uses jquery for DOM manipulation and bootstrap* for styling 


---FUTURE FEATURE IMPLENTATION : Users should be able to simulate league of legends item build paths on specific champions.


*future versions will implement angular in favor of jquery/ejs and *** for styling

	Users should be able to save build paths.

Users should be able to see the impact each item has on champion statistics at any given level

Users should be able to log in using their summoner name.

Users profile landing page should display basic summoner information(most frequently used champions - frequently used build pathes - most purchased items)

Users can view the impacts of various 
