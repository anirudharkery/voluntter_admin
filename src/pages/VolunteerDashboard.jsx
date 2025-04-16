// // export default VolunteerDashboard;
// import React, { useState, useEffect } from "react";
// import { Button } from "../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { db } from "../lib/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   Timestamp,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Switch } from "../components/ui/switch";

// const VolunteerDashboard = () => {
//   const [data, setData] = useState({
//     trips: [],
//     volunteers: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [isAddVolunteerOpen, setIsAddVolunteerOpen] = useState(false);
//   const [newVolunteer, setNewVolunteer] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     isActive: true,
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const fetchData = async () => {
//   //   try {
//   //     setLoading(true);
//   //     const [tripsSnapshot, volunteersSnapshot] = await Promise.all([
//   //       getDocs(collection(db, "trips")),
//   //       getDocs(collection(db, "volunteers")),
//   //     ]);

//   //     const tripsData = tripsSnapshot.docs.map((doc) => ({
//   //       id: doc.id,
//   //       ...doc.data(),
//   //     }));

//   //     const volunteersData = volunteersSnapshot.docs.map((doc) => ({
//   //       id: doc.id,
//   //       ...doc.data(),
//   //     }));

//   //     setData({
//   //       trips: tripsData,
//   //       volunteers: volunteersData,
//   //     });
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   // In your VolunteerDashboard.jsx, modify the fetchData function:

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const [tripsSnapshot, volunteersSnapshot] = await Promise.all([
//         getDocs(collection(db, "trips")),
//         getDocs(collection(db, "volunteers")),
//       ]);

//       // First get all trips
//       const tripsData = tripsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       // Get volunteers and calculate their total trips
//       const volunteersData = volunteersSnapshot.docs.map((doc) => {
//         const volunteerData = {
//           id: doc.id,
//           ...doc.data(),
//         };

//         // Calculate total trips for this volunteer
//         const completedTrips = tripsData.filter(
//           (trip) =>
//             trip.volunteer_assigned === doc.id && trip.status === "completed"
//         ).length;

//         const activeTrips = tripsData.filter(
//           (trip) =>
//             trip.volunteer_assigned === doc.id && trip.status === "accepted"
//         ).length;

//         // Update total trips count
//         volunteerData.totalTrips = completedTrips;
//         volunteerData.activeTrips = activeTrips;

//         return volunteerData;
//       });

//       setData({
//         trips: tripsData,
//         volunteers: volunteersData,
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddVolunteer = async (e) => {
//     e.preventDefault();
//     try {
//       const volunteerData = {
//         ...newVolunteer,
//         createdAt: Timestamp.now(),
//         totalTrips: 0,
//       };

//       await addDoc(collection(db, "volunteers"), volunteerData);
//       setIsAddVolunteerOpen(false);
//       setNewVolunteer({
//         name: "",
//         email: "",
//         phoneNumber: "",
//         isActive: true,
//       });
//       fetchData(); // Refresh the data
//     } catch (error) {
//       console.error("Error adding volunteer:", error);
//     }
//   };

//   const toggleVolunteerStatus = async (volunteerId, currentStatus) => {
//     try {
//       const volunteerRef = doc(db, "volunteers", volunteerId);
//       await updateDoc(volunteerRef, {
//         isActive: !currentStatus,
//       });
//       fetchData(); // Refresh the data
//     } catch (error) {
//       console.error("Error toggling volunteer status:", error);
//     }
//   };

//   const AddVolunteerDialog = () => (
//     <Dialog open={isAddVolunteerOpen} onOpenChange={setIsAddVolunteerOpen}>
//       <DialogTrigger asChild>
//         <Button className="bg-[#811E2D] hover:bg-[#9B2435] text-white">
//           Add New Volunteer
//         </Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add New Volunteer</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleAddVolunteer} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               value={newVolunteer.name}
//               onChange={(e) =>
//                 setNewVolunteer({ ...newVolunteer, name: e.target.value })
//               }
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={newVolunteer.email}
//               onChange={(e) =>
//                 setNewVolunteer({ ...newVolunteer, email: e.target.value })
//               }
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input
//               id="phone"
//               type="tel"
//               value={newVolunteer.phoneNumber}
//               onChange={(e) =>
//                 setNewVolunteer({
//                   ...newVolunteer,
//                   phoneNumber: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <Label htmlFor="status">Active Status</Label>
//             <Switch
//               id="status"
//               checked={newVolunteer.isActive}
//               onCheckedChange={(checked) =>
//                 setNewVolunteer({ ...newVolunteer, isActive: checked })
//               }
//             />
//           </div>
//           <div className="flex justify-end space-x-2">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => setIsAddVolunteerOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit" className="bg-[#811E2D] text-white">
//               Add Volunteer
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-[#811E2D] text-white p-4">
//         <div className="container mx-auto">
//           <h1 className="text-2xl font-bold">SafeWalkSCU Dashboard</h1>
//         </div>
//       </header>

//       <main className="container mx-auto p-4">
//         <div className="mb-6 flex justify-between items-center">
//           <h2 className="text-xl font-bold">Dashboard Overview</h2>
//           <AddVolunteerDialog />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Volunteers Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Volunteers ({data.volunteers.length})</CardTitle>
//             </CardHeader>
//             <CardContent className="max-h-[600px] overflow-y-auto">
//               <div className="space-y-4">
//                 {/* {data.volunteers.map((volunteer) => (
//                   <Card key={volunteer.id}>
//                     <CardContent className="p-4">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <p className="font-semibold">{volunteer.name}</p>
//                           <p className="text-sm text-gray-600">
//                             {volunteer.email}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             {volunteer.phoneNumber}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             Total Trips: {volunteer.totalTrips || 0}
//                           </p>
//                         </div>
//                         <Button
//                           onClick={() =>
//                             toggleVolunteerStatus(
//                               volunteer.id,
//                               volunteer.isActive
//                             )
//                           }
//                           className={`${
//                             volunteer.isActive
//                               ? "bg-green-500 hover:bg-green-600"
//                               : "bg-red-500 hover:bg-red-600"
//                           } text-white`}
//                         >
//                           {volunteer.isActive ? "Active" : "Inactive"}
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))} */}
//                 {data.volunteers.map((volunteer) => (
//                   <Card key={volunteer.id}>
//                     <CardContent className="p-4">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <p className="font-semibold">{volunteer.name}</p>
//                           <p className="text-sm text-gray-600">
//                             {volunteer.email}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             {volunteer.phoneNumber}
//                           </p>
//                           <div className="mt-2 space-y-1">
//                             <p className="text-sm">
//                               <span className="font-medium">
//                                 Completed Trips:
//                               </span>{" "}
//                               <span className="text-green-600">
//                                 {volunteer.totalTrips}
//                               </span>
//                             </p>
//                             <p className="text-sm">
//                               <span className="font-medium">Active Trips:</span>{" "}
//                               <span className="text-blue-600">
//                                 {volunteer.activeTrips}
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <Button
//                             onClick={() =>
//                               toggleVolunteerStatus(
//                                 volunteer.id,
//                                 volunteer.isActive
//                               )
//                             }
//                             className={`${
//                               volunteer.isActive
//                                 ? "bg-green-500 hover:bg-green-600"
//                                 : "bg-red-500 hover:bg-red-600"
//                             } text-white`}
//                           >
//                             {volunteer.isActive ? "Active" : "Inactive"}
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Trips Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Trips ({data.trips.length})</CardTitle>
//             </CardHeader>
//             <CardContent className="max-h-[600px] overflow-y-auto">
//               <div className="space-y-4">
//                 {data.trips.map((trip) => (
//                   <Card key={trip.id}>
//                     <CardContent className="p-4">
//                       <div className="space-y-2">
//                         <div className="flex justify-between">
//                           <p className="font-semibold">
//                             Trip ID: {trip.id.slice(0, 8)}...
//                           </p>
//                           <span
//                             className={`px-2 py-1 rounded-full text-sm ${
//                               trip.status === "completed"
//                                 ? "bg-green-100 text-green-800"
//                                 : trip.status === "pending"
//                                 ? "bg-yellow-100 text-yellow-800"
//                                 : "bg-gray-100 text-gray-800"
//                             }`}
//                           >
//                             {trip.status}
//                           </span>
//                         </div>
//                         <p className="text-sm">
//                           From: {trip.source?.address || "N/A"}
//                         </p>
//                         <p className="text-sm">
//                           To: {trip.destination?.address || "N/A"}
//                         </p>
//                         {trip.created_at && (
//                           <p className="text-xs text-gray-500">
//                             {new Date(
//                               trip.created_at.seconds * 1000
//                             ).toLocaleString()}
//                           </p>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
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
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    isActive: true,
  });
  // Add the trip filters state here
  const [tripFilters, setTripFilters] = useState({
    status: "all", // all, assigned, accepted, completed
    dateRange: "all", // all, today, week, month
    volunteer: "all", // all or volunteer ID
  });

  useEffect(() => {
    fetchData();
  }, []);

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

        const assignedTrips = tripsData.filter(
          (trip) =>
            trip.volunteer_assigned === doc.id && trip.status === "assigned"
        ).length;

        // Update total trips count
        volunteerData.totalTrips = completedTrips;
        volunteerData.activeTrips = activeTrips;
        volunteerData.assignedTrips = assignedTrips;

        // Add the volunteer's assigned trips for quick reference
        volunteerData.trips = tripsData.filter(
          (trip) => trip.volunteer_assigned === doc.id
        );

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

  const viewVolunteerTrips = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setTripFilters({
      ...tripFilters,
      volunteer: volunteer.id,
    });
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

  // Filter trips based on selected filters
  const filteredTrips = data.trips.filter((trip) => {
    // Status filter
    if (tripFilters.status !== "all" && trip.status !== tripFilters.status) {
      return false;
    }

    // Volunteer filter
    if (
      tripFilters.volunteer !== "all" &&
      trip.volunteer_assigned !== tripFilters.volunteer
    ) {
      return false;
    }

    // Date range filter
    if (tripFilters.dateRange !== "all" && trip.created_at) {
      const tripDate = new Date(trip.created_at.seconds * 1000);
      const now = new Date();

      if (tripFilters.dateRange === "today") {
        return tripDate.toDateString() === now.toDateString();
      } else if (tripFilters.dateRange === "week") {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return tripDate >= weekAgo;
      } else if (tripFilters.dateRange === "month") {
        const monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        return tripDate >= monthAgo;
      }
    }

    return true;
  });

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
                            <p className="text-sm">
                              <span className="font-medium">
                                Assigned Trips:
                              </span>{" "}
                              <span className="text-yellow-600">
                                {volunteer.assignedTrips || 0}
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
                          <Button
                            onClick={() => viewVolunteerTrips(volunteer)}
                            className="ml-2 bg-[#811E2D] hover:bg-[#9B2435] text-white"
                          >
                            View Trips
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trips Section with Filters */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle>
                  {selectedVolunteer
                    ? `${selectedVolunteer.name}'s Trips (${filteredTrips.length})`
                    : `All Trips (${filteredTrips.length})`}
                </CardTitle>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <select
                    className="p-1 rounded border text-sm"
                    value={tripFilters.status}
                    onChange={(e) =>
                      setTripFilters({ ...tripFilters, status: e.target.value })
                    }
                  >
                    <option value="all">All Statuses</option>
                    <option value="assigned">Assigned</option>
                    <option value="accepted">Accepted</option>
                    <option value="completed">Completed</option>
                  </select>
                  <select
                    className="p-1 rounded border text-sm"
                    value={tripFilters.dateRange}
                    onChange={(e) =>
                      setTripFilters({
                        ...tripFilters,
                        dateRange: e.target.value,
                      })
                    }
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                  {selectedVolunteer && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => {
                        setSelectedVolunteer(null);
                        setTripFilters({ ...tripFilters, volunteer: "all" });
                      }}
                    >
                      Clear Filter
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="max-h-[600px] overflow-y-auto">
              <div className="space-y-4">
                {filteredTrips.length === 0 ? (
                  <div className="text-center p-4 text-gray-500">
                    No trips match the selected filters
                  </div>
                ) : (
                  filteredTrips.map((trip) => (
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
                                  : trip.status === "assigned"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : trip.status === "accepted"
                                  ? "bg-blue-100 text-blue-800"
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
                          {trip.volunteer_assigned && (
                            <p className="text-xs text-gray-600 mt-2">
                              Assigned to:{" "}
                              {data.volunteers.find(
                                (v) => v.id === trip.volunteer_assigned
                              )?.name || trip.volunteer_assigned}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
