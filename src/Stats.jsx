    import React, { useContext } from 'react';
   
    import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
    import { FriendsContext } from '../FriendsProvider';

    const Stats = () => {
    const {activities}=useContext(FriendsContext)


    if(activities.length==0){
 return <div className=' shadow-lg  flex justify-center items-center h-[300px]  mt-10 mb-10 '> 

    <h1 className=' text-3xl font-bold'>No Data found</h1>
 </div>
    } 
   
    const callCount=activities.filter(activity=>activity.type==="Call").length
    const textCount=activities.filter(activity=>activity.type==="Text").length
    const videoCount=activities.filter(activity=>activity.type==="Video").length
    
    const data = [
        { name: 'Calls', value: callCount, fill: '#0088FE' }, 
        { name: 'Texts', value: textCount, fill: '#00C49F' },
        { name: 'Videos', value: videoCount, fill: '#00049F' }
    ];

    if(callCount.length==0 && textCount.length==0 && videoCount.length==0){
        return <h1>No Data Found</h1>
    }

        return (
           <section className=' shadow-lg container mx-auto mt-10 p-5 mb-4 '>
            <h1 className='text-2xl font-bold'>Friends Analytics : </h1>
             <div className="w-full h-[500px] mb-10">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data} 
                            cx="50%" 
                            cy="50%" 
                            
                            dataKey="value" 
                            innerRadius="40%" 
                            outerRadius="80%" 
                            fill="#8884d8"
                            paddingAngle={5}
                            label
                        >
                         
                       
                        </Pie>
                        <Tooltip />
                        <Legend> </Legend>
                    </PieChart>
                </ResponsiveContainer>
               <div className="flex justify-center gap-6 font-bold text-gray-700">
                <p>Calls: {callCount}</p>
                <p>Texts: {textCount}</p>
                <p>Videos: {videoCount}</p>
            </div>
            </div>
           </section>
        );
    };

    export default Stats