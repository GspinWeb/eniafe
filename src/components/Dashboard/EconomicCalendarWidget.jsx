import "./EconomicCalendarWidget.css";

const events = [
  {
    time: "09:30",
    currency: "GBP",
    title: "Consumer Price Index (CPI)",
    impact: "High",
    forecast: "3.2%",
    previous: "3.1%"
  },
  {
    time: "11:00",
    currency: "EUR",
    title: "ECB President Speech",
    impact: "Medium",
    forecast: "-",
    previous: "-"
  },
  {
    time: "13:30",
    currency: "USD",
    title: "Initial Jobless Claims",
    impact: "High",
    forecast: "235K",
    previous: "238K"
  },
  {
    time: "15:00",
    currency: "USD",
    title: "FOMC Member Speech",
    impact: "Medium",
    forecast: "-",
    previous: "-"
  },
  {
    time: "17:00",
    currency: "CAD",
    title: "BoC Press Conference",
    impact: "Low",
    forecast: "-",
    previous: "-"
  }
];

export default function EconomicCalendarWidget() {

    return (

        <section className="calendarWidget">

            <div className="calendarHeader">

                <div>

                    <h2>Economic Calendar</h2>

                    <small>Today's Scheduled Events</small>

                </div>

                <button>

                    Full Calendar

                </button>

            </div>

            <div className="calendarList">

                {events.map((event)=>(

                    <div
                        key={event.time + event.title}
                        className="calendarRow"
                    >

                        <div className="timeBox">

                            {event.time}

                        </div>

                        <div className="eventInfo">

                            <div className="eventTop">

                                <strong>

                                    {event.currency}

                                </strong>

                                <span
                                    className={
                                        event.impact==="High"
                                        ? "impactHigh"
                                        : event.impact==="Medium"
                                        ? "impactMedium"
                                        : "impactLow"
                                    }
                                >

                                    {event.impact}

                                </span>

                            </div>

                            <div className="eventTitle">

                                {event.title}

                            </div>

                            <div className="forecastRow">

                                <span>

                                    Forecast: {event.forecast}

                                </span>

                                <span>

                                    Previous: {event.previous}

                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}