'use client'

import { useState } from "react"
import Input from "../Input";
import TextArea from "../Input/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/server/users";
import { Button } from "antd";

type Props = {
  token: string | null;
  userId: string | null;
}

const CardAddPost = ({ token, userId } : Props) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();
  const [description, setDescription] = useState("");

  // logic create a post
  const {mutate} = useMutation({
    mutationFn: () => createPost({userId, token, body: {body:description, title}}),
    onError: (err) => {
      alert(err);
      setLoading(false);
    },
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ['post'] })  
      alert("sucess make a post");
      setLoading(false);
      setTitle("");
      setDescription("");
    } 
  });

  // handle save post after press button save
  const handleSave = () => {
    setLoading(true);
    mutate();
  }

  return(
    <>
      <div className="flex flex-row items-center text-center mx-auto p-4 justify-between max-w-6xl mb-2 overflow-auto scroll-smooth focus:scroll-auto w-[100%] mt-4">
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-gray-700">
          Welcome.....</h4>
        </div>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Post ➕
        </button>
        {showModal ? (
          <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto w-full sm:w-9/12 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Post
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
                <div className="relative p-6 flex-auto text-center">
                  <Input onChange={(e) => setTitle(e.target.value)} value={title} title="Title" />
                  <TextArea onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    className="bg-red-500 text-white active:bg-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-500 text-white active:bg-blue-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    loading={isLoading}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default CardAddPost