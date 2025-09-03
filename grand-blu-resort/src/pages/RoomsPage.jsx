import React, { useState, useEffect } from "react";
import "../css/rooms.css";
import roomsData from "../data/rooms";
import { Link, useLocation } from "react-router-dom";

function RoomsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const checkIn = params.get("check_in");
  const checkOut = params.get("check_out");

  const initialGuests =
    parseInt(params.get("adults") || "1") +
    parseInt(params.get("children") || "0");
  const initialRooms = parseInt(params.get("rooms") || "1");

  const [guestFilter, setGuestFilter] = useState(initialGuests);
  const [roomsFilter, setRoomsFilter] = useState(initialRooms);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    const filtered = roomsData.filter(
      (room) =>
        room.filters.guests >= guestFilter &&
        (room.filters.rooms || 1) >= roomsFilter
    );
    setFilteredRooms(filtered);
  }, [guestFilter, roomsFilter]);

  return (
    <main className="container">
      <h1 className="page-title">Available Rooms</h1>

      <div className="booking-summary interactive">
        {checkIn && checkOut && (
          <div className="booking-dates">
            📅 {checkIn} → {checkOut}
          </div>
        )}
        <div className="booking-guests">
          👤{" "}
          <input
            type="number"
            min="1"
            value={guestFilter}
            onChange={(e) =>
              setGuestFilter(Math.max(1, parseInt(e.target.value) || 1))
            }
            style={{
              width: "60px",
              padding: "4px 6px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          />
          Guest{guestFilter > 1 ? "s" : ""}
        </div>
        <div className="booking-rooms">
          🛏{" "}
          <input
            type="number"
            min="1"
            value={roomsFilter}
            onChange={(e) =>
              setRoomsFilter(Math.max(1, parseInt(e.target.value) || 1))
            }
            style={{
              width: "60px",
              padding: "4px 6px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          />
          Room{roomsFilter > 1 ? "s" : ""}
        </div>
      </div>

      {filteredRooms.length > 0 ? (
        filteredRooms.map((room) => (
          <div className="room-item" key={room.id}>
            <div className="room-image">
              <img src={room.image} alt={room.name} />
            </div>
            <div className="room-info">
              <h2 className="room-title">{room.name}</h2>
              <p className="room-description">{room.description}</p>
              <div className="room-specs">
                {room.specs.map((spec, index) => (
                  <span key={index}>{spec}</span>
                ))}
              </div>
              <div className="room-actions">
                <Link to={`/room/${room.id}`} className="btn-outline">
                  View Details
                </Link>
                <Link
                  to={`/book/${room.id}?check_in=${checkIn}&check_out=${checkOut}&adults=${guestFilter}&children=0&rooms=${roomsFilter}`}
                  className="btn"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-rooms-message">
          No rooms found matching your guest and room criteria.
        </p>
      )}
    </main>
  );
}

export default RoomsPage;
