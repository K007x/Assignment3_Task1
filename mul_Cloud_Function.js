const functions = require('@google-cloud/functions-framework');

functions.http('mulFunction', (req, res) => {

  const Result = req.body.X * req.body.Y;

  const response = {
    "X": req.body.X,
    "Y": req.body.Y,
    "Result": Result
  };

  res.json(response);
});