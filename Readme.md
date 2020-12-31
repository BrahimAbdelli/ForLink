Go to forlink-backend and run "npm run start:dev"
Go to forlink-frontend and run "ng serve"

use postman to test the APIs, for example :
-------------------------------------
Create Task :

POST
localhost:3000/tasks

{"title":"test",
"description":"testt"}
-------------------------------------
Get All Tasks:

GET
localhost:3000/tasks
-------------------------------------
Delete Task :

DELETE
localhost:3000/tasks/2
-------------------------------------
Update Task :

PUT
localhost:3000/tasks/

{"title":"test",
"description":"testttt"}
-------------------------------------
Get Task by Id:

GET
localhost:3000/tasks



for the front part, use the url :
http://localhost:4200/tasks

you can use manipulate the CRUD operations from there.