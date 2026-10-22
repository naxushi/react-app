// import { useState } from "react";
// import { useUser } from "../context/UserContext";
// import Post from "./Post";

// function ProfileCard() {
//     const {userName, avatar} = useState();
//     return ( 
//         <section className="profile-card">
//             <div className="profile">
//                 <div className="avatar">
//                     {avatar ? (
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8d7NjYM-bl-MA9ggAplpSVDziMQvD5k3qqKk8ihaOPQ&s" alt="аватарка" />
//                     ) : (
//                         <div className="avatar-placeholder"> {userName.charAt(0).toUpperCase() || "?"}</div>
//                     )}
//                 </div>
//                 <div className="profile-info">
//                     <h2>{userName}</h2>
//                     <p>@naxushi</p>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default ProfileCard;