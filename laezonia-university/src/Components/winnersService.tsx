import { IAcademicScores } from "./ParticipantsDto";


export class criteriaService {
    static calculateAverageScore(Math: number,Biology: number,Physics: number,Research: number){
        return (Math + Biology + Physics + Research) / 400 * 100
    }
    static checkCredit(Math: number,Biology: number,Physics: number,Research: number) {
        const score = this.calculateAverageScore(Math,Biology,Physics,Research)
        if(score > 65 || Physics >= 75){
            return 1
        } else 
        {return 0}
    }
}