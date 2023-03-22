import { IAcademicScores } from "./ParticipantsDto";


export class criteriaService {
    static calculateAverageScore(Math: any,Biology: any,Physics: any,Research: any){
        return (Math + Biology + Physics + Research) / 400 * 100
    }
}