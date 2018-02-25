

# InnovifyTest
install npm
install mongodb
make sure your mongodb is running on mongodb://127.0.0.1:27017
or you can change it in config/db.js
1)npm install //it will install all the dependecies
2)npm start //it will start server
secret key = supersecretbulletproofkey


HTTP Method 	URI	                    Description                      Authorization                        
GET	         /users/:id/getSingle       Get user info by id              jwt token
PUT	         /users/:id/update	        update token                     jwt token
DELETE	     /users/:id/delete	        update token                     jwt token
GET	         /users/search?firstName=""	user can search with firstname   secret key
POST	     /users/create	            Create a new user                secret key
POST	     /auth/     	            Create a new token               secret key
DELETE	     /auth/:token    	        Remove token                     jwt token


