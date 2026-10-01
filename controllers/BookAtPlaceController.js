const BookAtPlace = require('../models/BookAtPlace');

// Create Book Availability
const createBookAtPlace = async (req, res) => {
    try {
        const { book, pinCode, isAvailable } = req.body;

        const bookAtPlace = await BookAtPlace.create({
            book,
            pinCode,
            isAvailable
        });

        res.status(201).json({
            message: "Book availability added successfully",
            bookAtPlace
        });

    } catch (error) {
        res.status(500).json({
            message: "Error adding book availability",
            error: error.message
        });
    }
};


// Get All Book Availability
const getBookAtPlace = async (req, res) => {
    try {
        const bookAtPlace = await BookAtPlace
            .find()
            .populate('book');

        res.status(200).json({
            message: "Book availability fetched successfully",
            bookAtPlace
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching book availability",
            error: error.message
        });
    }
};


// Get Single Book Availability
const getBookAtPlaceById = async (req, res) => {
    try {
        const { id } = req.params;

        const bookAtPlace = await BookAtPlace
            .findById(id)
            .populate('book');

        if (!bookAtPlace) {
            return res.status(404).json({
                message: "Book availability not found"
            });
        }

        res.status(200).json({
            message: "Book availability fetched successfully",
            bookAtPlace
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching book availability",
            error: error.message
        });
    }
};


// Update Book Availability
const updateBookAtPlace = async (req, res) => {
    try {
        const { id } = req.params;

        const { book, pinCode, isAvailable } = req.body;

        const bookAtPlace = await BookAtPlace.findByIdAndUpdate(
            id,
            {
                book,
                pinCode,
                isAvailable
            },
            {
                new: true
            }
        ).populate('book');

        if (!bookAtPlace) {
            return res.status(404).json({
                message: "Book availability not found"
            });
        }

        res.status(200).json({
            message: "Book availability updated successfully",
            bookAtPlace
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating book availability",
            error: error.message
        });
    }
};


// Delete Book Availability
const deleteBookAtPlace = async (req, res) => {
    try {
        const { id } = req.params;

        const bookAtPlace = await BookAtPlace.findByIdAndDelete(id);

        if (!bookAtPlace) {
            return res.status(404).json({
                message: "Book availability not found"
            });
        }

        res.status(200).json({
            message: "Book availability deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting book availability",
            error: error.message
        });
    }
};


module.exports = {
    createBookAtPlace,
    getBookAtPlace,
    getBookAtPlaceById,
    updateBookAtPlace,
    deleteBookAtPlace
};