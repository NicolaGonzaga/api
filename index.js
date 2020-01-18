const express = require('express')
const app = express();
const numberExtension = require('./model/numberExtension');

app.get('/:numberRequired', (req, res) => {
    console.log(req)
    const params = req.params;
    const extension = new numberExtension(params.numberRequired);
    extension.run();
  res.send( extension.run());
});

app.listen(8001, () => {
  console.log('Teste')
});