# My guide on using Django on Docker

## STEP 1
1. Create a new file called Dockerfile in your project directory.<br>
The file dockerfile should have no extension.
Write the code as in my dockerfile
2. Create requirements.txt file<br>
Write the code as in my requirements.txt file
3. Create a file called docker-compose.yml in your project directory.<br>
The docker-compose.yml file describes the services that make your app. In this example those services are a web server and database. The compose file also describes which Docker images these services use, how they link together, any volumes they might need mounted inside the containers

## STEP 2

1. Change to the root of your project directory.
Create the Django project by running the docker-compose run command as follows.
  <br>sudo docker-compose run web django-admin startproject composeexample . <br>
  PS// ensure you have docker-compose installed