/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';

export default function Example() {

  const [refs, setRefs] = useState([]);  
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    async function fetchRefs() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/abenete"
        );
        setRefs([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRefs();
  }, [open]);

  function mesConvertido(arg){
    switch (arg){
        case "1":
            return 'Jan'
        case "2":
            return 'Fev'
        case "3":
            return 'Mar'
        case "4":
            return 'Abr'
        case "5":
            return 'Mai'
        case "6":
            return 'Jun'
        case "7":
            return 'Jul'
        case "8":
            return 'Ago'
        case "9":
            return 'Set'
        case "10":
            return 'Out'
        case "11":
            return 'Nov'
        case "12":
            return 'Dez'
        default:
    }

}

  

  return (
      <>
      <button
            type="button"
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                onClick={() => setOpen(true)}
            > Exportar </button>
            
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-max sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referência
                  </th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200" 
                  >
                {refs.sort((a, b) => a.author.localeCompare(b.author)).map((ref) => (
                  <tr key={ref._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                            <div className="mt-1 font-serif ">{ref.author.split(' ').slice(-1).join(' ').toUpperCase()}, {ref.author.split(' ').slice(0, -1).join(' ')}.
                                {` ${ref.title.toUpperCase()}`}
                                {ref.subtitle.length !== 0 ? `: ${ref.subtitle}` : <></>}. <span className="font-bold">{ref.revista}</span>,
                                {` ${ref.local}`}, v. {ref.volume}, n. {ref.fascicle}, p. {ref.initialPage}-{ref.finalPage},
                                {` ${mesConvertido(ref.month)}`}. {ref.year}. 
                            </div>
                        </div>
                      </div>
                    </td>
                    </tr>))}
                    </tbody>
                  </table> 
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Fechar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  );
}