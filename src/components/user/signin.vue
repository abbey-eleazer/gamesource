<template>
    <div class="signin_container"> 
    
        <!-- loader -->

        <div class="text-center" v-show="userStore.loading">
            <v-progress-circular
                indeterminate
                color="primary"
                />
        </div>

        <Form @submit="onSubmit" :validation-schema="formSchema" v-show="!userStore.loading">
            <h1 v-text="!type ? 'Sign in' : 'Register'"></h1>

            <div class="from-group">
                <Field name="email"
                 :value="'abbey@gmail.com'" 
                 v-slot="{field, errors, errorMessage}"
                 >
                    <input 
                     type="text"
                     class="form-control"
                     placeholder="Enter your email"
                     v-bind="field"
                     :class="{'is-invalid' : errors.length !== 0}"
                     >

                     <div class="input_alert" v-if="errors.length !== 0">
                        {{  errorMessage }}
                     </div>
                </Field>
            </div>

            <div class="from-group">
                <Field name="password"
                 :value="'abbey123'" 
                 v-slot="{field, errors, errorMessage}"
                 >
                    <input 
                     type="password"
                     class="form-control"
                     placeholder="Enter your password"
                     v-bind="field"
                     :class="{'is-invalid' : errors.length !== 0}"
                     >

                     <div class="input_alert" v-if="errors.length !== 0">
                        {{  errorMessage }}
                     </div>
                </Field>
            </div>

            <button type="submit" class="btn mb-3 btn-block" v-text="!type ? 'Sign in' : 'Register'"></button>

            <hr/>

            <div class="form_swap" @click="type = !type"> 
                <span v-if="type">
                    Already have an account? <strong>Sign in</strong>
                </span>
                <span v-else>
                    Don't have an account? <strong>Register</strong>
                </span>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup'
import { ref } from 'vue';

//AUth store
import { useUserStore } from '@/stores/user.js'

    const userStore = useUserStore()

    const type = ref(false)

    const formSchema = yup.object({
        email:yup.string()
        .required('Email is required')
        .email('Not a valid email'),
        password:yup.string()
        .required('Password is required')
    })

    function onSubmit (values, { resetForm }) {
        if (type.value) {
            userStore.register(values).then(() => {
                resetForm()
            })
        } else {
            userStore.signin(values).then(() => {
                resetForm()
            })
        }
    }
</script>

<style  scoped>

</style>