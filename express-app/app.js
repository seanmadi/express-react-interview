const fetch = require('node-fetch');
var express = require('express');
var app = express();
const port = 3000;

function arrayToObject(data, key) {
  return data.reduce((acc, item) => ({
    ...acc,
    [item[key]]: item,
  }), {});
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/devices', async function (req, res) {
  let product_code = req.query.product_code;

  let response = await fetch('https://api.fda.gov/device/recall.json?search=product_code:' + product_code + '&limit=20');
  let responseJson = await response.json();

  if (responseJson.error) {
    res.end(JSON.stringify({ error: responseJson.error.message }));
  } else {
    let devicesAsObjects = arrayToObject(responseJson.results, "res_event_number");

    res.end(JSON.stringify(devicesAsObjects));
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
