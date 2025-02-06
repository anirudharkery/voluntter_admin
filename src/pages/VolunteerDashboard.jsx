// // // src/pages/VolunteerDashboard.jsx
// // import React from "react";
// // import { Button } from "../components/ui/button";

// // const VolunteerDashboard = () => {
// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold mb-4">Volunteer Dashboard</h1>
// //       <Button>Test Button</Button>
// //     </div>
// //   );
// // };

// // export default VolunteerDashboard;
// // src/pages/VolunteerDashboard.jsx
// // import React, { useState } from "react";
// // import { Button } from "../components/ui/button";
// // import TripDetailsDialog from '../components/TripDetailsDialog';

// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// // } from "../components/ui/card";
// // import { Map } from "lucide-react";

// // // Mock data for testing
// // const tripRequests = [
// //   {
// //     id: 1,
// //     time: "10:30 AM",
// //     currentLocation: "123 Main St",
// //     destination: "456 Elm St",
// //   },
// //   {
// //     id: 2,
// //     time: "11:45 AM",
// //     currentLocation: "789 Oak Ave",
// //     destination: "321 Pine Rd",
// //   },
// // ];

// // const VolunteerDashboard = () => {
// //   const [currentView, setCurrentView] = useState("home");

// //   const renderHome = () => (
// //     <div className="p-4">
// //       <h2 className="text-xl font-semibold mb-4 text-[#811E2D]">
// //         Pending Trip Requests
// //       </h2>
// //       {tripRequests.map((request) => (
// //         <Card key={request.id} className="mb-4">
// //           <CardContent className="pt-6">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <p>
// //                   <span className="font-semibold">Time:</span> {request.time}
// //                 </p>
// //                 <p>
// //                   <span className="font-semibold">From:</span>{" "}
// //                   {request.currentLocation}
// //                 </p>
// //                 <p>
// //                   <span className="font-semibold">To:</span>{" "}
// //                   {request.destination}
// //                 </p>
// //               </div>
// //               <Button variant="outline" size="icon" className="ml-4">
// //                 <Map className="h-4 w-4" />
// //               </Button>
// //             </div>
// //             <Button className="mt-4 w-full bg-[#811E2D] hover:bg-[#9B2435] text-white">
// //               View Details & Accept
// //             </Button>
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </div>
// //   );

// //   const renderProfile = () => (
// //     <div className="p-4">
// //       <Card className="mb-4">
// //         <CardHeader>
// //           <CardTitle className="text-[#811E2D]">Personal Information</CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div>
// //             <p className="font-semibold">Name</p>
// //             <p>John Doe</p>
// //           </div>
// //           <div>
// //             <p className="font-semibold">Email</p>
// //             <p>john.doe@example.com</p>
// //           </div>
// //           <div>
// //             <p className="font-semibold">Volunteer ID</p>
// //             <p>V12345</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );

// //   const renderHistory = () => (
// //     <div className="p-4">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="text-[#811E2D]">Trip History</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             <div className="flex justify-between p-2 bg-gray-50 rounded">
// //               <div>
// //                 <p className="font-semibold">Oct 15, 2023</p>
// //                 <p className="text-sm">123 Main St → 456 Elm St</p>
// //               </div>
// //               <span className="text-green-600">Completed</span>
// //             </div>
// //             <div className="flex justify-between p-2 bg-gray-50 rounded">
// //               <div>
// //                 <p className="font-semibold">Oct 16, 2023</p>
// //                 <p className="text-sm">789 Oak Ave → 321 Pine Rd</p>
// //               </div>
// //               <span className="text-green-600">Completed</span>
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );

// //   const renderView = () => {
// //     switch (currentView) {
// //       case "home":
// //         return renderHome();
// //       case "profile":
// //         return renderProfile();
// //       case "history":
// //         return renderHistory();
// //       default:
// //         return renderHome();
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gray-100">
// //       <header className="bg-[#811E2D] text-white p-4">
// //         <h1 className="text-2xl font-bold">SafeWalkSCU Volunteer Dashboard</h1>
// //       </header>

