import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
registerLocale("es", es);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function TextInput() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      showPopperArrow={false}
      selected={startDate}
      onChange={date => setStartDate(date)}
      shouldCloseOnSelect={false}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className="red-border"
      calendarClassName="rasta-stripes"
    />
  );
}
