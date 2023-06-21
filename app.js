const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
          }
          
          h1 {
            color: #333;
            margin-top: 150px;
            font-size: 48px;
            text-shadow: 2px 2px 4px #000000;
          }
        </style>
      </head>
      <body>
        <h1>Hello Everyone. How are you?</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
