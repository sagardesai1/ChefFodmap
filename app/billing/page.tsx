'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Billing() {
  const [yearly, setYearly] = useState<boolean>(false)
  return (
      <section className="bg-white dark:bg-gray-900 mt-12">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pricing plans for teams of all sizes</h2>
                  <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Choose an affordable plan that’s packed with the best features for your needs. Cancel at anytime.</p>
              </div>
              <div className="flex justify-center max-w-[12rem] m-auto mb-8 lg:mb-10">
                  <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full border border-gray-200 dark:border-gray-600">
                      <span className="absolute inset-0 m-1 pointer-events-none">
                          <span className={`absolute inset-0 w-1/2 bg-green-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${yearly ? 'translate-x-full' : 'translate-x-0'}`}></span>
                      </span>
                      <button
                          className={`relative flex-1 text-sm font-semibold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${yearly ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`}
                          onClick={() => setYearly(false)}
                      >
                          Monthly
                      </button>
                      <button
                          className={`relative flex-1 text-sm font-semibold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${yearly ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                          onClick={() => setYearly(true)}
                      >
                          Yearly -20%<span className={`${yearly ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}></span>
                      </button>
                  </div>
              </div>
              {!yearly ? (
                  <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mx-20">
                      {/* Pricing Card */}
                      <div className="flex flex-col p-6 mx-auto max-w-sm text-gray-900 bg-white rounded-2xl border border-gray-200 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                          <h3 className="mb-4 text-xl font-semibold">Essential</h3>
                          <p className="font-light text-gray-500 sm:text-md dark:text-gray-400">Get Started with Low FODMAP Cooking.</p>
                          <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">$2</span>
                              <span className="text-gray-500 dark:text-gray-400">/month</span>
                          </div>
                          {/* List */}
                          <ul role="list" className="mb-8 space-y-4 text-left">
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Access to meal types</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Choose preferred ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Exclude unwanted ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Enjoy up to <span className="font-semibold">50 recipes</span> monthly</span>
                              </li>
                          </ul>
                          <Link href="/signup" className="btn text-green-500 border-green-300 hover:bg-green-50 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg font-semibold">Buy plan</Link>
                      </div>
                      {/* Pricing Card */}
                      <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white rounded-2xl border-2 border-green-500 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                          <div className="flex flex-row justify-between items-center">
                              <h3 className="mb-4 text-xl font-semibold text-green-500">Premium</h3>
                              <h3 className="mb-4 text-sm font-semibold text-green-500 bg-green-100 rounded-full px-3 py-1.5">Most popular</h3>
                          </div>
                          <p className="font-light text-gray-500 sm:text-md dark:text-gray-400">Unlock Unlimited Low FODMAP Recipes.</p>
                          <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">$5</span>
                              <span className="text-gray-500 dark:text-gray-400">/year</span>
                          </div>
                          {/* List */}
                          <ul role="list" className="mb-8 space-y-4 text-left">
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Access to meal types</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Choose preferred ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Exclude unwanted ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Enjoy <span className="font-semibold">unlimited</span> monthly</span>
                              </li>
                          </ul>
                          <Link href="/signup" className="btn text-white bg-green-500 hover:bg-green-600 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg font-semibold">Buy plan</Link>
                      </div>

                  </div>
              ) : (
                  <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mx-20">
                      {/* Pricing Card */}
                      <div className="flex flex-col p-6 mx-auto max-w-sm text-gray-900 bg-white rounded-2xl border border-gray-200 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                          <h3 className="mb-4 text-xl font-semibold">Essential</h3>
                          <p className="font-light text-gray-500 sm:text-md dark:text-gray-400">Get Started with Low FODMAP Cooking.</p>
                          <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">$21</span>
                              <span className="text-gray-500 dark:text-gray-400">/year</span>
                          </div>
                          {/* List */}
                          <ul role="list" className="mb-8 space-y-4 text-left">
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Access to meal types</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Choose preferred ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Exclude unwanted ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Enjoy up to <span className="font-semibold">50 recipes</span> monthly</span>
                              </li>
                          </ul>
                          <Link href="/signup" className="btn text-green-500 border-green-300 hover:bg-green-50 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg font-semibold">Buy plan</Link>
                      </div>
                      {/* Pricing Card */}
                      <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white rounded-2xl border-2 border-green-500 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                          <div className="flex flex-row justify-between items-center">
                              <h3 className="mb-4 text-xl font-semibold text-green-500">Premium</h3>
                              <h3 className="mb-4 text-sm font-semibold text-green-500 bg-green-100 rounded-full px-3 py-1.5">Most popular</h3>
                          </div>
                          <p className="font-light text-gray-500 sm:text-md dark:text-gray-400">Unlock Unlimited Low FODMAP Recipes.</p>
                          <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">$48</span>
                              <span className="text-gray-500 dark:text-gray-400">/month</span>
                          </div>
                          {/* List */}
                          <ul role="list" className="mb-8 space-y-4 text-left">
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Access to meal types</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Choose preferred ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Exclude unwanted ingredients</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                  <span>Enjoy <span className="font-semibold">unlimited</span> monthly</span>
                              </li>
                          </ul>
                          <Link href="/signup" className="btn text-white bg-green-500 hover:bg-green-600 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg font-semibold">Buy plan</Link>
                      </div>
                  </div>
              )}
          </div>
      </section>
  )

}