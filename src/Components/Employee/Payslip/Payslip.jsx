import React from "react"
import styles from "./Payslip.module.css"

const Payslip=(props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.topRow}>
                <div className={styles.btnBackground}>
                    <div className={styles.btn}>
                        Print
                    </div>
                    <div className={styles.btn}>
                        PDF
                    </div>
                    <div className={styles.btn}>
                        Share
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                Payslip for the Month of Feb 2021
            </div>
            <div className={styles.logoDiv}>
                <div className={styles.logoSide}>
                    <div>
                        <img src="/logo.png" className={styles.logo}/>
                    </div>
                    <div>
                        Lakeside-08,Pokhara
                    </div>
                    <div className={styles.person}>
                        <div className={styles.highlight}>
                            Swadesh Nepali
                        </div>
                        <div>
                            General Manager
                        </div>
                        <div>
                            Due Date:1 Jan 2016
                        </div>
                    </div>
                </div>
                <div className={styles.paymentName}>
                    <div className={styles.name}>
                        Payslip #2361
                    </div>
                    <div>
                        Salary Months: March ,2021
                    </div>
                </div>
            </div>
            <div className={styles.listDiv}>
                <div className={styles.left}>
                    <div className={styles.earningTitle}>
                        Earnings
                    </div>
                    <div className={styles.list}>
                        <div className={styles.row}>
                            <div>
                                Basic Salary
                            </div>
                            <div>
                                Rs 20000
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.earningTitle}>
                        Deductions
                    </div>
                    <div className={styles.list}>
                        <div className={styles.row}>
                            <div>
                               Tax Reduced at Sources
                            </div>
                            <div>
                                Rs 20000
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                               Tax Reduced at Sources
                            </div>
                            <div>
                                Rs 20000
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                               Tax Reduced at Sources
                            </div>
                            <div>
                                Rs 20000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lastRow}>
                <div>
                    Due Amount ( Earning - Deduction )
                </div>
                <div className={styles.due}>
                    Rs 2402040
                </div>
            </div>
            <div className={styles.net}>
                Net Salary: Rs 30,0000
            </div>
        </div>
    )
}

export default Payslip