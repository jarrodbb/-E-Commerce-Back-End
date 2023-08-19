// Routes for Tag

const router = require("express").Router();

// Import from models/index.js where associations are assigned
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Route to get all Tags
// Includes the Tags associated Product date
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "tagged_products" }],
    });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to find a single Tag by its 'id'
// Includes the Tag's associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "tagged_products" }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No Tag found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a Tag
// Body take the name of the Tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update a Tag by it's 'id'
// Update its name
router.put("/:id", async (req, res) => {
  try {
    const updateStatus = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateStatus[0]) {
      res.status(404).json({ message: "No tag with this id" });
    }
    res.status(200).json({ messgae: "tag updated succesfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to delete a Tag by its 'id'
router.delete("/:id", async (req, res) => {
  try {
    const deleteStatus = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteStatus) {
      res.status(404).json({ message: "No tag with this id" });
      return;
    }
    res.status(200).json({ message: "Deleted!!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
