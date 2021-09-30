import React from "react"
import styles from "./Chart.module.css"
import { Bar } from 'react-chartjs-2';
import Dropdown from '../react-dropdown'
const Chart=()=>{
    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
        datasets: [
          {
            barThickness:32,
            
            label: 'Sales',
            data: [1222, 1229, 1223, 1235, 1232, 1233,2212],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            
            borderRadius: 5,  
          },
        ],
      };
      var delayed;
      
      const options = {
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
        },
        responsive: true,
        maintaAspectRatio:false,
        plugins: {
            legend: {
                display:false,
            
            }
          },
        scales: {
          
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      const options2 = [
        { value: 'Daily', label: 'Daily' },
        { value: 'This Week', label: 'This Week' },
        { value: 'This Month', label: 'This Month' }, 
        { value: 'Last Year', label: 'Last Year' },
       
        ]
    return(
       <div className={styles.mainContainer}>

        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Earnings
                </div>
                <div>
                   <div>
                    <Dropdown options={options2} value={'Daily'}  placeholder="Select an option"/>
                   </div>
                </div>
            </div>
            <div className={styles.graph}>
            <Bar data={data} options={options} height='100%'/>
            </div>
            
        </div>
     </div> 
    
    )
}

export default Chart