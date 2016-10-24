import express from 'express';

const port = process.env.PORT || 7000;
const app = express();

app.use(express.static(process.cwd() + '/public'));

app.listen(port, function (err) {
  if (err) throw err;

  console.log(`Server running at http://127.0.0.1:${port}/`);
});
