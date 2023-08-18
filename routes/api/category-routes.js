const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
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

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
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

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
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
