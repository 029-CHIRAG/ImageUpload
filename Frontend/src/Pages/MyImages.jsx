import React from "react";

const myUploadedImages = [
  // Replace these with your actual image URLs
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/310x200",
  "https://via.placeholder.com/320x200",
  "https://via.placeholder.com/330x200",
];

const MyImages = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Uploaded Images
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {myUploadedImages.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            You haven’t uploaded any images yet.
          </p>
        ) : (
          myUploadedImages.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={url}
                alt={`My Upload ${index}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">Uploaded #{index + 1}</span>
                <button className="text-red-500 text-sm hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyImages;
