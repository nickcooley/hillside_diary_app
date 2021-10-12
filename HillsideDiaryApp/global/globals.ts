import { Emotion, Skill, Target } from '../types';

const globals = {
    apiCalls: {
        diaryEntityURi: "https://hillside-app.ue.r.appspot.com/entries/",
        skillURi: "https://hillside-app.ue.r.appspot.com/skills/",
        emotionURi: "https://hillside-app.ue.r.appspot.com/emotions/",
        targetURi: "https://hillside-app.ue.r.appspot.com/targets/",
        scoreURi: "https://hillside-app.ue.r.appspot.com/sud-scores/",
        myProfileURi: "https://hillside-app.ue.r.appspot.com/accounts/users/me",
    },
    DiaryLog: {
        id: 0,
        time: '',
        date: '',
        month: 0,
        day: 0,
        year: 0,
        moodScore: 0,
        skills: [] as unknown as [Skill],
        emotions: [] as unknown as [Emotion],
        targets: [] as unknown as [Target],
        note: '',
    },
    SUDScore: {
        score: 0
    }
}

export default globals;