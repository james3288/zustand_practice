import {create} from "zustand"
import { produce } from "immer";

export type TUser = {
  id: number;
  name: string;
  age: number;
  school: {
    id:number;
    schoolName: string;
    address: string;
  }
}


interface TUserStore {
  users: TUser[],
  addUsers: (user:TUser) => void,
  removeUser:(id:number) => void,
  updateUser:(userId:number, schoolName: string) => void,
}

export const useUserStore = create<TUserStore>((set) => ({
  users: [],
  addUsers: (user:TUser) => set((state) => ({users: [...state.users, user]})),
  removeUser: (id: number) => set((state) => ({
    users: state.users.filter((user) => user.id !== id)
  })),
  updateUser: (userId:number, schoolName: string) => set(produce((state) => {
    const user = state.users.find((user:TUser) => user.id === userId);
    if(user){
      user.school.schoolName = schoolName
    }
  }))
  
}));