// //       <main className="flex-grow">{renderView()}</main>

// //       <footer className="bg-gray-200 p-4">
// //         <nav className="flex justify-around">
// //           <Button
// //             variant={currentView === "home" ? "default" : "ghost"}
// //             onClick={() => setCurrentView("home")}
// //           >
// //             Home
// //           </Button>
// //           <Button
// //             variant={currentView === "profile" ? "default" : "ghost"}
// //             onClick={() => setCurrentView("profile")}
// //           >
// //             Profile
// //           </Button>
// //           <Button
// //             variant={currentView === "history" ? "default" : "ghost"}
// //             onClick={() => setCurrentView("history")}
// //           >
// //             History
// //           </Button>
// //         </nav>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default VolunteerDashboard;
// // src/pages/VolunteerDashboard.jsx
// import React, { useState } from "react";
// import { Button } from "../components/ui/button";
// import TripDetailsDialog from "../components/TripDetailsDialog";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Map } from "lucide-react";

// // Updated mock data with coordinates
// const tripRequests = [
//   {
//     id: 1,
//     time: "10:30 AM",
//     currentLocation: "Santa Clara University",
//     destination: "Santa Clara Downtown",
//     sourceCoords: [37.3496, -121.939], // SCU coordinates
//     destCoords: [37.3528, -121.9536],
//     status: "pending",
//     studentName: "Alice Johnson",
//     studentId: "1234567",
//     requestNotes: "First time using SafeWalk",
//   },
//   {
//     id: 2,
//     time: "11:45 AM",
//     currentLocation: "SCU Library",
//     destination: "Off-Campus Housing",
//     sourceCoords: [37.3492, -121.9411],
//     destCoords: [37.3486, -121.9321],
//     status: "pending",
//     studentName: "Bob Smith",
//     studentId: "7654321",
//     requestNotes: "Carrying heavy books",
//   },
// ];

// const tripHistory = [
//   {
//     id: "T1001",
//     date: "Oct 15, 2023",
//     studentName: "Carol White",
//     startLocation: "SCU Gym",
//     endLocation: "University Villas",
//     status: "Completed",
//     sourceCoords: [37.3482, -121.9378],
//     destCoords: [37.3509, -121.9389],
//     completionTime: "25 minutes",
//   },
//   {
//     id: "T1002",
//     date: "Oct 16, 2023",
//     studentName: "David Brown",
//     startLocation: "Benson Center",
//     endLocation: "Park Avenue Apartments",
//     status: "Completed",
//     sourceCoords: [37.3467, -121.9407],
//     destCoords: [37.3491, -121.9385],
//     completionTime: "20 minutes",
//   },
// ];

// const VolunteerDashboard = () => {
//   const [currentView, setCurrentView] = useState("home");
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleTripClick = (trip) => {
//     setSelectedTrip(trip);
//     setIsDialogOpen(true);
//   };

//   const handleAcceptTrip = (tripId) => {
//     console.log("Accepting trip:", tripId);
//     // Here you would typically:
//     // 1. Update trip status in backend
//     // 2. Send notification to student
//     // 3. Update local state
//     // 4. Show confirmation message
//   };

//   const renderHome = () => (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4 text-[#811E2D]">
//         Pending Trip Requests
//       </h2>
//       {tripRequests.map((request) => (
//         <Card
//           key={request.id}
//           className="mb-4 hover:shadow-lg transition-shadow"
//         >
//           <CardContent className="pt-6">
//             <div className="flex justify-between items-start">
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <span className="font-semibold">Time:</span>
//                   <span className="bg-[#811E2D] text-white px-2 py-1 rounded-full text-sm">
//                     {request.time}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Student</p>
//                   <p>{request.studentName}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Route</p>
//                   <p className="text-sm">From: {request.currentLocation}</p>
//                   <p className="text-sm">To: {request.destination}</p>
//                 </div>
//                 {request.requestNotes && (
//                   <div className="mt-2">
//                     <p className="text-sm italic text-gray-600">
//                       {request.requestNotes}
//                     </p>
//                   </div>
//                 )}
//               </div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="ml-4"
//                 onClick={() => handleTripClick(request)}
//               >
//                 <Map className="h-4 w-4" />
//               </Button>
//             </div>
//             <div className="mt-4 flex space-x-2">
//               <Button
//                 className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 onClick={() => handleTripClick(request)}
//               >
//                 View Details
//               </Button>
//               <Button
//                 className="flex-1 bg-[#811E2D] hover:bg-[#9B2435] text-white"
//                 onClick={() => handleAcceptTrip(request.id)}
//               >
//                 Accept Trip
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );

