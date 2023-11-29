'use client'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDSCVb0sfGnaADIRpHnVh5OYsSOrR0dJjU',
    authDomain: 'sample-login-5fb10.firebaseapp.com',
    projectId: 'sample-login-5fb10',
    storageBucket: 'sample-login-5fb10.appspot.com',
    messagingSenderId: '341632924914',
    appId: '1:341632924914:web:8328d17f7d6a2b30e9246b',
  }
  const app = initializeApp(firebaseConfig)

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //   })

  // RHFを使った入力フォームの作成
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <main>
      <div>hello, world</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <label>Password</label>
        <input {...register('password')} />
        <div>
          <button type='submit'>ログイン</button>
        </div>
      </form>
    </main>
  )
}
