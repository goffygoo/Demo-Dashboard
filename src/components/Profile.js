import { useState, useEffect } from 'react'
import styles from '../styles/Profile.module.css'

export default function Profile() {
    const img = '/pfp.png'

    const [edit1, setedit1] = useState(false)
    const [edit2, setedit2] = useState(false)
    const [edit3, setedit3] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <h1>Profile</h1>

                <div className={styles.containerRow1}>
                    <div className={styles.basicInfo}>
                        <div className={styles.basicInfoHead} onClick={() => setedit1(v => !v)}>
                            <h1>Basic Info</h1>
                            <img src={`/${edit1? "cancel" : "edit" }.png`} alt=""/>
                        </div>
                        <div className={styles.basicInfoContent}>
                            <img src={img} alt="" />
                            <div className={styles.basicInfoContentText}>
                                <div className={styles.basicInfoContentTextRow}>
                                    <div className={styles.basicInfoContentTextCol}>
                                        <p>First Name</p>
                                        {edit1 ? <input spellCheck="false" defaultValue="Rashmi" />: <h1>Rashmi</h1>}
                                    </div>
                                    <div className={styles.basicInfoContentTextCol}>
                                        <p>Professional Title</p>
                                        {edit1 ? <input spellCheck="false" defaultValue="Junior" />: <h1>Junior</h1>}
                                    </div>
                                </div>
                                <div className={styles.basicInfoContentTextRow}>
                                    <div className={styles.basicInfoContentTextCol}>
                                        <p>Last Name</p>
                                        {edit1 ? <input spellCheck="false" defaultValue="Tirke" />: <h1>Tirke</h1>}
                                    </div>
                                    <div className={styles.basicInfoContentTextCol}>
                                        <p>Organisation</p>
                                        {edit1 ? <input spellCheck="false" defaultValue="IIT Madras" />: <h1>IIT Madras</h1>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialMedia}>
                        <div className={styles.socialMediaHead} onClick={() => setedit2(v => !v)}>
                            <h1>Social Media</h1>
                            <img src={`/${edit2? "cancel" : "edit" }.png`} alt=""/>
                        </div>
                        <div className={styles.socialMediaContent}>
                            <div className={styles.socialMediaIdWrapper}>
                                <p>LinkedIn</p>
                                {edit2 ? <input spellCheck="false" defaultValue="linkedin.com/me" />: <h1>linkedin.com/me</h1>}
                            </div>
                            <div className={styles.socialMediaIdWrapper}>
                                <p>Instagram</p>
                                {edit2 ? <input spellCheck="false" defaultValue="instagram.com/me" />: <h1>instagram.com/me</h1>}
                            </div>
                            <div className={styles.socialMediaIdWrapper}>
                                <p>Twitter</p>
                                {edit2 ? <input spellCheck="false" defaultValue="twitter.com/me" />: <h1>twitter.com/me</h1>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerRow2}>
                    <div className={styles.billingAddress}>
                        <div className={styles.billingAddressHead} onClick={() => setedit3(v => !v)}>
                            <h1>Billing Address</h1>
                            <img src={`/${edit3? "cancel" : "edit" }.png`} alt=""/>
                        </div>
                        <div className={styles.billingAddressContent}>
                            <div className={styles.billingAddressContentTextRow}>
                                <div className={styles.billingAddressContentTextCol}>
                                    <p>Addresss</p>
                                    {edit3 ? <input spellCheck="false" defaultValue="1338 Tipple Road" />: <h1>1338 Tipple Road</h1>}
                                </div>
                            </div>
                            <div className={styles.billingAddressContentTextRow}>
                                <div className={styles.billingAddressContentTextCol}>
                                    <p>City</p>
                                    {edit3 ? <input spellCheck="false" defaultValue="Souderton" />: <h1>Souderton</h1>}
                                </div>
                                <div className={styles.billingAddressContentTextCol}>
                                    <p>Postal Code</p>
                                    {edit3 ? <input spellCheck="false" defaultValue="18964" />: <h1>18964</h1>}
                                </div>
                            </div>
                            <div className={styles.billingAddressContentTextRow}>
                                <div className={styles.billingAddressContentTextCol}>
                                    <p>Country</p>
                                    {edit3 ? <input spellCheck="false" defaultValue="United States" />: <h1>United States</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerRow3}>
                    <div className={styles.saveBtn}>
                        <div className={styles.saveInnerDiv}>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
