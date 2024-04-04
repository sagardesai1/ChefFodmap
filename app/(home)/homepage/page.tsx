'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const meals = [
  { name: 'Breakfast' },
  { name: 'Lunch' },
  { name: 'Snack' },
  { name: 'Dinner' },
]

export default function Home() {
  const [selected, setSelected] = useState(meals[0]);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-30 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Generate a recipe.</h2>
          </div>
          {/* Form */}
          <div className="flex flex-row">
            <div className="w-1/3">
              <form>
                <div className="flex justify-between">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Meal Type:</label>
                </div>
                <div className="mb-4">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded border-gray-300 bg-white py-3 px-4 pr-10 text-left leading-6 border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block text-base truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {meals.map((mealType, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                                }`
                              }
                              value={mealType}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate text-base ${selected ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {mealType.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                      </svg>
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Enter any preferred ingredients seperated by a comma:</label>
                    </div>
                    <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="ex: oats, blueberry, etc." />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Enter any dietary restrictions seperated by a comma:</label>
                    </div>
                    <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="ex: oats, blueberry, etc." />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-green-600 hover:bg-green-700 w-full">Generate</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-col py-10 px-16 w-full ml-20 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <h4 className="h4 pb-4 text-center">Title</h4>
              <p className="pb-4 text-center font-semibold">Description</p>
              <div className="flex flex-row justify-evenly pb-8">
                <p className="font-semibold">Prep Time: </p>
                <p className="font-semibold">Cook Time: </p>
                <p className="font-semibold">Servings: </p>
              </div>
              <h4 className="h4 pb-8">Ingredients</h4>
              <h4 className="h4 pb-12">Cooking Steps</h4>
              <p className="p pb-6 text-center font-semibold">Did you like the recipe?</p>
              <div className="flex flex-row justify-around">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
