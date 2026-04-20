import { useContext, useState } from "react";
import { FriendsContext } from "../FriendsProvider";
import { MessageCircle, PhoneForwarded, VideoIcon } from "lucide-react";

const Timeline = () => {
    const {activities}=useContext(FriendsContext)
     
       if(activities.length==0){
        return  <div className=' shadow-lg  flex justify-center items-center h-[200px]  mt-10 mb-10 '> 

    <h1 className=' text-3xl font-bold'>No Data found</h1>
 </div>
       }


       const [filter,setfilter]=useState('All')

       const displayFilterActivites=activities.filter(activity=>{
        if(filter==='All'){
            return true
        }
        else{
            return activity.type===filter
        }
       })



       return (
           <div className='lg:w-[1400px] lg:mx-auto'>
            <h1 className='text-2xl font-bold mt-5 ml:0 ml-2'>Timeline: </h1>

            {/* ৩. ফিল্টার ড্রপডাউন */}
                <select 
                    className="select mt-5 border mb-5 border-black w-full  max-w-xs block mx-auto lg:mx-0"
                    value={filter}
                    onChange={(e)=>setfilter(e.target.value)}
                   
                >
                    <option value="All">All Types</option>
                    <option value="Call">Calls</option>
                    <option value="Text">Texts</option>
                    <option value="Video">Videos</option>
                </select>
             {
                displayFilterActivites.map(activity=>{
                    return <div className="md:pb-10"> 
                       <div className="bg-white   border mt-5 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm mb-5 lg:m-0 m-5  space-y-4 border-black h-28">
                        {/* Lucide Icon Section*/}
          <div className="p-3 bg-gray-50 rounded-full">
            {activity.type === 'Call' && <PhoneForwarded className="text-blue-500" size={20} />}
            {activity.type === 'Text' && <MessageCircle className="text-green-500" size={20} />}
            {activity.type === 'Video' && <VideoIcon className="text-purple-500" size={20} />}
           
          </div>
  
  <div>
    <p className="text-sm text-gray-900">
     <span className="font-semibold">  <span className='text-red-500'>{activity.type} </span> With <span className='text-blue-500'> 
        {activity.name}</span> </span>
    </p>
    <p className="text-xs text-gray-400 mt-1"> {activity.time} </p>
  </div>
</div>
                    </div>
                })
             }
           </div>
       )
};

export default Timeline;