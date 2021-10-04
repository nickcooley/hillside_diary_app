import emotionData from "./emotionData";
import skillData from "./skillData";
import targetData from "./targetData";

export default [
    {
        id: 1,
        time: '12:43 PM',
        month: 9,
        day: 1,
        year: 2021,
        moodScore: 5,
        skills: [
            {
                id: skillData[1].id,
                type: 'Skill',
                value: 2,
            },
            {
                id: skillData[2].id,
                type: 'Skill',
                value: 4,
            },
        ],
        targets: [],
        emotions: [
            {
                id: emotionData[1].id,
                type: 'Emotion',
                value: 4,
            },
        ],
        note: ''
    },
    {
        id: 2,
        time: '9:05 AM',
        month: 9,
        day: 5,
        year: 2021,
        moodScore: 6,
        skills: [
            {
                id: skillData[1].id,
                type: 'Skill',
                value: 4,
            },
            {
                id: skillData[3].id,
                type: 'Skill',
                value: 6,
            },
        ],
        targets: [
            {
                id: targetData[1].id,
                type: 'Target',
                value: 3,
            },

        ],
        emotions: [
            {
                id: emotionData[4].id,
                type: 'Emotion',
                value: 4,
            },
            {
                id: emotionData[7].id,
                type: 'Emotion',
                value: 7,
            },
        ],
        note: 'hello world',
    },
    {
        id: 3,
        time: '3:14 PM',
        month: 9,
        day: 17,
        year: 2021,
        moodScore: 1,
        skills: [
            {
                id: skillData[3].id,
                type: 'Skill',
                value: 4,
            },
            {
                id: skillData[4].id,
                type: 'Skill',
                value: 3,
            },
        ],
        targets: [
            {
                id: targetData[0].id,
                type: 'Target',
                value: 8,
            },
            {
                id: targetData[2].id,
                type: 'Target',
                value: 2,
            },
        ],
        emotions: [],
        note: ''
    },
]