'use client'

import { useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ButtonDelete from "../Button/ButtonDelete";
import CardEditPost from "./CardEditPost";

const Card = () => {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <div className="max-w-[450px] max-h-auto p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h6>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        <div className="flex flex-row gap-2 justify-center">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Read more 🧾
          </button>
          <CardEditPost />
          <ButtonDelete />
          {showModal ? (
            <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto md:max-w-md max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Name : Blalala
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Title : Blalala
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-red-500 text-white active:bg-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Card