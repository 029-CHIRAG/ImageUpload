const express=require('express');
const router=express.Router();
const verifyJwt=require('../Middleware/verifyJwt.js');
const upload=require('../Middleware/multer.js');
const {uploadFile,deleteFile,getAllImages}=require('../Controllers/Post/Post.js');

router.post('/upload',verifyJwt,upload.single("Image"),uploadFile);
router.delete('/delete',verifyJwt,deleteFile);
router.get('/getAllImages',getAllImages);


module.exports=router;