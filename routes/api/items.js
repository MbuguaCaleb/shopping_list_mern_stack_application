const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

//Item Model
//So that we can make eloquent queries
const Item = require("../../models/Item");

//create some Routes

// @Route GET api/items
//@desc GET All Items
//@access Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @Route POST api/items
//@desc CREATE AN ITEM
//@access Private
router.post("/", auth, (req, res) => {
  //creating a new object to post
  const newItem = new Item({
    name: req.body.name
  });

  //returns the saved object thus we can return it as JSON
  newItem.save().then(item => res.json(item));
});

// @Route DELETE api/items/:id
//@desc DELETE an  item
//@access Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err =>
      res.status(404).json({
        success: false,
        err
      })
    );
});

module.exports = router;