//   const renderProfile = () => (
//     <div className="p-4">
//       <div className="grid gap-4 md:grid-cols-2">
//         <Card className="mb-4">
//           <CardHeader>
//             <CardTitle className="text-[#811E2D]">
//               Personal Information
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <p className="font-semibold text-gray-600">Name</p>
//               <p className="text-lg">John Doe</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-600">Email</p>
//               <p className="text-lg">john.doe@scu.edu</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-600">Volunteer ID</p>
//               <p className="text-lg">V12345</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-600">Status</p>
//               <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//                 Active
//               </span>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-[#811E2D]">Statistics</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <p className="font-semibold text-gray-600">Total Trips</p>
//               <p className="text-2xl">24</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-600">Hours Volunteered</p>
//               <p className="text-2xl">36</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-600">Average Rating</p>
//               <p className="text-2xl">4.8/5.0</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );

//   const renderHistory = () => (
//     <div className="p-4">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-[#811E2D]">Trip History</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {tripHistory.map((trip) => (
//               <div
//                 key={trip.id}
//                 className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
//                 onClick={() => handleTripClick(trip)}
//               >
//                 <div className="space-y-2">
//                   <p className="font-semibold">{trip.date}</p>
//                   <p className="text-sm text-gray-600">{trip.studentName}</p>
//                   <p className="text-sm">
//                     {trip.startLocation} → {trip.endLocation}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Duration: {trip.completionTime}
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span className="text-green-600 font-medium">
//                     {trip.status}
//                   </span>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleTripClick(trip);
//                     }}
//                   >
//                     <Map className="h-4 w-4 mr-2" />
//                     View Route
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );

//   const renderView = () => {
//     switch (currentView) {
//       case "home":
//         return renderHome();
//       case "profile":
//         return renderProfile();
//       case "history":
//         return renderHistory();
//       default:
//         return renderHome();
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <header className="bg-[#811E2D] text-white p-4">
//         <h1 className="text-2xl font-bold">SafeWalkSCU Volunteer Dashboard</h1>
//       </header>

//       <main className="flex-grow">{renderView()}</main>

//       <footer className="bg-gray-200 p-4 shadow-inner">
//         <nav className="flex justify-around max-w-md mx-auto">
//           <Button
//             variant={currentView === "home" ? "default" : "ghost"}
//             onClick={() => setCurrentView("home")}
//             className={currentView === "home" ? "bg-[#811E2D] text-white" : ""}
//           >
//             Home
//           </Button>
//           <Button
//             variant={currentView === "profile" ? "default" : "ghost"}
//             onClick={() => setCurrentView("profile")}
//             className={
//               currentView === "profile" ? "bg-[#811E2D] text-white" : ""
//             }
//           >
//             Profile
//           </Button>
//           <Button
//             variant={currentView === "history" ? "default" : "ghost"}
//             onClick={() => setCurrentView("history")}
//             className={
//               currentView === "history" ? "bg-[#811E2D] text-white" : ""
//             }
//           >
//             History
//           </Button>
//         </nav>
//       </footer>

//       <TripDetailsDialog
//         trip={selectedTrip}
//         isOpen={isDialogOpen}
//         onClose={() => {
//           setIsDialogOpen(false);
//           setSelectedTrip(null);
//         }}
//         onAccept={handleAcceptTrip}
//       />
//     </div>
//   );
// };

