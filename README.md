## Welcome to the DOPER wiki!

Doper, the clone of Rover, allows you to book either a dog walk or a drop-in visit service provided by 10 verified walkers for all your pets! 

## Application Architecture

Doper is built a React frontend with a Flask backend, using PostgreSQL as a database. 

## Technologies used 

### Frontend 

* React
* Redux
* JavaScript
* HTML
* CSS

### Backend

* Flask
* Python
* PostgreSQL
* SQLAlchemy

## DOPER setup
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/kickylau/DOPER/
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (Option for M1 Users)

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/YinYang117/Travel-Bucket.git
   ```
4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app.

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/kickylau/DOPER/"> -->
<img height="50" height="50" alt="Screen Shot 2022-05-22 at 7 32 19 PM" src="https://user-images.githubusercontent.com/94200416/169720786-0de01d0c-a83e-40e0-826f-b399570ce3be.png">

  </a>

<h3 align="center">Doper </h3>

  <p align="center">
    A portfolio clone of Rover
    <br />
    <a href="https://doper-kk.herokuapp.com/"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Doper, a Rover clone, is a dog walking service website for users to reserver their dog walking service based on walkers, dogs and dates. Users are also able to create, edit, and delete any reservation towards the dog; able to create, delete any dog profiles for the dog; Make dog walking service more approachable and easier! 




**Key Features**
* Create new dog profiles and have user login with authorization
* Post, edit, and delete dog service reservations with specific dog and specific walker that login users own
* Post, edit, and delete dog profile that users own


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Users can signup and login to use Doper, and can login as a demo user to experience the website quickly.


<img width="1512" alt="Screen Shot 2022-05-22 at 7 23 07 PM" src="https://user-images.githubusercontent.com/94200416/169720511-c6e00f0c-90f8-49fe-8ff4-208ef21427c3.png">
<img width="1156" alt="Screen Shot 2022-05-22 at 7 30 44 PM" src="https://user-images.githubusercontent.com/94200416/169720727-36c8f705-e99c-4cfc-914f-6fac2a1f4f4d.png">




* Once logged in, the user is directed to the main walkers page, where logged-in users can view a list of verified walkers the user can book the reservation with.
<img width="1511" alt="Screen Shot 2022-05-22 at 7 25 15 PM" src="https://user-images.githubusercontent.com/94200416/169720545-8770338e-c40f-4468-9244-9ac8790c9239.png">




* Logged in users can create a new pet profile. It can also be edited and deleted.

<img width="1512" alt="Screen Shot 2022-05-22 at 7 26 22 PM" src="https://user-images.githubusercontent.com/94200416/169720620-b62b5272-788c-4b06-bf17-a0f7845e37b1.png">



* Logged in user can then create a new dog service reservation. It can also be edited and deleted.



<img width="1512" alt="Screen Shot 2022-05-22 at 7 27 35 PM" src="https://user-images.githubusercontent.com/94200416/169720618-c99de294-bb46-4b7f-a828-4f8c59f20d1c.png">


<p align="right">(<a href="#top">back to top</a>)</p>





<!-- CONTACT -->
## Contact


Kicky Liu - [GitHub](https://github.com/kickylau)




Project Repo Link: [https://github.com/kickylau/DOPER/](https://github.com/kickylau/DOPER/)

Project Link: [https://doper-kk.herokuapp.com/](https://doper-kk.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

