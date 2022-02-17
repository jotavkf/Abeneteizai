import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "../../Components/Modal"

export default function Coleção(props){

    
    const [refs, setRefs] = useState([]);
    const [rerender, setRerender] = useState(true);

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
        setRerender(false);
      }, [rerender]);

      

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

    async function handleDelete(arg) {
        try {
          await axios.delete(
            `https://ironrest.herokuapp.com/abenete/${arg}`
          );
          setRerender(true);
        } catch (error) {
          console.error(error);
        }
      }


    return( <>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Referência
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Comandos
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
                    <td className="flex justify-evenly px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/editar-ref/${ref._id}`}>
          <button type="button" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">Editar</button>
        </Link>
          <button type="button" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none" onClick={()=> {handleDelete(ref._id)}}>Remover</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Todas as referências estão certas?</span>
          <span className="block text-indigo-600">Hora de criar a sua lista!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="ml-3 inline-flex rounded-md shadow">
            
              <Modal/>
            
          </div>
        </div>
      </div>
    </div>
</>
)}