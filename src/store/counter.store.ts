/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';

export interface SettingScreen {
    count:number,
    handleIncrementBy:(value:number) => void
}

export const useSettingStore = create<SettingScreen>()((set,get)=>({
    count:0,
    handleIncrementBy:(value)=> set((state) => ({count:state.count + value})),
}));
