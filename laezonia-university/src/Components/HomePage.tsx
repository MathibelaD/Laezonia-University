import React from "react"
import {criteriaService} from "./winnersService"
export const HomePage = () => {

    return (<>
            <p> the averageScore is </p>
            {criteriaService.calculateAverageScore(20,82,93,81)}
            {criteriaService.checkCredit(20,49,75,30)
            }        
            </>)
}