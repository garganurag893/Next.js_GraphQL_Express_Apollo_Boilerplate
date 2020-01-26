<p align="center">
<a href="https://twitter.com/AnuragG94634191"><img src="./Gifs/boilerplate.gif" title="Anurag Garg"  alt="Anurag Garg"></a>
</p>

<h1 align="center">Next.js GraphQL Express Apollo Boilerplate</h1>

<p align="center">Building server-side rendered react website is hard, next.js commits to solving this problem beautifully. In this post, we will make a next.js app with basic auth functionality using GraphQL.
</p>

<p align="center">
<img src="http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square" alt="build"/>
<img src="https://img.shields.io/github/issues/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate" alt="build"/>
<img src="https://img.shields.io/github/issues-pr/garganurag893/Next.js_GraphQL_Express_Apollo_Boilerplate" alt="build"/>
<img src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" alt="build"/>
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Step 1: Set up the Development Environment](#step-1-set-up-the-development-environment)
  - [Step 2: Set up Env](#step-2-set-up-env)
  - [Step 3: Install dependencies](#step-3-install-dependencies)
  - [Step 4: Running Locally](#step-4-running-locally)
  - [Step 5: Deployment](#step-5-deployment)
- [Features](#features)
  - [GraphQL](#graphql)
  - [Express](#express)
  - [Next.js](#nextjs)
  - [React Apollo](#react-apollo)
  - [Typescript](#typescript)
  - [JsonWebToken](#jsonwebtoken)
  - [TSLint](#tslint)
  - [Husky](#husky)
  - [Bluebird](#bluebird)
  - [Cors](#cors)
- [Contributing](#contributing)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
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

### Step 5: Deployment

To deploy with ZEIT Now through your terminal, you will need to install Now CLI, a frequently updated, and open-source, command-line interface.

You can get Now CLI from either npm or Yarn. Using npm, run the following command from your terminal:
```bash
$ npm i -g now
```

To verify that you have installed Now CLI, try running now help from your terminal.

With Now CLI installed, you can now login using the following command:
```bash
$ now login
```

Navigate to **Nextjs App** directory and run the below commands in order :

```bash
$ now
```

Once deployed, you will get a preview URL that is assigned on each deployment to share the latest changes under the same address.

---

## Features

### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

### Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Next.js

Next.js extends React to provide a powerful method for loading a page's initial data, no matter where it is coming from. With a single place to prepopulate page context, server-side rendering with Next.js seamlessly integrates with any existing data-fetching strategy.

### React Apollo

React Apollo allows you to fetch data from your GraphQL server and use it in building complex and reactive UIs using the React framework. React Apollo may be used in any context that React may be used. In the browser, in React Native, or in Node.js when you want to do server-side rendering.

### Typescript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.

### JsonWebToken

 JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.

### TSLint

 TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors

### Husky

Husky can prevent bad git commit, git push and more 🐶 woof!

### Bluebird

Bluebird is a fully featured promise library with focus on innovative features and performance.

### Cors
Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served

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

## Support

Reach out to me at one of the following places!

- Twitter at <a href="https://twitter.com/AnuragG94634191" target="_blank">https://twitter.com/AnuragG94634191</a>
- Medium at <a href="https://medium.com/@garganurag893" target="_blank">https://medium.com/@garganurag893</a>
- Instagram at <a href="https://www.instagram.com/the_only_anurag/" target="_blank">https://www.instagram.com/the_only_anurag/</a>
- Email at garganurag893@gmail.com

---

## Donations

It will be truely helpful if you donate me.

[![Support via Paypal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png)](https://paypal.me/garganurag893?locale.x=en_GB)
<p>
<img src="https://www.komando.com/wp-content/uploads/2019/05/google-pay-badge.png" alt="Support via GooglePay" height="50"/>
</p>
<h5>+919468026011
</h5>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://twitter.com/AnuragG94634191" target="_blank">Anurag Garg</a>.
