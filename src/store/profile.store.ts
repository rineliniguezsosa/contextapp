/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';

export interface ProfileScreen {
    name:string,
    email:string,
}

export const useProfileStore = create<ProfileScreen>()((set,get)=>({
    name:'rinel',
    email:'rineliniguezsosa@gmail.com',
}));
