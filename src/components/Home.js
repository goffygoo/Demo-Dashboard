import styles from '../styles/Home.module.css'

export default function Home() {
    const events = [
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
        },
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
        }
    ]

    const bannerImg = '/robo.png'

    return (
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <h1>Home</h1>

                <div className={styles.banner}>
                    <div className={styles.bannerImgContainer}>
                        <div className={styles.bannerDate}>
                            <h2>Jul</h2>
                            <h1>12</h1>
                            <p>12:30 PM</p>
                        </div>
                        <img src={bannerImg} alt=""/>
                    </div>
                    <div className={styles.bannerInfo}>
                        <p>Upcoming Class</p>
                        <h1>Future Deep Tech Founders</h1>
                        <div className={styles.bannerInfoFooter}>
                            <div className={styles.bannerInfoFooterSign}>
                                <p>Lecture By</p>
                                <h1>Bailee Cooper</h1>
                            </div>
                            <div className={styles.bannerInfoFooterBtn}>
                                <p>Enter Class</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="eventsTable">
                    <div className="eventsTableHead">
                        <h1>Upcoming Class</h1>
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
                        {events.map((event, i) => {
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
