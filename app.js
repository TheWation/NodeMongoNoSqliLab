const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Replace these variables with your actual MongoDB connection details
const mongoUser = 'root';
const mongoPassword = '';
const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@localhost:27017/`;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form for login at the root URL
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Login Form</h1>
        <form method="post" action="/login">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required><br>

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required><br>

          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db('users');
    const usersCollection = database.collection('users');

    const user = await usersCollection.findOne({ "username": username, "password": password });

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(403).json({ message: 'Unauthorized - Invalid username or password' });
    }

    client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});