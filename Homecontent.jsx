import React, { useContext } from "react";
import Banner from "./src/Banner";
import FriendsProvider, { FriendsContext } from "./FriendsProvider";
import { FadeLoader } from "react-spinners";
import { Link } from "lucide-react";
import { NavLink } from "react-router";

const Homecontent = () => {
  const { friends,loading } = useContext(FriendsContext);
  
 if (loading) {
  return (
    <div className="flex justify-center items-center mt-4">
       <FadeLoader color="#0d9488" /> 
    </div>
  )
}
  return (
 <section>
  <Banner> </Banner>
     <div>
      
      <h1 className=" text-center mt-5 text-xl font-bold">My Friends </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6">
        {friends.map((friend) => (
          <NavLink  to={`/FriendsDetails/${friend.id}`} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img src={friend.picture} />
            <p className="font-semibold text-gray-900 text-base">
              {" "}
              {friend.name}{" "}
            </p>
            <p className="text-gray-400 text-xs">
              {" "}
              {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-1">
              <span className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
               {friend.tags[0]}
              </span>
              <span className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
               {friend.tags[1]}
              </span>
            </div>

            <span  className={`text-xs font-semibold px-3 py-1 rounded-full ${
  friend.status === "overdue" ? "bg-red-100 text-red-500" :
  friend.status === "almost due" ? "bg-orange-100 text-orange-500" :
  "bg-green-100 text-green-600"
}` } >
              {friend.status}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
 </section>
  );
};

export default Homecontent;
