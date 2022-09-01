const {Router}=require('express'),
      router=Router(),
      {getAllGenres}=require('../controllers/genres/GeneroAllControler')



router.get('/',getAllGenres);



module.exports=router;