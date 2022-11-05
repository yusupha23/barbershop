const customer = require('..//utilities/customer');

const createCustomer = async (req, res) => {
    const content = req.body;

    console.log(content);
    try{
        const customer = { id: 123};
        return res.status(201).json({ data: customer});
    } catch (error) {
        console.log(error);
        return 
        res.status(500).status.end();
    }
    };
 

    module.exports = {
        createCustomer,
    };