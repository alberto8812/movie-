const {Router}=require('express'),
      router=Router(),
      {getAllGeneros}=require('../controllers/GeneroAllControler');



router.get('/',getAllGeneros);



module.exports=router;