const express = require('express');
const router = express.Router();

const Vehicle = require('../models/api');

router.get('/', async (req, res) => {
  try {
    const sub = await Vehicle.find();
    res.json(sub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create
router.post('/', async (req, res) => {
  const car = new Vehicle({
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    year: req.body.year,
    powerSupply: req.body.powerSupply,
  });

  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update
router.get('/:id', getCar, (req, res) => {
  res.json(res.car);
});

router.put('/:id', getCar, async (req, res) => {
  if (req.body.manufacturer != null) {
    res.car.manufacturer = req.body.manufacturer;
  }
  if (req.body.model != null) {
    res.car.model = req.body.model;
  }
  if (req.body.year != null) {
    res.car.year = req.body.year;
  }
  if (req.body.powerSupply != null) {
    res.car.powerSupply = req.body.powerSupply;
  }

  try {
    const carUpdate = await res.car.save();
    res.status(201).json(carUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete
router.delete('/:id', getCar, async (req, res) => {
  try {
    await res.car.remove();
    res.json({ message: 'vehicle deleted' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Middleware per la ricerca dell' utente secondo id
async function getCar(req, res, next) {
  let car;
  try {
    car = await Vehicle.findById(req.params.id);
    if (!car) res.status(404).json({ message: 'Vehicle not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.car = car;
  next();
}

module.exports = router;
