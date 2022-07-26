import React from 'react'
import styles from '../styles/Extras.module.css'

export default function Extras() {
    return (
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <h1>Extras</h1>

                <div className={styles.card}>
                    <h1>Marketplace</h1>

                    <p>Here is a card with marketplace implemented in it</p>
                    <p>Here you can buy some Techie stuff</p>
                </div>

                <div className={styles.card}>
                    <h1>Explore</h1>
                    <p>Here is a card with Explore section implemented in it</p>
                    <p>Here you can explore some stuff</p>
                </div>

            </div>
        </div>
    )
}
