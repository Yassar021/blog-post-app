type Props = {
  body: string;
}

const TextArea = ({ body }: Props) => {
  return(
    <>
      <div className="px-4 my-4 justify-center text-center">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your body message</label>
        <textarea className="flex items-center rounded-md w-full bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600" defaultValue={body}></textarea>
      </div>
    </>
  )
}

export default TextArea