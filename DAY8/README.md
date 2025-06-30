======= MVC ========

Benefits of MVC in nodejs:-

Separation of concerns -> easier to maintain and debug
Reusable -> components
Scalability -> Ideal for the large  application

M -> model -> manages data and business logic
V -> view -> manages UI
C -> Handle user input and update model and view

my-app/
-> models -> user.js (mongoose /mongodb connection)
-> view -> user.ejs (HTML /EJS -> HTML +JS/ )
-> controller -> userController.js (logic handle)
-> routes -> userRoutes.js   (define endpoints)
-> index.js -> entry point
EJS -> 

 model folder
2. require mongoose
3. schema creation
4. model creation 

view folder 
1. template / ejs 
   tags ejs 

controller folder 
1. model require
2. logic 

routes folder
router.get("/api/users",userController.getUser)
router.POST("/api/users",userController.saveUser)
router.get("/api/users/:id",userController.getDataById)

index.js :-
require express mongoose

connect :- db and app connect

ejs -> set 

listen on port


postman -> routes  -> userController -> model -> view page 
