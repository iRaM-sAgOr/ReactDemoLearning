##########################.....Element Contains In These Project....########################
There are two applications here.
1. Nev_overlay_route_axios: This application contains the nav bar, overlay nav bar, 
routing and api implementation with axios. 
Here we have implemented some optional elements as: video container as banner, image as banner, 
Quatation, Card view, footer, text view, form element, modal creation, table creation etc.

2. parent_to_child: 



########################....How to use one of these project in your local environment....#################
1. Create an environment in you local pc:
$ pip install virtualenv
Create:$ virtualenv env_name
Activate: $source env_name/bin/activate(windows don’t use source)
Deactivate: $deactivate
..........................................
Create : $python -m venv env_name
Activate: Go to the env_name/Scripts and write the command $activate
Deactivate: $deactivate
NB: It is not mendatory to use virtual environment.

2. Setup Node and NPM
A. For windows we need to just download the nodejs.exe and install it. Remind it to add the path variable of the 
nodejs in the system environment.

B. For linux we need to follow the following rules:
---sudo apt-get install curl
---curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
---nvm install v12.18.2
---npm install create-react-app
Use these command to install the node and npm at a time.
Thus setup for react application is done.

3. We need to create a directory for the application. and open the directory
with VSCode. In the terminal and create a new application:
$npx create-react-app app-name
$cd app-name
$npm start
Thus the new app will start in localhost.

4. We need to replace our code with the new application. For that we need
to copy all the files and replace the existing files.

5. Some extra works need to be done:
We need to install some libraries that we are using in our application.
But it is not yet installed in the node_module.So we need to do:
$npm install --save react-router-dom
$npm install axios
NB: we need to install the libraries after stoping the npm server. And to
clean the port:
$sudo fuser -k 3000/tcp