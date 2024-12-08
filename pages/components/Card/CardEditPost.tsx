'use client'

import { useState } from "react"
import Input from "../Input";
import TextArea from "../Input/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "@/server/users";
import { Button } from "antd";

type Props = {
  title: string;
  body: string;
  postId: number;
  token: string | null;
}

const CardEditPost = ({ title, body, postId, token}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [newBody, setBody] = useState({body, title});
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  // logic edit data with tanstack
  const {mutate} = useMutation({
    mutationFn: () => editPost({token, body: newBody, postId}),
    onError: (err) => {
      alert(err);
      setLoading(false);
    },
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ['post'] })  
      alert("sucess to edit data")
      setLoading(false);
    }
  });

  // handle edit post data after press button save
  const handleEdit = () => {
    setLoading(true);
    mutate();
  }
  return(
    <>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit Post ✏
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
                    Edit Post
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
                  <Input value={newBody.title} onChange={(e) => setBody({...newBody, title: e.target.value})} title="Title" />
                  <TextArea value={newBody.body} onChange={(e) => setBody({...newBody, body: e.target.value})} />
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
                    onClick={handleEdit}
                    loading={isLoading}
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
    </>
  )
}

export default CardEditPost