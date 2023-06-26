import React from 'react';
import bags_image from './images/stoica9-1.jpeg'
import './styles/Preturi.css'

function Preturi() {
    return (
        <div>
            <div className='page-title'>
                <img src={bags_image} className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Preturi </h1>
                </div>
            </div>

            <div className='program-content'>
                <table>
                    <tr className='table-row-odd'> 
                        <td> Kickboxing 1 sedinta </td>
                        <td> 50 RON </td>
                    </tr>

                    <tr className='table-row-even'> 
                        <td> Kickboxing 8 sedinte </td>
                        <td> 200 RON </td>
                    </tr>

                    <tr className='table-row-odd'> 
                        <td> Kickboxing 12 sedinta </td>
                        <td> 300 RON </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Preturi