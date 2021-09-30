import React, { useState } from 'react'
import { Appearace, Promotions } from '..'
import Notification from '../Notification/Notification'
import PurchaseBill from '../PurchaseBill/PurchaseBill'
import Landing from '../Report/Landing'
import Report from '../Report/Report'
import Suggestions from '../Suggestion/Suggestion'
import Support from '../Support/Support'
import AddInventory from './AddInventory/AddInventory'
import AddItem from './AddItem/AddItem'
import BillGallery from './BillGallery/BillGallery'
import Inventory from './Inventory/Inventory'
import MenuBar from './MenuBar/MenuBar'
import ProductManagement from './ProductMangement/ProductManagement'
import Right from './Right/Right'
import styles from './Settings.module.css'

const Settings = (props) => {
    const routing = (a) => {
        props.history.push(`/settings/${a}/0/0`)

    }
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <MenuBar {...props} routing={routing} />
            </div>
            <div className={styles.rightContainer}>
                {'Menu' == props.match.params.main && 'Add Items' == props.match.params.sub ? <AddItem /> : null}
                {'Menu' == props.match.params.main && 'View Menu' == props.match.params.sub ? <Right /> : null}
                {'General Setting' == props.match.params.main && '0' == props.match.params.sub ? <Appearace {...props} /> : null}
                {'Support & Help' == props.match.params.main && '0' == props.match.params.sub ? <Support {...props} /> : null}
                {'Support & Help' == props.match.params.main && 'Send Suggestions' == props.match.params.sub ? <Suggestions {...props} /> : null}
                {('Support & Help' == props.match.params.main && 'Report Problem' == props.match.params.sub && props.match.params.last === '0') ? <Landing {...props} /> : null}
                {'Support & Help' == props.match.params.main && 'Report Problem' == props.match.params.sub && props.match.params.last != '0' ? <Report {...props} /> : null}
                {'Notification & Sound' == props.match.params.main && '0' == props.match.params.sub ? <Notification {...props} /> : null}

                {'Inventory' == props.match.params.main && 'Add Inventory' == props.match.params.sub ? <AddInventory {...props} /> : null}
                {'Inventory' == props.match.params.main && 'Bill Gallery' == props.match.params.sub ? <BillGallery {...props} /> : null}
                {'Inventory' == props.match.params.main && 'Add Bill' == props.match.params.sub ? <PurchaseBill {...props} /> : null}

                {'Promotion' == props.match.params.main && '0' == props.match.params.sub ? <Promotions {...props} /> : null}

            </div>
        </div>
    )
}

export default Settings