# my-web-apil2
 This is a genererated Web API wich runs on a Node.js server and uses MongoDB data.

 WARNING: Before proceeding to [Instalation](#Instalation) check the [config.js](config.js) file located in the root of the project.

 ## Table of Contents
 * [Instalation](#Instalation)
 * [Usage](#Usage)
	 * [Token](#Token)
	 * [Tasks](#Tasks)
	 * [Tasks2](#Tasks2)

 ## Instalation
 Install the modules
 ```
 npm install
 ```
 Start the server
 ```
 npm start
 ```

 ## Usage

 #### Token
 Authenticate using the following endpoint with credentials set in [config.js](config.js) file.
 ``` 
 POST /login 
 ```
 You will get a bearer token to use in the Authorization header for API requests.
 
 #### Tasks
 |HTTP Method|Path | Path Params | Query Params | Body Params |
 |:-------------:|-------------|:-------------:|:-------------:|:-----:|
 |GET| /api/tasks|None|None|None|
 |GET| /api/tasks/{id}|Id|None|None|
 |POST| /api/tasks|None|None|Collection Schema|
 |PUT| /api/tasks/{id}|Id|None|Collection Schema|
 |DELETE| /api/tasks/{id}|Id|None|None|
 #### Tasks2
 |HTTP Method|Path | Path Params | Query Params | Body Params |
 |:-------------:|-------------|:-------------:|:-------------:|:-----:|
 |GET| /api/tasks2|None|None|None|
 |GET| /api/tasks2/{id}|Id|None|None|
 |POST| /api/tasks2|None|None|Collection Schema|
 |PUT| /api/tasks2/{id}|Id|None|Collection Schema|
 |DELETE| /api/tasks2/{id}|Id|None|None|