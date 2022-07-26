import styles from './styles/App.module.css'
import { useState } from 'react'
import Home from './components/Home'
import Course from './components/Course'
import Extras from './components/Extras'
import Profile from './components/Profile'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const img = '/pfp.png'

  return (
    <div className={styles.Dashboard}>
      <div className={styles.sideBarLeft}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>

        <div className={styles.navTab}>
          <div className={`${styles.navTabSelection} ${activeTab === 'home' ? styles.navTabActive : styles.navTabInactive}`} onClick={e => setActiveTab('home')}>
            <p>Home</p>
          </div>
          <div className={`${styles.navTabSelection} ${activeTab === 'course' ? styles.navTabActive : styles.navTabInactive}`} onClick={e => setActiveTab('course')}>
            <p>Course</p>
          </div>
          <div className={`${styles.navTabSelection} ${activeTab === 'profile' ? styles.navTabActive : styles.navTabInactive}`} onClick={e => setActiveTab('profile')}>
            <p>Profile</p>
          </div>
          <div className={`${styles.navTabSelection} ${activeTab === 'extras' ? styles.navTabActive : styles.navTabInactive}`} onClick={e => setActiveTab('extras')}>
            <p>Extras</p>
          </div>
        </div>
      </div>

      {
        {
          "home": <Home />,
          "course": <Course />,
          "profile": <Profile />,
          "extras": <Extras />
        }[activeTab]
      }

      <div className={styles.sideBarRight}>
        <div className={styles.logoutBtn}>
          <div className={styles.logoutInnerDiv}>
            <p>Logout</p>
          </div>
        </div>

        <div className={styles.profileContainer}>
          <img src={img} alt="" />
          <h1>Rashmi Tirke</h1>
          <h2>Junior, IIT Madras</h2>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statsHead}>
            <h1>Your Stats</h1>
            <img src="/stats.svg" alt="stats" />
          </div>
          <div className={styles.statsSubHead}>
            <h1>Classes Attended</h1>
            <p>{10}</p>
          </div>
          <div className={styles.statsSubHead}>
            <h1>Points</h1>
            <p>1275</p>
          </div>
        </div>

        <div className={styles.notificationsContainer}>
          <div className={styles.notificationsHead}>
            <h1>Notifications</h1>
            <img src="/notification.svg" alt="notification" />
          </div>
          <div className={`${styles.notifications} ${styles.notificationsP1}`}>
            <img src="/danger.svg" alt="danger" />
            <div className={styles.notificationsInfo}>
              <h1>Your plan expires in 3 days.</h1>
              <p>Renew Now</p>
            </div>
          </div>
          <div className={`${styles.notifications} ${styles.notificationsP2}`}>
            <img src="/upgrade.svg" alt="upgrade" />
            <div className={styles.notificationsInfo}>
              <h1>New features updates.</h1>
              <p>Check out</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
