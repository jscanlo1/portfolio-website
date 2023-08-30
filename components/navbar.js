import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Synth', href: '/synth'},
  { name: 'Projects', href: '/projects'},
  { name: 'About Me', href: '/about-me'},
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * A function to update the navigation object to the current page.
 * This allows the page to indicate the current (or 'active'), page on the naviagtion bar.
 * 
 * In future, possibly use useLocation
 * @param {String} newTab String declaring the new tab
 */


export default function NavBar() {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-950 hover:bg-zinc-700 hover:text-white   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href

                      return(
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive ? 'bg-zinc-900 text-white' : 'text-zinc-950 hover:bg-zinc-600 hover:text-white hover:drop-shadow-lg  hover:border-r-2 hover:border-b-2 hover:mb-0 hover:ml-[12px] hover:mr-[4px] border-zinc-900',
                          'rounded-md px-3 py-2 text-sm mb-[2px] ml-[18px] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        
                      >
                        {item.name}
                      </Link>
                    )})}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-zinc-900 text-white' : 'text-zinc-950 hover:bg-zinc-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}