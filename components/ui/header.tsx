'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { Amplify } from 'aws-amplify';
import config from '../../app/amplifyconfiguration.json';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Button } from '@aws-amplify/ui-react'
import { signOut } from 'aws-amplify/auth';
import AuthEventListener from '../utils/auth-state';
Amplify.configure(config);

export default function Header() {
  const router = useRouter();
  const [top, setTop] = useState<boolean>(true)
  // const [isSignedIn, setIsSignedIn] = useState<boolean>(localStorage.getItem('isSignedIn') === 'true');
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    const storedIsSignedIn = localStorage.getItem('isSignedIn');
    if (storedIsSignedIn !== null) {
      setIsSignedIn(storedIsSignedIn === 'true');
    }
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  async function handleSignOut() {
    try {
      await signOut();
      router.replace(`/`);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex flex-row items-center shrink-0 mr-4">
            <Logo />
            <h1 className="md:text-xl font-bold ml-2 text-green-500">Chef Fodmap</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {!isSignedIn ? (
                <>
                  <li>
                    <Link href="/pricing" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      <span>Sign up</span>
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <Popover className="relative">
                    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      <span>Menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                              </div>
                              <div>
                                <a href={'/homepage'} className="font-semibold text-gray-900">
                                  Recipe Dashboard
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">Generate your LOWFOD recipes</p>
                              </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                              </div>
                              <div>
                                <a href={'/billing'} className="font-semibold text-gray-900">
                                  Billing
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">Access subscriptions and card details</p>
                              </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                              </div>
                              <div>
                                <Button onClick={handleSignOut} className="font-semibold text-gray-900">
                                  Sign Out
                                  <span className="absolute inset-0" />
                                </Button>
                                <p className="mt-1 text-gray-600">Securly exit the application</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </>
              )}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
      <AuthEventListener onAuthStateChanged={setIsSignedIn} />
    </header>
  )
}
