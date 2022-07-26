import styles from '../styles/Course.module.css'

export default function Course() {
  const upcomingEvents = [
    {
      title: "Title 4",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    },
    {
      title: "Title 5",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    },
    {
      title: "Title 6",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    }
  ]

  const pastEvents = [
    {
      title: "Title 1",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    },
    {
      title: "Title 2",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    },
    {
      title: "Title 3",
      org: "Bailee Cooper",
      date: "1st Aug 2022",
      time: "12:30 PM"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.internalContainer}>
        <h1>Course</h1>

        <div className="eventsTable">
          <div className="eventsTableHead">
            <h1>Upcoming Classes</h1>
            <p>See More</p>
          </div>
          <div className="eventsTableTitle">
            <div><p>Events</p></div>
            <div><p>Lecture By</p></div>
            <div><p>Date</p></div>
            <div><p>Time</p></div>
          </div>
          <div className="eventsTableTitleHr"></div>
          <div className="eventsTableContent">
            {upcomingEvents.map((event, i) => {
              return (
                <div className="eventsTableRow" key={"event" + i}>
                  <div><p>{event.title}</p></div>
                  <div><p>{event.org}</p></div>
                  <div><p>{event.date}</p></div>
                  <div><p>{event.time}</p></div>
                </div>
              )
            })}
          </div>


        </div>

        <div className="eventsTable">
          <div className="eventsTableHead">
            <h1>Past Classes</h1>
            <p>See More</p>
          </div>
          <div className="eventsTableTitle">
            <div><p>Class</p></div>
            <div><p>Lecture By</p></div>
            <div><p>Date</p></div>
            <div><p>Time</p></div>
          </div>
          <div className="eventsTableTitleHr"></div>
          <div className="eventsTableContent">
            {pastEvents.map((event, i) => {
              return (
                <div className="eventsTableRow" key={"event" + i}>
                  <div><p>{event.title}</p></div>
                  <div><p>{event.org}</p></div>
                  <div><p>{event.date}</p></div>
                  <div><p>{event.time}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
