import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center space-x-8">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
            {userData.profilePicture ? (
              <img 
                src={userData.profilePicture} 
                alt="Profile" 
                className="w-full h-full rounded-full"
              />
            ) : (
              <span className="text-4xl text-gray-600">👤</span>
            )}
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900">Current Streak</h2>
            <div className="text-4xl font-bold text-blue-600">
              {userData.streak}
            </div>
            <div className="mt-2 h-2 bg-blue-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${(userData.streak / 30) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-900">Tests Attempted</h2>
            <div className="text-4xl font-bold text-green-600">
              {userData.testsAttempted}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test History</h2>
          <div className="space-y-4">
            {userData.testHistory.map((test) => (
              <div
                key={test.id}
                className="bg-gray-50 p-4 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{test.subject}</h3>
                  <p className="text-gray-600">{test.date}</p>
                </div>
                <div className="text-2xl font-bold text-indigo-600">
                  {test.score}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
