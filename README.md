# 🕵️ Request Header Parser Microservice 🕵️

A simple Node.js/Express microservice that fulfills the requirements for the freeCodeCamp "Request Header Parser Microservice" project.

[FCC Request Header Parser Project Site](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

---

## 🚀 Live Demo

A live version of this project can be viewed here: **[View Live Demo](https://your-live-app-url.glitch.me/)**

---

## 💡 API Usage & Example

This microservice has a single endpoint, `/api/whoami`, which returns a JSON object containing key information from the request header.

### Project Requirements
* [ ] A request to `/api/whoami` returns a JSON object.
* [ ] The JSON object contains the user's IP address in the `ipaddress` key.
* [ ] The JSON object contains the user's preferred language in the `language` key (from the `Accept-Language` header).
* [ ] The JSON object contains the user's software in the `software` key (from the `User-Agent` header).

### Example Response:

A `GET` request to `.../api/whoami` will return a JSON object similar to this:

```json
{
  "ipaddress": "127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
}
```

## 🛠️ Tech Stack

* **Node.js**: The JavaScript runtime environment.
* **Express**: The web framework used to create the API endpoint.
* **CORS**: Node.js middleware for enabling Cross-Origin Resource Sharing.

## 🧑‍💻 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repo:
    ```bash
    git clone https://github.com/gapn/request-header-parser-microservice.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd request-header-parser-microservice
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```

Your server will be running at http://localhost:3000.

## License
This project is licensed under the [MIT License](./LICENSE.txt).