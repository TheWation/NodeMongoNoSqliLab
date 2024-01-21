# NoSQL Injection Vulnerability Example

This project is designed to demonstrate a common security vulnerability known as NoSQL Injection. NoSQL injection occurs when untrusted data is used to construct queries in NoSQL databases, leading to unauthorized access or manipulation of data.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TheWation/NodeMongoNoSqliLab
```

2. Navigate to the project directory:
```bash
cd NodeMongoNoSqliLab
```

3. Install dependencies:
```bash
npm install
```

4. Set up your MongoDB server and configure the connection details in app.js:
```javascript
// app.js
const mongoUser = 'root';
const mongoPassword = '';
const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@localhost:27017/`;
```

5. Start the application:
```bash
npm start
```

## Usage

1. Open your web browser and go to http://localhost:3000 to access the login form.
2. The application simulates a login system using a NoSQL database. Enter a valid username and password to see a successful login or attempt a NoSQL injection to simulate an unauthorized access.
3. Experiment with different inputs to understand the impact of NoSQL injection and how it can be prevented.


## Security Recommendations

- `Input Validation`: Always validate and sanitize user inputs before using them in queries.
- `Parameterized Queries`: Use parameterized queries or prepared statements to ensure that user inputs are treated as data, not executable code.
- `Least Privilege Principle`: Assign the least necessary privileges to database users to limit the potential damage in case of a successful attack.

Remember that understanding vulnerabilities is just one part of secure coding. Encourage students to adopt secure coding practices and always prioritize security throughout the development lifecycle.

## Disclaimer

This project is intended for educational purposes only. Ensure that you use it responsibly and only on systems that you have explicit permission to test.

## License

`NodeMongoNoSqliLab` is made with ♥  by [Wation](https://github.com/TheWation) and it's released under the `MIT` license.