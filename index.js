const expres = require('express');
const app = expres();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`>_> running on port ${PORT}`);
});