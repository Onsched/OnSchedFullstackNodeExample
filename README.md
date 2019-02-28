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

##### Add a File for Storing Your Development Keys
Add development keys and configuration to config/dev.js.  
This file should never be committed because it will contain your,
sandbox credentials.

```js
// DO NOT COMMIT THIS FILE
// development key values and configuration

module.exports = {
  // your OnSched client credentials
  onschedClientID:     "DemoUser",  // Replace these with your OnSched 
  onschedClientSecret: "DemoUser",  // client credentials

  // OnSched OpenID Connect URL
  onschedIdentityURL: 'https://sandbox-identity.onsched.com',

  // OnSched API URL
  onschedApiURL: 'https://sandbox-api.onsched.com',

  isDevelopment: true
}

```

#### Run the Docker Compose Environment
```bash
$ docker-compose up
```

Open a browser to [http://localhost:5000/](http://localhost:5000)

#### To Stop the Webserver
Open a new terminal in the project folder and run

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
$ brew install yarn --without-node
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

#### Install the Node Modules for the Express App Using Yarn
```bash
$ cd OnSchedFullstackNodeExample
$ yarn install
```

##### Add a File for Storing Your Development Keys
Add development keys and configuration to config/dev.js.  
This file should never be committed because it will contain your,
sandbox credentials.

```js
// DO NOT COMMIT THIS FILE
// development key values and configuration

module.exports = {
  // your OnSched client credentials
  onschedClientID:     "DemoUser",  // Replace these with your OnSched 
  onschedClientSecret: "DemoUser",  // client credentials

  // OnSched OpenID Connect URL
  onschedIdentityURL: 'https://sandbox-identity.onsched.com',

  // OnSched API URL
  onschedApiURL: 'https://sandbox-api.onsched.com',

  isDevelopment: true
}

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

Open a browser to [http://localhost:5000/](http://localhost:5000)

