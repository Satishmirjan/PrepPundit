import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onQuestionsFetched }) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUpload = async () => {
        if (!image) {
            setError('Please select an image before submitting.');
            return;
        }

        setError(null); // Clear any previous errors
        setLoading(true);

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            onQuestionsFetched(response.data.questions);
        } catch (err) {
            setError('Failed to upload the image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button
                onClick={handleUpload}
                className={`px-6 py-2 rounded-md font-medium text-white ${
                    loading
                        ? 'bg-blue-300 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={loading}
            >
                {loading ? 'Uploading...' : 'Generate'}
            </button>
        </div>
    );
};

export default ImageUpload;
