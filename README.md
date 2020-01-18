<p align="center">
<a href="https://twitter.com/AnuragG94634191"><img src="./Gifs/boilerplate.gif" title="Anurag Garg"  alt="Anurag Garg"></a>
</p>

<h1 align="center">Next.js GraphQL Express Apollo Boilerplate</h1>

Building server-side rendered react website is hard, next.js commits to solving this problem beautifully. In this post, we will make a next.js app with basic auth functionality using GraphQL.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Github Issues](https://img.shields.io/github/issues/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate)](https://img.shields.io/github/issues/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate) [![Pending Pull-Requests](https://img.shields.io/github/issues-pr/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate)](https://img.shields.io/github/issues-pr/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Step 1: Set up the Development Environment](#step-1-set-up-the-development-environment)
  - [Step 2: Set up Env](#step-2-set-up-env)
  - [Step 3: Install dependencies](#step-3-install-dependencies)
  - [Step 4: Running Locally](#step-4-running-locally)
  - [Step 5: Running Locally](#step-5-running-locally)
- [Features](#features)
- [Tests](#tests)
- [Contributing](#contributing)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
- [FAQ](#faq)
- [Support](#support)
- [Donations](#donations)
- [License](#license)

---

## Installation

Clone this repo to your local machine using `https://github.com/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate`

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

**Install [Node.js and NPM](https://nodejs.org/en/download/)**

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

**Install yarn globally**

```bash
yarn global add yarn
```

> NOTE : If you work with a mac, we recommend to use homebrew for the installation.

**Install MongoDB**
Once Brew is installed, it is time to install MongoDB by issuing the following command on the Terminal:

```bash
brew install mongodb
```

### Step 2: Set up Env

Open .env file in a editor and add your configuration for database and other required fields.

```ts
NODE_ENV = development;
JWT_SECRET = "somesuperkey";
DB =
  "mongodb://localhost/nextjs_graphql_express_apollo_boilerplate_development";
PORT = 4020;
```

### Step 3: Install dependencies

Navigate to the server and nextjs app directories and run the below command:

```bash
$ yarn
```

### Step 4: Running Locally

Navigate to the **Express Server** directory and run the below command in your terminal :

```bash
$ yarn start
```

Now navigate to **Nextjs App** directory and run the below command in your terminal :

```bash
$ yarn dev
```

### Step 5: Running Locally

Navigate to **Nextjs App** directory and run the below commands in order :

```bash
$ yarn build
```

After a successful build, run command:

```bash
$ yarn start
```

---

## Features

- React Apollo

React Apollo allows you to fetch data from your GraphQL server and use it in building complex and reactive UIs using the React framework. React Apollo may be used in any context that React may be used. In the browser, in React Native, or in Node.js when you want to do server-side rendering.

## Tests

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate" target="_blank">`https://github.com/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate`</a>.

---

## FAQ

- **How do I do _specifically_ so and so?**
  - No problem! Just do this.

---

## Support

Reach out to me at one of the following places!

- Twitter at <a href="https://twitter.com/AnuragG94634191" target="_blank">https://twitter.com/AnuragG94634191</a>
- Medium at <a href="https://medium.com/@garganurag893" target="_blank">https://medium.com/@garganurag893</a>
- Instagram at <a href="https://www.instagram.com/the_only_anurag/" target="_blank">https://www.instagram.com/the_only_anurag/</a>
- Email at garganurag893@gmail.com

---

## Donations

It will be truely helpful if you donate me.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://paypal.me/garganurag893?locale.x=en_GB)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://twitter.com/AnuragG94634191" target="_blank">Anurag Garg</a>.
