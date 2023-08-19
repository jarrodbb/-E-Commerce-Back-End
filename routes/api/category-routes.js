// Routes for Category

const router = require("express").Router();

// Import from models/index.js where associations are assigned
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Route to get all categories
// Includes associated Products
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a specific Category based on their 'id'.
// 'id' passed as a route parameter
// Includes associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res
        .status(404)
        .json({ message: "No category found with that id. Sorry!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Router to create a new category
// Body takes a Category Name
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Router to update a category by its 'id'
router.put("/:id", async (req, res) => {
  try {
    const updateStatus = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateStatus[0]) {
      res.status(404).json({ message: "No category with this id" });
    }
    res.status(200).json({ messgae: "category updated succesfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Router to delete a category by its 'id'
router.delete("/:id", async (req, res) => {
  try {
    const deleteStatus = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteStatus) {
      res.status(404).json({ message: "No category with this id" });
      return;
    }
    res.status(200).json({ message: "Deleted!!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
