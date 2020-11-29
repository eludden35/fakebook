const Store = require("../models/store.model");

module.exports.findAllItems = (req,res) => {
    Store.find()
        .then(allItems => res.json({items: allItems}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.findOneItem = (req,res) => {
    Store.findOne({_id: req.params._id})
        .then(oneItem => res.json({item: oneItem}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createItem = (req,res) => {
    Store.create(req.body)
        .then(newItem => res.json({item: newItem}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.deleteItem = (req,res) => {
    Store.remove({_id: req.params._id})
        .then(remStore => res.json({message: "Your item is gone fooooorever!!"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}
module.exports.addLike = (req,res) => {
    Store.updateOne({_id: req.params._id}), {
        $set: {
            liked: req.body.liked
        }
    }
}
module.exports.updateStore = (req,res) => {
    Store.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skillOne: req.body.skillOne,
            skillTwo: req.body.skillTwo,
            skillThree: req.body.skillThree
        }
    }, {runValidators: true})
        .then(allStore => res.json({stores: allStore}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}