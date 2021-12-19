import {Router} from 'express'
const router =Router()
router.get("/", (req, res) => {
  res.render('../views/index');
  });



  router.get("/about", (req, res) => {
    res.send("hola mundo2");
  });
  export default router;