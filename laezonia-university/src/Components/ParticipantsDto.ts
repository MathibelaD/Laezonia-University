export interface ParticipantsDto{
    participantId: string
    acardemicScore: IAcademicScores
    maratonResults: number
}

export interface IAcademicScores{
    Math: number
    Physics: number
    Biology: number
    Reseacher: number
}