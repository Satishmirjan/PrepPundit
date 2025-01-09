// import React, { useEffect, useState } from 'react';

// const ProfilePage = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/user')
//       .then(res => res.json())
//       .then(data => setUserData(data));
//   }, []);

//   if (!userData) return <div>Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
//         <div className="flex items-center space-x-8">
//           <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
//             {userData.profilePicture ? (
//               <img 
//                 src={userData.profilePicture} 
//                 alt="Profile" 
//                 className="w-full h-full rounded-full"
//               />
//             ) : (
//               <span className="text-4xl text-gray-600">👤</span>
//             )}
//           </div>
          
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
//             <p className="text-gray-600">{userData.email}</p>
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-blue-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold text-blue-900">Current Streak</h2>
//             <div className="text-4xl font-bold text-blue-600">
//               {userData.streak}
//             </div>
//             <div className="mt-2 h-2 bg-blue-200 rounded-full">
//               <div
//                 className="h-full bg-blue-600 rounded-full transition-all duration-500"
//                 style={{ width: `${(userData.streak / 30) * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           <div className="bg-green-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold text-green-900">Tests Attempted</h2>
//             <div className="text-4xl font-bold text-green-600">
//               {userData.testsAttempted}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Test History</h2>
//           <div className="space-y-4">
//             {userData.testHistory.map((test) => (
//               <div
//                 key={test.id}
//                 className="bg-gray-50 p-4 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{test.subject}</h3>
//                   <p className="text-gray-600">{test.date}</p>
//                 </div>
//                 <div className="text-2xl font-bold text-indigo-600">
//                   {test.score}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { 
  Trophy, 
  Target, 
  Brain, 
  AlarmCheckIcon, 
  Star, 
  BookOpen,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AchievementCard = ({ icon: Icon, title, description, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-indigo-100 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        {value && <p className="text-2xl font-bold text-indigo-600 mt-2">{value}</p>}
      </div>
    </div>
  </div>
);

const SubjectCard = ({ subject, score, progress, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-gray-900">{subject}</h3>
        <p className="text-3xl font-bold mt-2" style={{ color }}>
          {score}%
        </p>
      </div>
      <div className="w-24 h-24">
        <ResponsiveContainer>
          <LineChart data={progress}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="mt-4 bg-gray-200 rounded-full h-2">
      <div 
        className="h-2 rounded-full transition-all duration-500"
        style={{ width: `${score}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    // Simulated user data - replace with actual API call
    setUserData({
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: null,
      streak: 15,
      testsAttempted: 48,
      bestScore: 98,
      favoriteSubject: "Data Structures",
      totalTestsCompleted: 156,
      achievements: {
        longestStreak: 21,
        perfectScores: 5,
        quickLearner: 12, // completed tests under time
        totalBadges: 8
      },
      subjectsProgress: {
        "Data Structures": { score: 92, progress: generateProgress() },
        "Operating Systems": { score: 88, progress: generateProgress() },
        "OOP": { score: 85, progress: generateProgress() },
        "Computer Networks": { score: 78, progress: generateProgress() },
        "System Design": { score: 82, progress: generateProgress() },
        "AI": { score: 75, progress: generateProgress() }
      }
    });

    setPerformanceData(generatePerformanceData());
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-6xl text-white">
                {userData.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600 mt-2">{userData.email}</p>
              <div className="flex items-center mt-4 space-x-4">
                {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  <Fire className="w-4 h-4 mr-1" />
                  {userData.streak} Day Streak
                </span> */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <Target className="w-4 h-4 mr-1" />
                  {userData.testsAttempted} Tests
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Trophy,
              title: "Best Score",
              description: "Highest test score achieved",
              value: `${userData.bestScore}%`
            },
            {
              icon: AlarmCheckIcon,
              title: "Current Streak",
              description: "Consecutive days active",
              value: userData.streak
            },
            {
              icon: Star,
              title: "Favorite Subject",
              description: "Most practiced topic",
              value: userData.favoriteSubject
            },
            {
              icon: Target,
              title: "Total Tests",
              description: "Tests completed",
              value: userData.totalTestsCompleted
            }
          ].map((stat, index) => (
            <AchievementCard key={index} {...stat} />
          ))}
        </div>

        {/* Performance Trend */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subjects Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(userData.subjectsProgress).map(([subject, data], index) => (
            <SubjectCard
              key={subject}
              subject={subject}
              score={data.score}
              progress={data.progress}
              color={getSubjectColor(index)}
            />
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "Longest Streak",
                description: "Longest daily activity streak",
                value: `${userData.achievements.longestStreak} Days`
              },
              {
                icon: Trophy,
                title: "Perfect Scores",
                description: "100% scores achieved",
                value: userData.achievements.perfectScores
              },
              {
                icon: Clock,
                title: "Quick Learner",
                description: "Tests completed under time",
                value: userData.achievements.quickLearner
              },
              {
                icon: Award,
                title: "Total Badges",
                description: "Badges earned",
                value: userData.achievements.totalBadges
              }
            ].map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function generateProgress() {
  return Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    value: 50 + Math.random() * 50
  }));
}

function generatePerformanceData() {
  return Array.from({ length: 10 }, (_, i) => ({
    date: `Day ${i + 1}`,
    score: Math.floor(70 + Math.random() * 30)
  }));
}

function getSubjectColor(index) {
  const colors = [
    '#4F46E5', // indigo
    '#059669', // emerald
    '#DC2626', // red
    '#2563EB', // blue
    '#7C3AED', // violet
    '#EA580C'  // orange
  ];
  return colors[index % colors.length];
}

export default ProfilePage;