import React from 'react';
import title_image from './images/titluPreturi.jpg';
import './styles/Preturi.css';


function Preturi() {
    return(
        <div>
            <div className='page-title'>
                <img src={title_image} alt='Ring' className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Preturi </h1>
                </div>
            </div>

            <div className='preturi-content'>
            <h2> Preturi Abonamente Ghencea </h2>
                {/* <div className='flex-container'> */}
                    <table className='table'>
                        <tr className='chart-row'>
                            <th>Tip abonament</th>
                            <th>Preț</th>
                            <th>Program</th>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox pentru copii cu Robert Hodea</td>
                            <td>300 lei</td>
                            <td>Sâmbătă și Duminică  ora 12:30</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Robert Hodea</td>
                            <td>300 lei</td>
                            <td>Luni, Miercuri si Vineri ora 10:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Serghei Zanosiev</td>
                            <td>300 lei</td>
                            <td>Luni, Miercuri si Vineri ora 14:30</td>
                        </tr>
                        <tr className='chart-row'> 
                            <td>Kickbox începători cu Serghei Zanosiev</td>
                            <td>300 lei</td>
                            <td>Luni, Miercuri si Vineri ora 16:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Mădălin Mogoș</td>
                            <td>300 lei</td>
                            <td>Marți, Joi și Vineri ora 20:30</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Andrei Ochi Mircea</td>
                            <td>300 lei</td>
                            <td>Luni, Miercuri și Vineri ora 19:00</td>
                        </tr>                            
                        <tr className='chart-row'>
                            <td>Kickbox avansați cu Andrei Ochi Mircea</td>
                            <td>300 lei</td>
                            <td>Luni, Miercuri și Vineri ora 17:30</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Brazilian Jiu-Jitsu cu Petre Gîtlan</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 20:30, Sâmbătă ora 14:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Mixed Martial Arts cu Petre Gîtlan</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 10:00, Sâmbătă ora 14:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Karate Shito-Ryu pentru copii cu Claudiu Dinică</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 19:00, Sâmbătă ora 11.00</td>
                        </tr>
                    </table>


                    <h2> Preturi Abonamente Militari </h2>

                    <table className='table'>
                        <tr className='chart-row'>
                            <th>Tip abonament</th>
                            <th>Preț</th>
                            <th>Program</th>
                        </tr>
                        <tr className='chart-row'>
                            <td>Abonament full (antrenamente la orice grupă, inclusiv sala de fitness)</td>
                            <td>700 lei</td>
                            <td>-</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători/avansați cu Bogdan Stoica</td>
                            <td>400 lei</td>
                            <td>Luni, Miercuri și Vineri ora 20:30</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox pentru copii (5-10 ani) cu Robert Hodea</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 16:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox pentru copii (11-16 ani) cu Robert Hodea</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 17:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Robert Hodea</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 10:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Robert Hodea</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 20:30</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox pentru fete cu Serghei Zanosiev</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 18:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Serghei Zanosiev</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 8:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători cu Serghei Zanosiev</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 16:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Kickbox începători pentru adulți cu Mădălin Mogoș</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri ora 19:00, Sâmbătă ora 12:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Brazilian Jiu-Jitsu pentru copii cu Petre Gîtlan</td>
                            <td>300 lei</td>
                            <td>Marți și Joi ora 18:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Brazilian Jiu-Jitsu cu Petre Gîtlan</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 9:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Brazilian Jiu-Jitsu cu Petre Gîtlan</td>
                            <td>350 lei</td>
                            <td>Marți, Joi și Vineri ora 9:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Mixed Martial Arts cu Petre Gîtlan</td>
                            <td>350 lei</td>
                            <td>Luni, Miercuri și Vineri ora 10:00</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Karate pentru copii cu Claudiu Dinică</td>
                            <td>350 lei</td>
                            <td>Marți și Joi ora 17:00, Sâmbătă ora 13:00</td>
                        </tr>
                    </table>

                    <h2> Preturi Antrenamente Private </h2>

                    <table className='table'>
                    <tr className='chart-row'>
                            <th>Antrenor</th>
                            <th>Preț</th>
                            <th>Număr Ședințe</th>
                        </tr>
                        <tr className='chart-row'>
                            <td>Bogdan Stoica</td>
                            <td>300 lei</td>
                            <td>1 ședința</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Bogdan Stoica</td>
                            <td>2000 lei</td>
                            <td>8 ședințe</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Bogdan Stoica</td>
                            <td>3000 lei</td>
                            <td>12 ședințe</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Robert Hodea /<br/>Serghei Zanosiev /<br/> Mădălin Mogoș</td>
                            <td>150 lei</td>
                            <td>1 ședința</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Robert Hodea /<br/>Serghei Zanosiev /<br/> Mădălin Mogoș </td>
                            <td>1000 lei</td>
                            <td>8 ședințe</td>
                        </tr>
                        <tr className='chart-row'>
                           <td>Robert Hodea /<br/>Serghei Zanosiev /<br/> Mădălin Mogoș </td>
                            <td>1400 lei</td>
                            <td>12 ședințe</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Petre Gîtlan</td>
                            <td>150 lei</td>
                            <td>1 ședința</td>
                        </tr>
                        <tr className='chart-row'>
                            <td>Petre Gîtlan </td>
                            <td>1000 lei</td>
                            <td>8 ședințe</td>
                        </tr>
                        <tr className='chart-row'>
                           <td> Petre Gîtlan</td>
                            <td>1400 lei</td>
                            <td>12 ședințe</td>
                        </tr>
                    </table>
                {/* </div> */}
            </div>

        </div>
    )
}

export default Preturi;