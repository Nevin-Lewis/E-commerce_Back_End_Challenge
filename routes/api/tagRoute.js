const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tagData =  await Tag.findAll({
      include: [{model: Product}]
    } 
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Product found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
try {
  const tagData = await Tag.create({
        tag_name: req.body.tag_name,
  });
  res.status(200).json(tagData);
} catch (err) {
res.status(400).json(err)
}
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
  
    });
    if(!Tag){
      res.status(404).json({message: 'No Tag found with that id!'});
      return;
    }
    res.status(200).json(tagData)
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json({ message: "Tag deleted"});
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
