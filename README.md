

https://github.com/saquelain/chatterUp/assets/54945131/9792c645-a315-4706-887b-6022a2fccafd

## :dart: Overview ##

<p>This real-time chat application is built using Node.js and utilizes MongoDB with Mongoose schemas for data storage. It enables users to engage in real-time conversations, share locations, and create/join specific rooms for discussions.</p>

## :star2: Features ##

<ul>
  <li><strong>Real-Time Communication:</strong> Utilizes WebSockets to facilitate instant messaging among users.</li>
  <li><strong>MongoDB & Mongoose:</strong> Stores user information, messages, and room data using MongoDB and Mongoose schema.</li>
  <li><strong>Typing Animation:</strong> Indicates when a user starts typing within the chat.</li>
  <li><strong>User Presence:</strong> Displays a list of real-time users in the sidebar.</li>
  <li><strong>Location Sharing:</strong> Allows users to share their current location with others.</li>
  <li><strong>Room Joining:</strong> Enables users to join specific rooms for conversations.</li>
</ul>

## :rocket: Technologies Used ##

<div align="center">
  <a href="https://nodejs.org">
    <img width="50" title="NodeJs" alt="NodeJS Logo" src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png">
  </a> &#xa0; &#xa0;
  
  <a href="#">
    <img width="50" title="Javascript" alt="Javascript Logo" src="https://banner2.cleanpng.com/20180422/hrq/kisspng-javascript-web-development-logo-script-clipart-5adc4c1a932f97.7568863815243868426029.jpg">
  </a> &#xa0; &#xa0;
  
  <a href="https://www.mongodb.com/">
    <img width="50" title="MongdoDB" alt="Mongo Logo" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png">
  </a> &#xa0; &#xa0;
  
  <a href="https://socket.io/">
    <img width="50" title="Socket.io" alt="Socket Logo" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/socketio_logo_icon_168806.png">
  </a> &#xa0; &#xa0;
</div>

## :heavy_check_mark: Requirements ##

Before starting :checkered_flag:, make sure you have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your system. ([npm](https://www.npmjs.com/) recommended).

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/saquelain/chatterUp.git

# Access
$ cd chatterUp

# Install dependencies
$ npm install

# Run the project
$ node index.js

# The server will initialize in the <http://localhost:3000>
```
## :open_file_folder: Folder Structure ##
```bash
  .
  ├── public
  └── public
      ├── app
      │   ├── core
      │   ├── data
      │   ├── layout
      │   ├── module
      │   └── shared
      └── styles
      
  ├── public
  │       ├ css
  │           ├ style.css
  │           ├ style.min.css
  │       ├ profile
  │             ├ <!--all profile images--!>
  │       ├ admin.jpg
  │       ├ chat.html
  │       ├ chat.js
  │       ├ index.html
  │       ├ notification.mp3
  │
  │── .env
  │── .gitignore
  │── README.md
  │── db.config.js
  │── index.js
  │── messages.schema.js
  │── package.lock.json
  │── package.json
  └── user.schema.js
```
&#xa0;

<a href="#top">Back to top</a>
