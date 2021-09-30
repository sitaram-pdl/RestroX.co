import React,{useState} from "react"
import styles from "./LineXGraph.module.css"
import { Doughnut } from 'react-chartjs-2';

import Dropdown from '../react-dropdown'
const data = {
  labels: ['1 AM', '2 AM ', '3 AM'],
  datasets: [
    {
      label: '2',
      data: [12, 19, 3,4],
      fill: false,
      backgroundColor: ['rgba(254,186,22,1)',"rgba(239,69,137,1)","rgba(108,108,108,1)","rgba(194,91,229,0.1)"],
     borderColor: ['rgba(254,186,22,1)',"rgba(239,69,137,1)","rgba(108,108,108,1)","rgba(194,91,229,0.1)"],
     
    }
    ,
  ],
};
const options2 = [
    { value: 'Daily', label: 'Daily' },
    { value: 'This Week', label: 'This Week' },
    { value: 'This Month', label: 'This Month' }, 
    { value: 'Last Year', label: 'Last Year' },
   
    ]
const options = {
    responsive: true,
    plugins: {
        legend: {
            position:"right",
            display:false,
            labels: {
              usePointStyle: true,
            },

        
        }
      },
    
  scales: {
   
  },
  
};
const Radial=(props)=>{
    
const [startDate, setStartDate] = useState(new Date());
    return(
        <div className={styles.container}>
             <div className={styles.header}>
                <div className={styles.title}>
                   Top Selling Categories
                </div>
                <div>
                   <div className={styles.picker}>
                   </div>
                </div>
            </div>
          <div className={styles.graphRow}>

            <div className={styles.graph}>
             <Doughnut data={data}  options={options} />
            </div>
            <div className={styles.graphDesc}>
              <div className={styles.descRow}>
                <div className={styles.dot}/>

                <div >
                    Indian Cusine
                </div>
              </div>
              <div className={styles.descRow}>
                <div className={styles.dot} style={{backgroundColor:"rgba(239,69,137,1)"}} />

                <div >
                    Mediterrian Cusine
                </div>
              </div>
              <div className={styles.descRow}>
                <div className={styles.dot} style={{backgroundColor:"rgba(194,91,229,0.1)"}}/>

                <div >
                    Mexican Cusine
                </div>
              </div>
              <div className={styles.descRow}>
                <div className={styles.dot} style={{backgroundColor:"rgba(108,108,108,1)"}}/>

                <div >
                    Italian Cusine
                </div>
              </div>
            </div>
          </div>
          
        </div>
    )
}

export default Radial