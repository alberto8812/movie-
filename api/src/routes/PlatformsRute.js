const {Router}=require('express'),
      router=Router(),
    {getAllPlatforms}=require('../controllers/platforms/getAllPlatforms');

router.get('/',getAllPlatforms);

module.exports=router;