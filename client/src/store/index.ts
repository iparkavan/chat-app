import { create } from "zustand";
import { useAuthslice } from "./slices/auth-slice";

export const  useAppStore = create()((...a) => ({
  ...useAuthslice(...a),
})) 