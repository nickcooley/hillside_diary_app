import { Attribute } from '../types';

export type PropObj = {
    loginHandler: Boolean,
    controlLoginMethod: React.Dispatch<React.SetStateAction<boolean>>,
}

const globals = {
    apiCalls: {
        diaryEntityURi: "https://hillside-app.ue.r.appspot.com/entries/",
        skillURi: "https://hillside-app.ue.r.appspot.com/skills/",
        emotionURi: "https://hillside-app.ue.r.appspot.com/emotions/",
        targetURi: "https://hillside-app.ue.r.appspot.com/targets/",
        scoreURi: "https://hillside-app.ue.r.appspot.com/sud-scores/",
        myProfileURi: "https://hillside-app.ue.r.appspot.com/accounts/users/me/",
        loginURi: "https://hillside-app.ue.r.appspot.com/accounts/token",
    },
    DiaryLog: {
        skills: [] as Attribute[],
        emotions: [] as Attribute[],
        targets: [] as Attribute[],
        date_added: '',
        mood_score: 0,
        note: '',
    },
}

export default globals;