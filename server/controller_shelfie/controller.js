let dummydata = ['ding a ling']

module.exports = {

    read: (req, res, next) => {
        const db = req.app.get("db");
        db.get_inventory().then(inventory =>
            res.status(200).send(inventory)
        )
        
    },

    create: (req, res, next) => {
        const db = req.app.get('db');
        const {name, price, img_url} = req.body;

        db.create_product([name, price, img_url])
        .then( () => res.send(200) )        
    },

    update: (req,res,) => {
        let newProduct = dummydata.map((val, i) => {
            if (i == req.params.id) {
                return req.body.newProduct
            } else {
                return val;
            }
        })
        dummydata = [...newProduct]
        res.status(200).send(dummydata)
    }

  
}