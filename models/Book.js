const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookTitle: {
        type: String
    },

    authorName: {
        type: String
    },

    imprint: {
        type: String
    },

    publicationYear: {
        type: String
    },

    productFrom: {
        type: String
    },

    publisher: {
        type: String
    },

    genre: {
        type: String
    },

    isbnNo: {
        type: String
    },

    bookCategory: {
        type: String
    },

    bookSubCategory: {
        type: String
    },

    edition: {
        type: String
    },

    language: {
        type: String
    },

    description: {
        type: String
    },

    shortDescription: {
        type: String
    },

    countryOfOrigin: {
        type: String
    },

    nameOfManufacturer: {
        type: String
    },

    addressOfManufacturer: {
        type: String
    },

    nameOfPackager: {
        type: String
    },

    addressOfPackager: {
        type: String
    },

    rating: {
        type: String
    },

    reviews: {
        type: String
    },

    originalPrice: {
        type: String
    },

    discount: {
        type: String
    },

    discountType: {
        type: String
    },

    finalPrice: {
        type: String
    },

    bookImage: {
        type: String
    }

}, { timestamps: true });


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;