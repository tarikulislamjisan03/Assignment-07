import React, { useContext } from 'react';
import { FriendsContext } from '../FriendsProvider';
import { useParams } from 'react-router';
import { Archive, Bell, BellRing, Delete, MessageCircle, PhoneForwarded, VideoIcon } from 'lucide-react';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
    const {friends,addedtoTimeline}=useContext(FriendsContext)
    
    const {id}=useParams()
   const expectedfriend=friends.find(friend=>friend.id==id)
   if (!expectedfriend) {
        return <h1 className="text-center mt-10">Loading friend details...</h1>;
    }

    
    const handletype=(type)=>{
        console.log(type)
       const myData={
        name:expectedfriend.name,
        type:type,
        time:new Date().toLocaleString()

       }
       addedtoTimeline(myData)
       toast(` ${myData.type} with ${myData.name}`)
    }
   
    return (
        <div>
        <div className="min-h-screen bg-gray-50 p-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">

        {/* Left Column */}
        <div className="flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center gap-2 shadow-sm">
            <img
              src={expectedfriend.picture}
            />
            {/* status */}
            <p className="font-bold text-gray-900 text-lg"> {expectedfriend.name} </p>
            <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full">
              {expectedfriend.status}
            </span>
            {/* tags */}
            <div className="flex gap-2 flex-wrap justify-center">
  {expectedfriend.tags.map((tag, index) => (
    <span key={index} className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {tag}
    </span>
  ))}
</div>
            <p className="text-gray-400 text-sm italic text-center mt-1">
              {expectedfriend.bio}
            </p>
            <p className="text-gray-400 text-xs">Email: {expectedfriend.email} </p>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button className="w-full flex items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition-colors">
             
              <Bell> </Bell>
              Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition-colors">
             <Archive> </Archive>
              Archive
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-4 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <Delete> </Delete>
              Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex flex-col gap-4">

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-1">
              <span className="text-4xl font-semibold text-teal-800">18</span>
              <span className="text-sm text-gray-400">Days Since Contact</span>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-1">
              <span className="text-4xl font-semibold text-teal-800">14</span>
              <span className="text-sm text-gray-400">Goal (Days)</span>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-teal-800">Jul 15, 2025</span>
              <span className="text-sm text-gray-400">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900">Relationship Goal</p>
              <button className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Connect every <span className="font-bold">14 days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="font-semibold text-gray-900 mb-4">Quick Check-In</p>
            <div className="grid grid-cols-3 gap-3">
              <button onClick={()=>handletype('Call')} className="flex flex-col items-center gap-2 border border-gray-100 rounded-xl py-5 hover:bg-gray-50 transition-colors">
                <PhoneForwarded />
                <span  className="text-sm text-gray-700">Call</span>
              </button>
              <button onClick={()=>handletype('Text')} className="flex flex-col items-center gap-2 border border-gray-100 rounded-xl py-5 hover:bg-gray-50 transition-colors">
                
                <MessageCircle></MessageCircle>
                <span className="text-sm text-gray-700">Text</span>
              </button>
              <button onClick={()=>handletype('Video')} className="flex flex-col items-center gap-2 border border-gray-100 rounded-xl py-5 hover:bg-gray-50 transition-colors">
                <VideoIcon></VideoIcon>
                <span className="text-sm text-gray-700">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
        </div>
      
    );
};

export default FriendsDetails;