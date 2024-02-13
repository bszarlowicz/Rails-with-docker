# Rails7/HTML Drag and Drop API/vanilla JavaScript

**About:**

The application allows users to create sentences from which random words are selected (the quantity depends on the sentence's length). Random words are extracted from the sentence, leaving gaps in their place, and then transferred to the bottom section as movable blocks. The user's task is to arrange the words in the correct gaps to form a valid sentence.

**Goal:**

This application was created to learn the drag and drop mechanism of HTML elements using HTML Drag and Drop API with vanilla JavaScript.

**Results:**

![8fpbt5](https://github.com/bszarlowicz/Rails7-DragAndDrop-Docker/assets/127704473/949fb46a-eb4e-464d-99bc-f14d4cfbb46f)


# Rails7/Bootstrap/Docker - container deploy

Rails 7 app with bootstrap and docker configuration (Windows):

Step by step instruction:

- Bootstrap connection:  https://jasonfleetwoodboldt.com/courses/rails-7-crash-course/
- In Dockerfile:
    1. add:
         ``` RUN apt-get update && \ apt-get install -y nodejs ```
- In config/environment/production.rb:
    1. change:
         ```config.force_ssl = true``` to ```config.force_ssl = false```
    3. change:
         ``` config.assets.compile = false ``` to  ```config.assets.compile = true ```
- In console:
    1. Image build:
         ``` docker build . -t <containerName> ```
    3. Start server frome image:
         ``` docker run -p <portNumber>:<portNumber> -e SECRET_KEY_BASE=<key> <containerName> ```

**Important!
Remember to connect to localhost via http not https**

Results:

- console after starting server on container:

  
![Zrzut ekranu 2024-01-08 000155](https://github.com/bszarlowicz/Rails-with-docker/assets/127704473/bd428dc4-d76e-4fa5-b2b8-6fde19382c2f)



- page:

  
![image](https://github.com/bszarlowicz/Rails7-with-docker/assets/127704473/5754d094-870d-47ee-b381-2f0cae8100fd)


  
    
