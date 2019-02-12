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

#### Start the Server
The express server runs on port 5000

```bash
$ yarn run start
```

Open a browser to [http://localhost:5000/](http://localhost:5000)

