'use client'

import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../src/graphql/mutations';
import config from '../../amplifyconfiguration.json';
import { useSearchParams } from 'next/navigation';
import { autoSignIn } from 'aws-amplify/auth';
Amplify.configure(config);


export default function ConfirmSignup() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const client = generateClient();

  async function handleSignUpConfirmation({
    username,
    confirmationCode
  }: ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });
      
      if (nextStep.signUpStep === "COMPLETE_AUTO_SIGN_IN") {
        const signInOutput = await autoSignIn();
        if (signInOutput.isSignedIn === true) {
          await createNewUser(username);
          router.replace(`/homepage`);
        } 
      }

    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async function createNewUser(username: string) {
    try {
      // Perform a GraphQL mutation to create a new user record
      const createUserResponse = await client.graphql({
        query: mutations.createUsers,
        variables: {
          input: {
            username: username 
          }
        }
      }) as any;

      const userId = createUserResponse.data.createUsers.id;

      // Perform a GraphQL mutation to create a subscription for the user
      await client.graphql({
        query: mutations.createSubscriptions, 
        variables: {
          input: {
            subscription_status: "INACTIVE",
            usersID: userId
          }
        }
      });
    } catch (error) {
      console.log('error creating new user or subscription:', error);
    }
  }
  
  

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 pb-2">Complete Registration</h3>
            <p className="p">Enter the 6 digit confirmation code sent to your email.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const confirmationCode = target.elements.namedItem('confirmationCode') as HTMLInputElement;
              const username = searchParams.get('username') as string;
   
              handleSignUpConfirmation({
                username: username,
                confirmationCode: confirmationCode.value
              });
            }}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="confirmationCode">Code: <span className="text-red-600">*</span></label>
                  <input id="confirmationCode" type="text" className="form-input w-full text-gray-800" placeholder="Enter your confimation code" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-green-600 hover:bg-green-700 w-full">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}