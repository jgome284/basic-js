# Basic JavaScript

<br>
<p align="center">
  <a href="https://github.com/jgome284/basic-js">
    <img src="imgs/JavaScript-Banner.jpg" alt="Logo">
  </a>

  <h3 align="center">Foreword</h3>

  <p align="center">
    A Repo to practice JavaScript fundamentals in a sandbox environment.
    <br>
    <a href="https://github.com/jgome284/basic-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/jgome284/basic-js/issues">Request Feature</a>
  </p>
</p>

## Table of Contents
- [Basic JavaScript](#basic-javascript)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
  - [License](#license)

## About

This repository is a sandbox environment to practice JavaScript. It includes a [Development Container](./.devcontainer) (or Dev Container for short) built IAW the [dev containers specification](https://containers.dev/implementors/spec/). It runs on Debian Bookworm with Node.js, git for version control, and several extensions for Visual Studio Code.

<!-- PREREQUISITES -->
## Prerequisites

To start, you need to have Docker Engine and Docker Compose on your machine. You can either:

* Install Docker Desktop which includes both Docker Engine and Docker Compose
* Install Docker Engine and Docker Compose as standalone binaries

Additionally, this devcontainer is meant to work on Visual Studio Code. You should have it installed along with the [remote development pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) to enable the IDE's devcontainers functionality.

<!-- GETTING STARTED -->
## Getting started

Open Docker Desktop to run the Docker daemon, a background process that manages and coordinates Docker containers on your system. On VS Code, start the development container by running `Dev Containers: Rebuild and Reopen In Container` in the command palette. It can be accessed with the keyboard shortcut `ctrl + shift + P` on your keyboard. Doing so will start the build process for the devcontainer, and Visual Studio will establish a remote connection to it.

The [JavaScript folder](./js/) includes several scripts that can be run via node. For example:

```JavaScript
node js/rockPaperScissors.js
```

Alternatively, Some JS files are linked to a basic user interface that can be accessed via [html files](./html/).

## License

Distributed under the MIT License. See `LICENSE` for more information.
