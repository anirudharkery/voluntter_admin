// src/components/TripDetailsDialog.jsx
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const TripDetailsDialog = ({ trip, isOpen, onClose, onAccept }) => {
  if (!trip) return null;

  const center = trip.sourceCoords || [37.3496, -121.939]; // Default to SCU coordinates

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-[#811E2D]">Trip Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-600">Time</p>
              <p>
                {trip.time ||
                  new Date(trip.created_at?.toDate()).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Status</p>
              <p>{trip.status}</p>
            </div>
            {trip.studentName && (
              <div className="col-span-2">
                <p className="font-semibold text-gray-600">Student</p>
                <p>{trip.studentName}</p>
              </div>
            )}
            <div className="col-span-2">
              <p className="font-semibold text-gray-600">Route</p>
              <p>From: {trip.currentLocation || trip.startLocation}</p>
              <p>To: {trip.destination || trip.endLocation}</p>
            </div>
          </div>

          <div style={{ height: "300px", width: "100%" }}>
            {typeof window !== "undefined" && (
              <MapContainer
                center={center}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {trip.sourceCoords && (
                  <Marker position={trip.sourceCoords}>
                    <Popup>Start Location</Popup>
                  </Marker>
                )}
                {trip.destCoords && (
                  <Marker position={trip.destCoords}>
                    <Popup>Destination</Popup>
                  </Marker>
                )}
              </MapContainer>
            )}
          </div>

          {trip.requestNotes && (
            <div>
              <p className="font-semibold text-gray-600">Notes</p>
              <p className="text-sm">{trip.requestNotes}</p>
            </div>
          )}

          {trip.status === "pending" && (
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                className="bg-[#811E2D] hover:bg-[#9B2435] text-white"
                onClick={() => {
                  onAccept(trip.id);
                  onClose();
                }}
              >
                Accept Trip
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TripDetailsDialog;
