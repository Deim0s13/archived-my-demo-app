const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(express.json());

//Connect to PostgreSQL database
const sequelize = new Sequelize('postgres://user:password@db:5432/mydemoapp', {
    dialect: 'postgres',
    logging: false
});

// Define a model
const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sync the database
sequelize.sync();

// API Routes
app.get('/items', async (req, res) => {
    const items = await Item.findAll();
    res.json(items);
});

app.post('/items', async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json(item);
});

app.delete('/items/:id', async (req, res) => {
    const id = req.params.id;
    await Item.destroy({ where: { id } });
    res.status(204).end();
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Backend is running on http://localhost:3000');
  });