import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { FaStore, FaIndustry, FaBook, FaPlane, FaNewspaper } from 'react-icons/fa';
import React from 'react';
import logo from '../assets_invista_cg/logo.png';
import { useState } from 'react';
import TermosDeUso from './PopUp/aceitarTemos';

const navigation = [
  { name: 'Comércio', href: '/comercio', current: false, icon: FaStore },
  { name: 'Indústria', href: '/industria', current: false, icon: FaIndustry },
  { name: 'Educação', href: '/educacao', current: false, icon: FaBook },
  { name: 'Turismo', href: '/turismo', current: false, icon: FaPlane },
  { name: 'Notícias', href: '/noticias', current: false, icon: FaNewspaper }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({numero}) {

  navigation.forEach((e)=>{
      e.current = false
  })

  if(numero>=0 && numero <=5 ){
    navigation[numero].current = true;
  }

  return (
   
    <Disclosure as="nav" className="bg-black border-b-2 border-dashed border-white" >
      {({ open }) => (
        <>
          <div className="mx-auto sm:mx-12  mx-0 px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex HeightAltura items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              <div className="flex  flex-1 items-center justify-end sm:items-stretch  sm:justify-start " >
                <div className="flex flex-shrink-0 items-center  lg:mr-10 mr-2 text-white">
                  <Link to={"/"}>
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Logo Do Site"
                    />
                  </Link>
                </div>
                
                <div className="hidden sm:ml-6 flex-1 flex sm:block ">
                  <div className="flex items-center  justify-between ">
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon className="inline-block  mb-1 w-10   " />
                          {item.name}
                      </Link>
                    ))}
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
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon className="inline-block mr-2 " />
                
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
