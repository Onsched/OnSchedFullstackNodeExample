OnSchedFullstackNodeExample
-----

Example fullstack Node application using the OnSched API without user Authentication (using an AccessToken)

## Development Setup

### Option 1: With Docker
Install Docker Desktop on your system [https://www.docker.com/get-started](https://www.docker.com/get-started)

#### Clone This Repo
With ssh keys configured for GitHub.

```bash 
$ git clone git@github.com:Onsched/OnSchedFullstackNodeExample.git 
```

Otherwise:
```bash
$ git clone https://github.com/Onsched/OnSchedFullstackNodeExample.git
```

#### Move into the project directory
```bash
$ cd OnSchedFullstackNodeExample
```

#### Add a File for Storing Your Development Keys
Create a file config/dev.js and copy the following code into it.  
This will add development keys and configuration for the project.  
This file should never be committed because it will contain your,
sandbox credentials.

```js
// DO NOT COMMIT THIS FILE
// development key values and configuration

module.exports = {
  onschedClientID:     'DemoUser',
  onschedClientSecret: 'DemoUser',
  scope:               'OnSchedApi',
                  
  onschedIdentityURL:  'https://sandbox-identity.onsched.com',
  onschedApiURL:       'https://sandbox-api.onsched.com',
                  
  cookieKey: '<insert_random_string_here/>',
                  
  isDevelopment: true
}

```

#### Install the Node Modules for the Express App Using Yarn
```bash
$ yarn install
$ cd client && yarn install
$ cd ..
```

#### Run the Docker Compose Environment
```bash
$ docker-compose up
```

Open a browser to [http://localhost:3000/](http://localhost:3000)

**NOTE:* The docker-compose image used during development will be built 
in such a way that it will link to your local files, so any changes 
you make while coding should be immediately reflected in the running 
web server.  Of course, the image will need to be rebuilt if you make
changes to your node packages, the Dockerfile or the docker-compose.yml
file.  You can rebuild by stopping the container and issuing 
the --build option to the docker-compose command.

```bash
$ docker-compose up --build
```

#### To Stop the Web Server/Container
Type Ctrl-C in the terminal running the process or open a second 
terminal session in the project folder and run

```bash
$ docker-compose down
```

### Option 2: Without Docker
Requirements:
- Homebrew (Mac)
- NVM
- Node
- Yarn

Instructions assume you are using a Mac for development. 
Similar packages exist for Windows.

#### Homebrew (Mac only)
The primary package manager for open source applications is 
Homebrew [https://brew.sh](https://brew.sh).  If not installed on you system, 
please install it.

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install NVM
NVM (https://github.com/creationix/nvm) is a Node Version 
Manager, which is useful for having various versions of 
Node.js in different projects.  A similar project is 
available on Windows, but requires different installation 
instructions.  See NVM-Windows 
[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows) if interested

```bash
$ brew install nvm
```

#### Install Node
We will install Node using the previously installed NVM manager.

```bash
$ nvm install --lts
```

#### Install Yarn 
Instructions and resources can be found at [https://yarnpkg.com](https://yarnpkg.com)

```bash
$ brew install yarn --ignore-dependencies
```

#### Clone This Repo
With ssh keys configured for GitHub.

```bash 
$ git clone git@github.com:Onsched/OnSchedFullstackNodeExample.git 
```

Otherwise:
```bash
$ git clone https://github.com/Onsched/OnSchedFullstackNodeExample.git
```

#### Move into the project directory
```bash
$ cd OnSchedFullstackNodeExample
```

#### Add a File for Storing Your Development Keys
Create a file config/dev.js and copy the following code into it.  
This will add development keys and configuration for the project. 
This file should never be committed because it will contain your,
sandbox credentials.

```js
// DO NOT COMMIT THIS FILE
// development key values and configuration

module.exports = {
  onschedClientID:     'DemoUser',
  onschedClientSecret: 'DemoUser',
  scope:               'OnSchedApi',
                  
  onschedIdentityURL:  'https://sandbox-identity.onsched.com',
  onschedApiURL:       'https://sandbox-api.onsched.com',
                  
  cookieKey: '<insert_random_string_here/>',
                  
  isDevelopment: true
}

```

#### Install the Node Modules for the Express App Using Yarn
```bash
$ yarn install
$ cd client && yarn install
$ cd ..
```

#### Start the Server
The express server runs on port 5000

```bash
$ yarn run server
```

#### Start the Front End Client
In a separate terminal window start the React Client on port 3000

```bash
$ yarn run client
```

If you want to run both the server and the client in the same 
terminal window you can run both with 

```bash 
$ yarn run dev
```

Open a browser to [http://localhost:3000/](http://localhost:3000)

#### Troubleshooting problems with Node or Yarn versions
If you run into problems with the Node and Yarn versions during a 
deployment build, (ie your build pipeline times out or fails
to complete) you may need to add an "engines" section to the 
package.json file.
  
```json
"engines": {
  "node": ">=10.16.0",
  "yarn": ">=1.17.3"
},
```

Check the specific versions being used by your pipeline and container.
This was a problem in Azure at one point, although currently it 
seems to have been resolved. Be aware, that if you implement this, 
you may need to remove the section for local development.
