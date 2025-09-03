import React from "react";
import { useParams, Link } from "react-router-dom";
import roomsData from "../data/rooms";
import useTranslation from "../i18n/useTranslation";
import "../css/room-details.css";

function RoomDetailsPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const room = roomsData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <h2 className="container">{t("roomDetails.notFound")}</h2>;
  }

  return (
    <main className="container room-details">
      <h1>{room.name}</h1>

      <div className="room-details-image-wrapper">
        <img src={room.image} alt={room.name} className="room-details-image" />
      </div>

      <p className="room-description">{room.description}</p>

      <div className="room-specs">
        {room.specs.map((spec, index) => (
          <span key={index}>{spec}</span>
        ))}
      </div>

      <Link to="/rooms" className="back-link">
        ← {t("roomDetails.backToRooms")} {}
      </Link>
    </main>
  );
}

export default RoomDetailsPage;
