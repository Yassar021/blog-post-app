type Props = {
  title: string;
  name: string;
}

const Input = ({title, name} : Props) => {
  return(
    <>
      <div className="px-4 mb-4 justify-center text-center">
        <label htmlFor="text" className="block text-sm/6 font-medium text-gray-900">
          {title}
        </label>
        <div className="my-2">
          <div className="flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="token"
              name="token"
              type="text"
              defaultValue={title}
              className="block min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Input