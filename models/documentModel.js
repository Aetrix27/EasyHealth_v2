module.exports = mongoose => {
    const documentSchema = mongoose.Schema(
      {
         title : { type: String, required: true },
         content : { type: String, required: true },
         author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

      },
      { timestamps: { createdAt: "created_at" } }
      
    );

    const Document = mongoose.model("document", documentSchema);
    return Document;
  };