'use client'

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/server/users";

type Props = {
  token: string | null;
  postId: number;
}

const ButtonDelete = ({postId, token} : Props) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // logic delete a post with tanstack
  const {mutate} = useMutation({
    mutationFn: () => deletePost({postId, token}),
    onError: (err) => {
      alert(err);
    },
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ['post'] })     
      alert("success delete post");
    },
  })

  // handle delete after press button delete
  const handleDelete = () => {
    mutate();
  }

  return(
    <>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Delete ❌
        </button>
        {showModal ? (
          <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto min-w-sm sm:max-w-sm md:max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure to delete this post?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-transparent text-blue-500 active:bg-transparent background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </>
  )
}

export default ButtonDelete