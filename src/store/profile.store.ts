/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';

export interface ProfileScreen {
    name:string,
    email:string,
    handleChangleProfile:(name:string,email:string) => void
}

export const useProfileStore = create<ProfileScreen>()((set,get)=>({
    name:'rinel',
    email:'rineliniguezsosa@gmail.com',
    handleChangleProfile:(name:string,email:string)=>{
        set({name:name,email:email});
    },
}));
