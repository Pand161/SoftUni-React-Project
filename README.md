
# Game Bazaar

This is a WEB application using React for the front-end - a site for buying and selling games. Used Softuni Practice server for back-end.               
All visitors to the site can view the published comments. Only registered users can have the full functionality of the application -  post comments and make purchases (if they are not the owner of the one).


## Steps for local instalation and review:
1. Clone the repository: https://github.com/Pand161/SoftUni-React-Project
2. Navigate to server folder (cd server):
   - node server.js - command to start the back-en server;
4. Navigate to client folder(cd client):
   - npm install - command for install all install all packages dependances;
   - npm run dev - runs the app in development mode;
   - open http://localhost:5173 to view it in the browser.




    
## Site overview 
### Every page contains navigation
 - NON logged in user
![navbar](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/1deb2d2e-65c7-4dee-a092-aed161e8d8e8)

 - logged in user 
![navbar2](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/238f7831-01dd-4999-80f8-1163d720cf80)


### Home page
Public part for all users.

![Screenshot_2](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/7ec227a0-f356-4438-898f-2752e8c6b310)

![Screenshot_3](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/a8b3176b-52d7-4d03-9711-c46819819a83)

![Screenshot_4](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/e544a86a-8fe3-42ca-bd19-0f0bd6337a40)

#### Under the home page there is a section, which showes latest 3 created games: 

![Screenshot_5](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/dc76637d-63e5-4391-a63d-77ea2dcecec1)

The button "Enter" goes to Catalog page with all games.

![Screenshot_6](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/6dd7fd0c-9dd6-436b-900f-ad9fe91a2a30)


##### CRUD OPERATIONS

 - GET to endpoint HOST/data/:collection                     
   The service returns array of all games in gamebazaar collection.


### Login page

The login form expects as input: email and password. Button is disabled, if some of fiels is empty or does not meet the conditions.
Valid credentials in this case are:
 -	The valid Email address must be example@example.example.
 -	Password should be at least 5 symbols as well.

![Screenshot_7](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/4dddac9f-271c-44ce-adf0-faf10cedcb93)




### Register page

The register form expects as input: username, email, password and repeat password. Button is disabled, if some of files is empty or does not meet the conditions.
Valid inputs in this case are:
 - 	Username should be at least 4 symbols as well.
 - 	The valid Email address must be example@example.example
 - 	Password should be at least 5 symbols as well
 - 	Repeat password and password must be matched.
 - 	All fields must be requered.

   
![Screenshot_8](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/8a03c095-0452-40d1-8662-d3eb67f40910)


![Screenshot_9](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/bef22c05-4c56-4f05-9e72-daa869ccf0cf)

#### Authorization and CRUD OPERATIONS
 - POST to endpoint HOST/users/login
 - POST to endpoint HOST/users/register
 - GET  to endpoint HOST/users/logout
   
    - User can login in system after successful registration with email and password.
    - The service automatically creates a session and returns an authorization token, that will be used for requests. The session is stored in browser's Local storage. 
    - Path for registration and login is stored in authService.js file
    - Registration require username, valid email and password.


### DEMO USERS
  - peter@abv.bg       pass: 123456;
  - george@abv.bg      pass: 123456;
  - viktor@abv.bg      pass: 123456;



### Add new games
Page only for logged in users.
Every logged in user can create a new add in the site.

The form expects as input: title, genre, description, price and image.
Valid data in this case is:
 -	Description should be at least 5 characters long
 -	The price must be a positive number.
 - All fields are required.
The "Create" button should be disabled if the inputs are NOT valid.

![Screenshot_10](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/1478d24d-45c7-44e6-b715-86633337a347)



##### CRUD OPERATIONS

 - POST to endpoint HOST/data/:collection                               
   The request will create new entry. ID will be generated automatically and will be included in the returned object. 

   
### Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user;
 -  list with own created games with link to the details of theme.
 -  list with all bought games with link to the details of theme.

    ![Screenshot_11](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/6714d084-4b72-4be3-9bd3-d2227bb4cf50)

![Screenshot_12](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/4fe80d83-b280-487a-96b4-8048263e6030)



##### CRUD OPERATIONS

 - GET to endpoint HOST/data/:collection?where=_ownerId%3D%22${userId}%22                 
   The service returns array of all created games collection by userId.
 - GET to endpoint HOST/data/:collection?${query}           
   The service returns array of all games collection by userId.


### Game details page
The page there are two parts - public and private(for logged in users).
1. Public part: 
 - all users can see game info and comments, but not to buy, edit, delete game or to add a new comment.
   
![Screenshot_13](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/02b5241c-5435-473f-89e7-08b30a593e76)




2. Private part - only for logged in users:   
   - Can buy every game only once. If the game was already bought, the user will see message;
   - Can post a new comment;
   - If the user is owner of post, it sees edit and delete buttons.

![Screenshot_14](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/49e45f2b-45fb-45d8-8320-4a477746e5e6)

![Screenshot_16](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/8c32820c-e4d1-410c-9fe2-b247075286ae)

![Screenshot_15](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/21353471-6ae2-4f08-b6d9-7557950f566f)



##### CRUD OPERATIONS

 - GET to endpoint HOST/data/:collection/:id                               
   The service returns entry matching the given ID. Will return 404 if collection or entry do not exist - in that case will navigatе to not found page.

- GET to endpoint HOST/data/:collection?${query}
  The service returns array of all comments in comments collection by gameId.

- POST to endpoint HOST/data/:collection                               
  The request will create new entry in comments collection.

#### Game details - delete game

![Screenshot_17](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/d8741ce9-8421-4ad1-a9d2-87d6419db22b)


##### CRUD OPERATIONS

 - DELETE to endpoint HOST/data/:collection/:id         


#### Game details - edit information

![Screenshot_18](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/2e893c25-e82c-4ae3-b71c-b01401522497)



##### CRUD OPERATIONS

 - GET to endpoint HOST/data/:collection/:id                               
   The service returns entry matching the given ID. Will return 404 if collection or entry do not exist - in that case will navigatе to not found page.
 - PUT to endpoint HOST/data/:collection/:id                                          
   This request requires authorization and to update a single entry (the existing entry will be replaced). Only the owner of the resource can edit it.


## Security and Guards
 - Guеsts guard                                
   The application requires the user to be authenticated in order to create classified for post 
   comments or make purchases.

 - Auth guard                       
   The application redirects to home page when already authenticated user tries to access login, register, profile or add new product page.

 - Undefined routes                        
   Not fond page is implemented to handle undefined routes.

   ![Screenshot_19](https://github.com/Pand161/SoftUni-React-Project/assets/66003294/51891de1-3310-4514-a362-62c7229d24fd)
                

### Used additional lybraries
 - Bootstrap - Used for styling of some page in the application (in the other used own HTML and CSS).
 - React router dom - Used for handling the routing of the application.

## Back-end Softuni Practice 
server folder - server.js
   - gamebazaar;
   - comments;
   - purchases.
