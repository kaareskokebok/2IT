# MWE mysql og nodejs

## Bash commands
```bash
npm init -y
npm i express mysql2
```

## index.js
```js
// index.js

import express from "express";
import mysql2 from "mysql2";

const app = express();
const port = 3000;

// 1. Create the MySQL connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',       // or another MySQL user if you prefer
  password: 'root',       // put your MySQL password here
  database: 'bibliotek'
});

// 2. Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// 3. Define a route to display the boker data
app.get('/', (req, res) => {
  // Query the boker table
  db.query('SELECT * FROM boker', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Database error');
      return;
    }

    // Build a simple HTML table from the results
    let html = '<h1>Books in bibliotek</h1>';
    html += '<table border="1" cellpadding="5" cellspacing="0">';
    html += '<tr><th>bok_id</th><th>tittel</th><th>forfatter</th><th>utgivelsesaar</th></tr>';

    results.forEach(row => {
      html += `<tr>
        <td>${row.bok_id}</td>
        <td>${row.tittel}</td>
        <td>${row.forfatter}</td>
        <td>${row.utgivelsesaar}</td>
      </tr>`;
    });

    html += '</table>';

    // Send the HTML response
    res.send(html);
  });
});

// 4. Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