// export default VolunteerDashboard;
// src/pages/VolunteerDashboard.jsx
// import React from "react";
// import { Button } from "../components/ui/button";

// const VolunteerDashboard = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-[#811E2D]">
//         SafeWalkSCU Volunteer Dashboard
//       </h1>
//       <div className="mt-4">
//         <Button>Test Button</Button>
//       </div>
//     </div>
//   );
// };

// export default VolunteerDashboard;
// src/pages/VolunteerDashboard.jsx
// import React, { useState, useEffect } from "react";
// import { Button } from "../components/ui/button";
// import TripDetailsDialog from "../components/TripDetailsDialog";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Map } from "lucide-react";
// import { db } from "../lib/firebase";
// import {
//   collection,
//   query,
//   where,
//   orderBy,
//   onSnapshot,
//   doc,
//   updateDoc,
//   Timestamp,
// } from "firebase/firestore";

// const VolunteerDashboard = () => {
//   const [currentView, setCurrentView] = useState("home");
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [volunteer, setVolunteer] = useState(null);
//   const [pendingTrips, setPendingTrips] = useState([]);
//   const [completedTrips, setCompletedTrips] = useState([]);

//   // Hardcoded volunteer ID for demo - should come from auth
//   const volunteerId = "V12345";

//   useEffect(() => {
//     // Fetch volunteer data
//     const volunteerUnsub = onSnapshot(
//       doc(db, "volunteers", volunteerId),
//       (doc) => {
//         if (doc.exists()) {
//           setVolunteer({ id: doc.id, ...doc.data() });
//         }
//       }
//     );

//     // Fetch pending trips
//     const pendingTripsQuery = query(
//       collection(db, "trips"),
//       where("status", "==", "pending"),
//       orderBy("created_at", "desc")
//     );

//     const pendingTripsUnsub = onSnapshot(pendingTripsQuery, (snapshot) => {
//       const trips = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         time: doc.data().created_at?.toDate().toLocaleTimeString(),
//       }));
//       setPendingTrips(trips);
//     });

//     // Fetch completed trips for this volunteer
//     const completedTripsQuery = query(
//       collection(db, "trips"),
//       where("volunteer_assigned", "==", volunteerId),
//       where("status", "==", "completed"),
//       orderBy("created_at", "desc")
//     );

//     const completedTripsUnsub = onSnapshot(completedTripsQuery, (snapshot) => {
//       const trips = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         date: doc.data().created_at?.toDate().toLocaleDateString(),
//       }));
//       setCompletedTrips(trips);
//       setLoading(false);
//     });

//     return () => {
//       volunteerUnsub();
//       pendingTripsUnsub();
//       completedTripsUnsub();
//     };
//   }, [volunteerId]);

//   const handleTripClick = (trip) => {
//     setSelectedTrip(trip);
//     setIsDialogOpen(true);
//   };

//   const handleAcceptTrip = async (tripId) => {
//     try {
//       const tripRef = doc(db, "trips", tripId);
//       await updateDoc(tripRef, {
//         status: "accepted",
//         volunteer_assigned: volunteerId,
//         accepted_at: Timestamp.now(),
//       });

//       // Update volunteer's stats
//       if (volunteer) {
//         const volunteerRef = doc(db, "volunteers", volunteerId);
//         await updateDoc(volunteerRef, {
//           total_trips: (volunteer.total_trips || 0) + 1,
//           current_trip: tripId,
//         });
//       }
//     } catch (error) {
//       console.error("Error accepting trip:", error);
//     }
//   };

