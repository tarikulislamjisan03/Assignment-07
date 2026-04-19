import React, { useContext } from 'react';
import { FriendsContext } from '../FriendsProvider';

const Banner = () => {
  const {friends}=useContext(FriendsContext)
    return (
        <div>
              <div className=" bg-gray-50 flex flex-col items-center px-6 pt-16 gap-10">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-400 text-sm max-w-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="mt-2 bg-teal-800 hover:bg-teal-900 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
          + Add a Friend
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-3xl">
        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-1">
          <span className="text-3xl font-semibold text-teal-800"> {friends.length} </span>
          <span className="text-sm text-gray-400">Total Friends</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-1">
          <span className="text-3xl font-semibold text-teal-800">3</span>
          <span className="text-sm text-gray-400">On Track</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-1">
          <span className="text-3xl font-semibold text-teal-800">6</span>
          <span className="text-sm text-gray-400">Need Attention</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-1">
          <span className="text-3xl font-semibold text-teal-800">12</span>
          <span className="text-sm text-gray-400">Interactions This Month</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;