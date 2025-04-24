import { defineStore } from "pinia";
import router from "@/router";

// firebase 

import {AUTH, DB} from '@/utils/firebase.js'
import errorCodes  from "@/utils/errorCodes.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { isAdmin } from "@firebase/util";

const DEFAULT_USER = {
    uid: null,
    email: null,
    firstname: null,
    lastname: null,
    isAdmin: null,
}

export const useUserStore = defineStore("user", {
  state: () => ({
    loading: false,
    user: DEFAULT_USER,
    auth: false,
  }),

    getters: {},

    actions: {
        setUser(user) {
            this.user =  {...this.user, ...user}
            this.auth = true;
            return true;
        },

        async autosignin(uid) {
            try {
                const userData = await this.getUserProfile(uid);
                this.setUser(userData);
                
            } catch (error) {
             
            }
        },

        async getUserProfile(uid) {
            try {
                const userRef = await getDoc(doc(DB, "users", uid));
                if (!userRef.exists()) {
                    throw new Error("User not found");
                }
                 return userRef.data();
            } catch (error) {
                throw new Error(errorCodes(error.code));
            }
        },

        async signOut() {
            
                await signOut(AUTH);
                this.user = DEFAULT_USER;
                this.auth = false;

                router.push({name: 'home'});
            
        },

        async signIn(formData) {
            try {
                this.loading = true;
                
                const response = await signInWithEmailAndPassword(AUTH, formData.email, formData.password);

                const userData = await this.getUserProfile(response.user.uid);

                this.setUser(userData);
                router.push({name: 'dashboard'});

            } catch (error) {
                throw new Error(errorCodes(error.code));
            } finally {
                this.loading = false;
            }
        },

        async register(formData) {
            try {
                this.loading = true;

                const response = await createUserWithEmailAndPassword(AUTH, formData.email, formData.password);

                const newUser = {
                    uid: response.user.uid,
                    email: formData.email,
                    isAdmin: false,
                };

                await setDoc(doc(DB, "users", response.user.uid), newUser);
                this.setUser(newUser);

                router.push({name: 'dashboard'});

            } catch (error) {
                throw new Error(errorCodes(error.code));
            } finally {
                this.loading = false;
            }
        }
    }

})