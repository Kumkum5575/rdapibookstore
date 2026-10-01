const express = require('express');

const router = express.Router();

const {
    createBookAtPlace,
    getBookAtPlace,
    getBookAtPlaceById,
    updateBookAtPlace,
    deleteBookAtPlace
} = require('./controllers/bookAtPlaceController');


// Create
router.post('/', createBookAtPlace);

// Get All
router.get('/', getBookAtPlace);

// Get By ID
router.get('/:id', getBookAtPlaceById);

// Update
router.put('/:id', updateBookAtPlace);

// Delete
router.delete('/:id', deleteBookAtPlace);


module.exports = router;