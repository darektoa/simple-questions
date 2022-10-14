import { createSlice } from '@reduxjs/toolkit';
import QuestionData from '../data/QuestionData';

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        current: QuestionData[0],
        currentIndex: 0,
        lastIndex: 0,
        data: QuestionData,
    },
    reducers: {
        add(state, action) {
            state.data.push(action.payload);
        },

        
        addAnswer(state, action) {
            const { payload } = action;
            const itemIndex   = state.data.findIndex(item => item.id === payload.id);
            const item        = state.data[itemIndex];

            if(!item) return;

            state.data[itemIndex] = {
                ...item,
                answer_ids: [...new Set(payload.answer_ids.concat(item.answer_ids || []))]
            };
            state.current = state.data[itemIndex];
        },


        init(state, action) {
            state.data = action.payload;
            state.current = action.payload[state.currentIndex];
        },


        next(state) {
            const index = state.currentIndex + 1;

            if(index >= state.data.length) return;

            state.current = state.data[index];
            state.currentIndex = index;
            state.lastIndex = index;
        },


        prev(state) {
            const index = state.currentIndex - 1;

            if(index < 0) return;

            state.current = state.data[index];
            state.currentIndex = index;
        },
   
        
        removeAnswer(state, action) {
            const { payload } = action;
            const itemIndex   = state.data.findIndex(item => item.id === payload.id);
            const item        = state.data[itemIndex];

            if(!item) return;
            
            state.data[itemIndex] = {
                ...item,
                answer_ids: item.answer_ids.filter(item => !payload.answer_ids.includes(item))
            }
            state.current = state.data[itemIndex];
        },
    }
});

export default questionSlice.reducer;
export const {
    add,
    addAnswer,
    init,
    next,
    prev,
    removeAnswer,
} = questionSlice.actions;