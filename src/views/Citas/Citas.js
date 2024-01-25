import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalCitas from "../../components/Modal/ModalCitas";
import esLocale from "@fullcalendar/core/locales/es";
import "./Citas.css";

const Calendar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");

  const handleDateClick = (arg) => {
    const selectedDate = new Date(arg.date);
    console.log("selectedDate:", selectedDate);
    const selectedHour = selectedDate.getHours();
    const selectedMinute = selectedDate.getMinutes();
    const formattedHour = selectedHour.toString().padStart(2, "0");
    const formattedMinute = selectedMinute.toString().padStart(2, "0");
    const formattedTime = `${formattedHour}:${formattedMinute}`;
    setSelectedDate(selectedDate);
    setSelectedHour(formattedTime);
    setModalShow(true);
  };
  
  const handleSave = (title, description, start, end, patient, doctor) => {
    setModalShow(false);
    setEvents([
      ...events,
      {
        title,
        description,
        start,
        end,
        patient,
        doctor,
      },
    ]);
  };

  return (
    <div className="card shadow border-0 calendar-card">
      <div className="card-header border-0">
        <h1 className="bg-light">Citas Médicas</h1>
      </div>
      <div className="card-body">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          dateClick={handleDateClick}
          events={events}
          locale={esLocale}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          hiddenDays={[0]}
          slotEventOverlap={false}
          views={{
            timeGrid: {
              dayHeaderFormat: { weekday: "long" },
              allDaySlot: false,
            },
          }}
          timeZone="local"
        />
      </div>
      <ModalCitas
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={handleSave}
        selectedDate={selectedDate}
        selectedHour={selectedHour}
        setSelectedHour={setSelectedHour}
      />
    </div>
  );
};

export default Calendar;
