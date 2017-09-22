// module.exports = {
    // createItem: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const { name, price } = req.body

    //     db.create_product([name, price])
    //     .then( () => res.status(200).send() )
    //     .catch( () => res.status(500).send() );
    // },

    // selectItem: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const { params } = req;

    //     db.read_product([params.id])
    //     .then( (product) => res.status(200).send(product) )
    //     .catch( () => res.status(500).send() );
    // }

    // editItem: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const { params, query } = req;

    //     db.update_product([ params.id, query.desc ])
    //     .then( () => res.status(200).send() )
    //     .catch( () => res.status(500).send() );
    // },

    // deleteItem: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const { params } = req;

    //     db.delete_product([params.id])
    //     .then( () => res.status(200).send() )
    //     .catch( () => res.status(500).send() );
    // }
// }