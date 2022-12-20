const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagsRoutes = require('./tagRoute');

router.use('/tags', tagsRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
