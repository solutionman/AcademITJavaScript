
https://github.com/facebookincubator/create-react-app


first of all:
(sudo)
npm install -g create-react-app


then (regular user):

create-react-app reactsimpleapp

cd reactsimpleapp

npm start

http://localhost:3000/



***************************************************
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactsimpleapp
  npm start
***************************************************


npm run build    // build project for production

npm install react-bootstrap --save

npm install bootstrap --save


in index.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

in App.js

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

then some tags like:

<Navbar.Brand>
  <a href="#">React-Bootstrap</a>
</Navbar.Brand>



