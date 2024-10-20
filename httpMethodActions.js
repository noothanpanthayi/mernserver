const auto = require("./autoSchema");

const createAuto = async (req, res) => {
  const { make, model, year, price, type } = req.body;
  let createRes;

  try {
    if (Array.isArray(req.body)) {
      req.body.forEach(async (document) => {
        createRes = await auto.create(document);
      });
    } else {
      createRes = await auto.create({
        make,
        model,
        year,
        price,
        type,
      });
    }
    res.json(createRes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAutos = async (req, res) => {
  const autos = await auto.find({});
  res.status(200).json(autos);
};

module.exports = {
  createAuto,
  getAutos
};
