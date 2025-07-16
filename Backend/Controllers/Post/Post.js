const { uploadOnCloudinary } = require("../../Utils/Cloudinary.js");
const Post = require("../../Models/Post.js");
const ApiError=require('../../Utils/ApiError.js')
const ApiResponse=require("../../Utils/ApiResponse.js")

const uploadFile = async (req, res) => {
  try {
    const localPath = req.file?.path;
    console.log(localPath)

    if (!localPath) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const result = await uploadOnCloudinary(localPath);
    if (!result) {
      return res.status(500).json({ success: false, message: "Cloudinary upload failed" });
    }

    const savedImage = await Post.create({
      Url: result.secure_url,
      CreatedBy: req.user,
      UploadedAt: Date.now(),
    });

    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      image: savedImage
    });

  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};




const deleteFile = async (req, res) => {
  try {
    const { PostId } = req.body;

    if (!PostId) {
      return res.status(400).json({ success: false, message: "Post ID is required" });
    }

    const post = await Post.findById(PostId);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    console.log(post.CreatedBy);
    console.log(req.user._id);
    if (post.CreatedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Not authorized to delete this post" });
    }

   
    await post.deleteOne();

    return res.status(200).json({ success: true, message: "Post deleted successfully" });

  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAllImages=async(req,res)=>{
    try {
      const posts=await Post.find().populate("CreatedBy","name email").sort({UploadedAt:-1});
      return res.status(200).json(new ApiResponse({
        posts:posts,
        message:"Images Fetched SuccessFully.",
      }))
    } catch (error) {
      throw new ApiError(400,"Can't fetch Data");
    }
}


module.exports = {
  uploadFile,
  deleteFile,
  getAllImages,
};