//   const handleStatusToggle = async (isActive) => {
//     try {
//       const volunteerRef = doc(db, "volunteers", volunteerId);
//       await updateDoc(volunteerRef, {
//         isActive: isActive,
//         last_status_change: Timestamp.now(),
//       });
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   const renderHome = () => (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4 text-[#811E2D]">
//         Pending Trip Requests
//       </h2>
//       {pendingTrips.length === 0 ? (
//         <Card>
//           <CardContent className="p-6 text-center text-gray-500">
//             No pending trip requests at the moment
//           </CardContent>
//         </Card>
//       ) : (
//         pendingTrips.map((request) => (
//           <Card
//             key={request.id}
//             className="mb-4 hover:shadow-lg transition-shadow"
//           >
//             <CardContent className="pt-6">
//               <div className="flex justify-between items-start">
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="font-semibold">Time:</span>
//                     <span className="bg-[#811E2D] text-white px-2 py-1 rounded-full text-sm">
//                       {request.time}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-600">Student</p>
//                     <p>{request.student_name || "Anonymous"}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-600">Route</p>
//                     <p className="text-sm">From: {request.source?.address}</p>
//                     <p className="text-sm">
//                       To: {request.destination?.address}
//                     </p>
//                   </div>
//                   {request.notes && (
//                     <div className="mt-2">
//                       <p className="text-sm italic text-gray-600">
//                         {request.notes}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="ml-4"
//                   onClick={() => handleTripClick(request)}
//                 >
//                   <Map className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="mt-4 flex space-x-2">
//                 <Button
//                   className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300"
//                   onClick={() => handleTripClick(request)}
//                 >
//                   View Details
//                 </Button>
//                 <Button
//                   className="flex-1 bg-[#811E2D] hover:bg-[#9B2435] text-white"
//                   onClick={() => handleAcceptTrip(request.id)}
//                 >
//                   Accept Trip
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );

//   const renderProfile = () => (
//     <div className="p-4">
//       <div className="grid gap-4 md:grid-cols-2">
//         <Card className="mb-4">
//           <CardHeader>
//             <CardTitle className="text-[#811E2D]">
//               Personal Information
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {volunteer && (
//               <>
//                 <div>
//                   <p className="font-semibold text-gray-600">Name</p>
//                   <p className="text-lg">{volunteer.name}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Email</p>
//                   <p className="text-lg">{volunteer.email}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Volunteer ID</p>
//                   <p className="text-lg">{volunteer.id}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Status</p>
//                   <Button
//                     onClick={() => handleStatusToggle(!volunteer.isActive)}
//                     className={`mt-2 ${
//                       volunteer.isActive
//                         ? "bg-green-500 hover:bg-green-600"
//                         : "bg-red-500 hover:bg-red-600"
//                     } text-white`}
//                   >
//                     {volunteer.isActive ? "Active" : "Inactive"}
//                   </Button>
//                 </div>
//               </>
//             )}
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-[#811E2D]">Statistics</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {volunteer && (
//               <>
//                 <div>
//                   <p className="font-semibold text-gray-600">Total Trips</p>
//                   <p className="text-2xl">{volunteer.total_trips || 0}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">
//                     Hours Volunteered
//                   </p>
//                   <p className="text-2xl">{volunteer.total_hours || 0}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-600">Average Rating</p>
//                   <p className="text-2xl">
//                     {volunteer.average_rating?.toFixed(1) || "N/A"}/5.0
//                   </p>
//                 </div>
//               </>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );

//   const renderHistory = () => (
//     <div className="p-4">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-[#811E2D]">Trip History</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {completedTrips.length === 0 ? (
//               <p className="text-center text-gray-500">
//                 No completed trips yet
//               </p>
//             ) : (
//               completedTrips.map((trip) => (
//                 <div
//                   key={trip.id}
//                   className="flex justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
//                   onClick={() => handleTripClick(trip)}
//                 >
//                   <div className="space-y-2">
//                     <p className="font-semibold">{trip.date}</p>
//                     <p className="text-sm text-gray-600">
//                       {trip.student_name || "Anonymous"}
//                     </p>
//                     <p className="text-sm">
//                       {trip.source?.address} → {trip.destination?.address}
//                     </p>
//                     {trip.duration && (
//                       <p className="text-sm text-gray-500">
//                         Duration: {trip.duration}
//                       </p>
//                     )}
//                   </div>
//                   <div className="flex flex-col items-end">
//                     <span className="text-green-600 font-medium">
//                       {trip.status}
//                     </span>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="mt-2"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleTripClick(trip);
//                       }}
//                     >
//                       <Map className="h-4 w-4 mr-2" />
//                       View Route
//                     </Button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );

//   const renderView = () => {
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center h-full">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#811E2D]"></div>
//         </div>
//       );
//     }

//     switch (currentView) {
//       case "home":
//         return renderHome();
//       case "profile":
//         return renderProfile();
//       case "history":
//         return renderHistory();
//       default:
//         return renderHome();
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <header className="bg-[#811E2D] text-white p-4">
//         <h1 className="text-2xl font-bold">SafeWalkSCU Volunteer Dashboard</h1>
//         {volunteer && <p className="text-sm mt-1">Welcome, {volunteer.name}</p>}
//       </header>

//       <main className="flex-grow">{renderView()}</main>

//       <footer className="bg-gray-200 p-4 shadow-inner">
//         <nav className="flex justify-around max-w-md mx-auto">
//           <Button
//             variant={currentView === "home" ? "default" : "ghost"}
//             onClick={() => setCurrentView("home")}
//             className={currentView === "home" ? "bg-[#811E2D] text-white" : ""}
//           >
//             Home
//           </Button>
//           <Button
//             variant={currentView === "profile" ? "default" : "ghost"}
//             onClick={() => setCurrentView("profile")}
//             className={
//               currentView === "profile" ? "bg-[#811E2D] text-white" : ""
//             }
//           >
//             Profile
//           </Button>
//           <Button
//             variant={currentView === "history" ? "default" : "ghost"}
//             onClick={() => setCurrentView("history")}
//             className={
//               currentView === "history" ? "bg-[#811E2D] text-white" : ""
//             }
//           >
//             History
//           </Button>
//         </nav>
//       </footer>

//       <TripDetailsDialog
//         trip={selectedTrip}
//         isOpen={isDialogOpen}
//         onClose={() => {
//           setIsDialogOpen(false);
//           setSelectedTrip(null);
//         }}
//         onAccept={handleAcceptTrip}
//       />
//     </div>
//   );
// };

// export default VolunteerDashboard;
// src/pages/VolunteerDashboard.jsx
// src/pages/VolunteerDashboard.jsx
// src/pages/VolunteerDashboard.jsx
// src/pages/VolunteerDashboard.jsx
// import React, { useState, useEffect } from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { db } from "../lib/firebase";
// import { collection, getDocs } from "firebase/firestore";

// const VolunteerDashboard = () => {
//   const [data, setData] = useState({
//     trips: [],
//     volunteers: [],
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         console.log("Starting to fetch data..."); // Debug log

//         // Fetch trips
//         const tripsRef = collection(db, "trips");
//         console.log("Fetching trips from:", tripsRef); // Debug log
//         const tripsSnapshot = await getDocs(tripsRef);
//         const tripsData = tripsSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         console.log("Trips data:", tripsData); // Debug log

//         // Fetch volunteers
//         const volunteersRef = collection(db, "volunteers");
//         console.log("Fetching volunteers from:", volunteersRef); // Debug log
//         const volunteersSnapshot = await getDocs(volunteersRef);
//         const volunteersData = volunteersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         console.log("Volunteers data:", volunteersData); // Debug log

//         setData({
//           trips: tripsData,
//           volunteers: volunteersData,
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-[#811E2D] text-white p-4">
//         <h1 className="text-2xl font-bold">SafeWalkSCU Dashboard</h1>
//         <p className="text-sm mt-2">
//           Data loaded: {data.trips.length} trips, {data.volunteers.length}{" "}
//           volunteers
//         </p>
//       </header>

//       <main className="container mx-auto p-4">
//         <div className="space-y-6">
//           {/* Loading State */}
//           {loading ? (
//             <div>Loading data from Firebase...</div>
//           ) : (
//             <>
//               {/* Debug Info */}
//               <div className="bg-yellow-100 p-4 rounded">
//                 <p>
//                   Firebase Connection Status:{" "}
//                   {db ? "Connected" : "Not Connected"}
//                 </p>
//                 <p>Trips Count: {data.trips.length}</p>
//                 <p>Volunteers Count: {data.volunteers.length}</p>
//               </div>

//               {/* Trips Section */}
//               <section>
//                 <h2 className="text-xl font-bold mb-4">Recent Trips</h2>
//                 {data.trips.length === 0 ? (
//                   <Card>
//                     <CardContent className="p-4">
//                       <p>No trips found in database</p>
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   data.trips.map((trip) => (
//                     <Card key={trip.id} className="mb-4">
//                       <CardContent className="p-4">
//                         <div>
//                           <p>Trip ID: {trip.id}</p>
//                           <p>Status: {trip.status}</p>
//                           <p>From: {trip.source?.address}</p>
//                           <p>To: {trip.destination?.address}</p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </section>

//               {/* Volunteers Section */}
//               <section>
//                 <h2 className="text-xl font-bold mb-4">Volunteers</h2>
//                 {data.volunteers.length === 0 ? (
//                   <Card>
//                     <CardContent className="p-4">
//                       <p>No volunteers found in database</p>
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   data.volunteers.map((volunteer) => (
//                     <Card key={volunteer.id} className="mb-4">
//                       <CardContent className="p-4">
//                         <div>
//                           <p>Volunteer ID: {volunteer.id}</p>
//                           <p>Name: {volunteer.name}</p>
//                           <p>Email: {volunteer.email}</p>
//                           <p>
//                             Status: {volunteer.isActive ? "Active" : "Inactive"}
//                           </p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </section>
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default VolunteerDashboard;
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";

const VolunteerDashboard = () => {
  const [data, setData] = useState({
    trips: [],
    volunteers: [],
  });
  const [loading, setLoading] = useState(true);
  const [isAddVolunteerOpen, setIsAddVolunteerOpen] = useState(false);
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    isActive: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const [tripsSnapshot, volunteersSnapshot] = await Promise.all([
  //       getDocs(collection(db, "trips")),
  //       getDocs(collection(db, "volunteers")),
  //     ]);

  //     const tripsData = tripsSnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     const volunteersData = volunteersSnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setData({
  //       trips: tripsData,
  //       volunteers: volunteersData,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // In your VolunteerDashboard.jsx, modify the fetchData function:

  const fetchData = async () => {
    try {
      setLoading(true);
      const [tripsSnapshot, volunteersSnapshot] = await Promise.all([
        getDocs(collection(db, "trips")),
        getDocs(collection(db, "volunteers")),
      ]);

      // First get all trips
      const tripsData = tripsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Get volunteers and calculate their total trips
      const volunteersData = volunteersSnapshot.docs.map((doc) => {
        const volunteerData = {
          id: doc.id,
          ...doc.data(),
        };

        // Calculate total trips for this volunteer
        const completedTrips = tripsData.filter(
          (trip) =>
            trip.volunteer_assigned === doc.id && trip.status === "completed"
        ).length;

        const activeTrips = tripsData.filter(
          (trip) =>
            trip.volunteer_assigned === doc.id && trip.status === "accepted"
        ).length;

        // Update total trips count
        volunteerData.totalTrips = completedTrips;
        volunteerData.activeTrips = activeTrips;

        return volunteerData;
      });

      setData({
        trips: tripsData,
        volunteers: volunteersData,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddVolunteer = async (e) => {
    e.preventDefault();
    try {
      const volunteerData = {
        ...newVolunteer,
        createdAt: Timestamp.now(),
        totalTrips: 0,
      };

      await addDoc(collection(db, "volunteers"), volunteerData);
      setIsAddVolunteerOpen(false);
      setNewVolunteer({
        name: "",
        email: "",
        phoneNumber: "",
        isActive: true,
      });
      fetchData(); // Refresh the data
    } catch (error) {
      console.error("Error adding volunteer:", error);
    }
  };

  const toggleVolunteerStatus = async (volunteerId, currentStatus) => {
    try {
      const volunteerRef = doc(db, "volunteers", volunteerId);
      await updateDoc(volunteerRef, {
        isActive: !currentStatus,
      });
      fetchData(); // Refresh the data
    } catch (error) {
      console.error("Error toggling volunteer status:", error);
    }
  };

  const AddVolunteerDialog = () => (
    <Dialog open={isAddVolunteerOpen} onOpenChange={setIsAddVolunteerOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#811E2D] hover:bg-[#9B2435] text-white">
          Add New Volunteer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Volunteer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddVolunteer} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={newVolunteer.name}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={newVolunteer.email}
              onChange={(e) =>
                setNewVolunteer({ ...newVolunteer, email: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={newVolunteer.phoneNumber}
              onChange={(e) =>
                setNewVolunteer({
                  ...newVolunteer,
                  phoneNumber: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="status">Active Status</Label>
            <Switch
              id="status"
              checked={newVolunteer.isActive}
              onCheckedChange={(checked) =>
                setNewVolunteer({ ...newVolunteer, isActive: checked })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddVolunteerOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#811E2D] text-white">
              Add Volunteer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#811E2D] text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">SafeWalkSCU Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard Overview</h2>
          <AddVolunteerDialog />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volunteers Section */}
          <Card>
            <CardHeader>
              <CardTitle>Volunteers ({data.volunteers.length})</CardTitle>
            </CardHeader>
            <CardContent className="max-h-[600px] overflow-y-auto">
              <div className="space-y-4">
                {/* {data.volunteers.map((volunteer) => (
                  <Card key={volunteer.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{volunteer.name}</p>
                          <p className="text-sm text-gray-600">
                            {volunteer.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            {volunteer.phoneNumber}
                          </p>
                          <p className="text-sm text-gray-600">
                            Total Trips: {volunteer.totalTrips || 0}
                          </p>
                        </div>
                        <Button
                          onClick={() =>
                            toggleVolunteerStatus(
                              volunteer.id,
                              volunteer.isActive
                            )
                          }
                          className={`${
                            volunteer.isActive
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-red-500 hover:bg-red-600"
                          } text-white`}
                        >
                          {volunteer.isActive ? "Active" : "Inactive"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))} */}
                {data.volunteers.map((volunteer) => (
                  <Card key={volunteer.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{volunteer.name}</p>
                          <p className="text-sm text-gray-600">
                            {volunteer.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            {volunteer.phoneNumber}
                          </p>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm">
                              <span className="font-medium">
                                Completed Trips:
                              </span>{" "}
                              <span className="text-green-600">
                                {volunteer.totalTrips}
                              </span>
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Active Trips:</span>{" "}
                              <span className="text-blue-600">
                                {volunteer.activeTrips}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button
                            onClick={() =>
                              toggleVolunteerStatus(
                                volunteer.id,
                                volunteer.isActive
                              )
                            }
                            className={`${
                              volunteer.isActive
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-red-500 hover:bg-red-600"
                            } text-white`}
                          >
                            {volunteer.isActive ? "Active" : "Inactive"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trips Section */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Trips ({data.trips.length})</CardTitle>
            </CardHeader>
            <CardContent className="max-h-[600px] overflow-y-auto">
              <div className="space-y-4">
                {data.trips.map((trip) => (
                  <Card key={trip.id}>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <p className="font-semibold">
                            Trip ID: {trip.id.slice(0, 8)}...
                          </p>
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              trip.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : trip.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {trip.status}
                          </span>
                        </div>
                        <p className="text-sm">
                          From: {trip.source?.address || "N/A"}
                        </p>
                        <p className="text-sm">
                          To: {trip.destination?.address || "N/A"}
                        </p>
                        {trip.created_at && (
                          <p className="text-xs text-gray-500">
                            {new Date(
                              trip.created_at.seconds * 1000
                            ).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
