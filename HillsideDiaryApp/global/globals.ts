import {Attr} from '../types';

const globals = {
    DiaryLog: {
        id: 4,
        time: '',
        date: '',
        month: 0,
        day: 0,
        year: 0,
        moodScore: 0,
        skills: [] as unknown as [Attr],
        targets: [] as unknown as [Attr],
        emotions: [] as unknown as [Attr],
        note: '',
    },
    SUDScore: {
        score: 0
    }
}

export default globals;