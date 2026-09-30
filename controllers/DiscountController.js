
const Book = require('../models/Book')
const Discount=require('../models/Discount')

async function getBooks(req, res) {

    try {
        //select _id,bookTitle from Book => in my sql
        let books = await Book.find({},{_id:1,bookTitle:1})//in mongodb
        

        res.status(200).send({
            data: books
        })

    } catch (err) {

        console.log(err)

        res.status(400).send({
            message: 'something went wrong'
        })
    }
}
async function addDiscount(req, res) {

    try {
       
      
      let discount = new Discount(req.body)
      await discount.save()
      return res.status(200).send({message: 'Discount Added'})

    } catch (err) {

        console.log(err)

        res.status(400).send({
            message: 'something went wrong'
        })
    }
}
async function getDiscounts(req, res) {

    try {
       
      let discounts=await Discount.find({}).populate('book');
      console.log(discounts);
      return res.status(200).send({data:discounts})

    } catch (err) {

        console.log(err)

        res.status(400).send({
            message: 'something went wrong'
        })
    }
}
async function getDiscountForEdit(req,res){
     try {
       let id=req.params.id;
       let discount=await Discount.findOne({_id: id});
       let books= await Book.find({})
       console.log(discount)
     
      return res.status(200).send({data: discount,books: books})

    } catch (err) {

        console.log(err)

        res.status(400).send({
            message: 'something went wrong'
        })
    }

}
async function editDiscount(req,res){
     try {
       let id=req.params.id;
      await Discount.updateOne({_id:id},req.body)
      console.log("Data has been updated successfully")
      return res.status(200).send({message: 'Data Inserted successfully'})

    } catch (err) {

        console.log(err)

        res.status(400).send({
            message: 'something went wrong'
        })
    }

}

module.exports = {
    getBooks,
    addDiscount,
    getDiscounts,
    getDiscountForEdit,
    editDiscount
}

