const router = require('express').Router();
const { FlowersController } = require('../controllers');

router.get("/flowers", FlowersController.index);
router.get("/flowers/all", FlowersController.get);
router.post("/flowers", FlowersController.add);

module.exports = router;