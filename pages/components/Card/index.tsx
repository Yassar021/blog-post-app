'use client'

import { useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ButtonDelete from "../Button/ButtonDelete";
import CardEditPost from "./CardEditPost";

type Props = {
  name: string;
  title: string;
  body: string;
}

const Card = ({name, title, body}: Props) => {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <div className="max-w-[450px] max-h-auto p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h6>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {body}
        </p>
        <button
            className="inline-flex items-center px-2 py-2 text-[12px] font-medium text-center text-blue-500 bg-transparent rounded-lg"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Read more 🧾
          </button>

        <div className="flex flex-row gap-2 justify-center">
          <CardEditPost body={body} title={title} name={name} />
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
                      Detail Post
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
                      Title : {title}
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      description : {body}
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