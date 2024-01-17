const apiController = {};
const Contact = require('../models/contact');


const contact = async(req, res) => {
    try{
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })

        await newContact.save();

        res.json(newContact);
    }catch(error){
        res.json({error: error.message})
    }
}

const contactData = async(req, res) => {
    try{
        const data = await Contact.find();
        res.json({data: data});
    }catch(error){
        res.json({error: error.message});
    }
}
const deleteContact = async(req, res) => {
     try{
        const id = req.query.id;
        const deleteContact = await Contact.findByIdAndDelete(id);
        if(deleteContact){
            res.json(deleteContact)
        }else{
            throw new Error('Id not found')
        }
     }catch(error){
        res.json({message: error.message});
     }
}



apiController.contact = contact;
apiController.contactData = contactData;
apiController.deleteContact = deleteContact;

module.exports = apiController;