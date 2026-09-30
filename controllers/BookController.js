const Book = require("../models/Book")
const cloudinary = require('cloudinary').v2


async function addBook(req, res) {

    try {

        cloudinary.config({
             cloud_name: "xfx09clt",
            api_key:"298355742958379",
            api_secret:"DVNNhFyzSrrAR4MAF8sLQMRxWIc"
           
        })

        if (!req.file) {
            return res.status(400).send({
                message: "Please select book image"
            })
        }

        const upload = await cloudinary.uploader.upload(req.file.path)

        req.body.bookImage = upload.secure_url

        let book = new Book(req.body)

        await book.save()

        res.status(200).send({
            message: "Data has been saved successfully"
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            message: "Something went wrong"
        })

    }
}


async function getBooks(req, res) {

    try {

        let searchBook = req.query.searchBook || ""

        let pageNo = Number(req.query.pageNo) || 1

        let booksPerPage = Number(req.query.booksPerPage) || 3


        let filter = {
            bookTitle: new RegExp(searchBook, "i")
        }


        let totalBooks = await Book.countDocuments(filter)


        let books = await Book.find(filter)
            .skip((pageNo - 1) * booksPerPage)
            .limit(booksPerPage)


        res.status(200).send({
            data: books,
            totalBooks: totalBooks
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            message: "Something went wrong"
        })

    }
}


async function deleteBooks(req, res) {

    try {

        let id = req.params.id

        await Book.deleteOne({
            _id: id
        })

        res.status(200).send({
            success: true
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            message: "Something went wrong"
        })

    }
}


async function getBookForEdit(req, res) {

    try {

        let id = req.params.id

        let book = await Book.findById(id)

        res.status(200).send({
            data: book
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            message: "Something went wrong"
        })

    }
}


async function getBookById(req, res) {

    try {

        let id = req.params.id

        let book = await Book.findById(id)

        if (!book) {

            return res.status(404).send({
                message: "Book not found"
            })

        }

        res.status(200).send({
            data: book
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            message: "Something went wrong"
        })

    }
}


async function editbook(req, res) {

    try {

        let id = req.params.id

        await Book.updateOne(
            { _id: id },
            req.body
        )

        console.log("Book updated successfully....")

        res.status(200).send({
            success: true
        })

    }
    catch (err) {

        console.log(err)

        res.status(400).send({
            success: false
        })

    }
}


module.exports = {
    addBook,
    getBooks,
    deleteBooks,
    getBookForEdit,
    getBookById,
    editbook
}