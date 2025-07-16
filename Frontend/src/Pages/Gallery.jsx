import React from "react";

const dummyImages = [
  // Replace these with actual image URLs later
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/310",
  "https://via.placeholder.com/320",
  "https://via.placeholder.com/330",
  "https://via.placeholder.com/340",
  "https://via.placeholder.com/350",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Image Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyImages.map((url, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={url}
              alt={`Uploaded ${index}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
