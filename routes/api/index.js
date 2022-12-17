const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoute = require('./tag-routes');

router.use('/tags', tagRoute);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
