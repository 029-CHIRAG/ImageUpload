import React from "react";

const ImageCard = ({ imageUrl, index, showDelete = false, onDelete }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
      <img
        src={imageUrl}
        alt={`Image ${index}`}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">Image #{index + 1}</span>

        {showDelete && (
          <button
            onClick={() => onDelete && onDelete(index)}
            className="text-red-500 text-sm hover:underline"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
