import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditarRef() {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    author: "",
    title: "",
    subtitle: "",
    local: null,
    revista: "",
    fascicle: "",
    volume: "",
    month: "",
    year: "",
    initialPage: "",
    finalPage: "",
  });

  useEffect(() => {
    async function fetchRef() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/abenete/${params.id}`
        );
        setForm({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }

    fetchRef();
  }, [params.id]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    delete form._id;
    axios
      .put(`https://ironrest.herokuapp.com/abenete/${params.id}`, form)
      .then((result) => navigate(`/colecao`))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='mt-5 md:mt-0 md:col-span-2'>
      <form onSubmit={handleSubmit}>
        <div className='shadow overflow-hidden sm:rounded-md'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className='grid grid-cols-10 gap-6'>
              <div className='col-span-10 sm:col-span-2'>
                <label
                  htmlFor='author-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Nome do autor
                </label>
                <input
                  type='text'
                  name='author'
                  id='author-name'
                  value={form.author}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-10 sm:col-span-4'>
                <label
                  htmlFor='titulo-artigo'
                  className='block text-sm font-medium text-gray-700'
                >
                  T??tulo do artigo
                </label>

                <input
                  type='text'
                  name='title'
                  id='titulo-artigo'
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div className='col-span-10 sm:col-span-4'>
                <label
                  htmlFor='subtitle'
                  className='block text-sm font-medium text-gray-700'
                >
                  Subt??tulo do artigo
                </label>
                <input
                  type='text'
                  name='subtitle'
                  id='subtitle-artigo'
                  value={form.subtitle}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-5 sm:col-span-2'>
                <label
                  htmlFor='revista-nome'
                  className='block text-sm font-medium text-gray-700'
                >
                  Nome da Revista
                </label>
                <input
                  type='text'
                  name='revista'
                  id='revista-nome'
                  value={form.revista}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-5 sm:col-span-2'>
                <label
                  htmlFor='local-city'
                  className='block text-sm font-medium text-gray-700'
                >
                  Local (Cidade)
                </label>
                <input
                  type='text'
                  name='local'
                  id='local-city'
                  value={form.local}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='fascicle-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Fasc??culo
                </label>
                <input
                  type='text'
                  name='fascicle'
                  id='fascicle-number'
                  value={form.fascicle}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='volume-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Volume
                </label>
                <input
                  type='text'
                  name='volume'
                  id='volume-number'
                  value={form.volume}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='month'
                  className='block text-sm font-medium text-gray-700'
                >
                  M??s
                </label>
                <input
                  type='text'
                  name='month'
                  id='month'
                  value={form.month}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='year'
                  className='block text-sm font-medium text-gray-700'
                >
                  Ano
                </label>
                <input
                  type='text'
                  name='year'
                  id='year'
                  value={form.year}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-3 sm:col-span-1'>
                <label
                  htmlFor='initial-page'
                  className='block text-sm font-medium text-gray-700'
                >
                  P??gina Inicial
                </label>
                <input
                  type='text'
                  name='initialPage'
                  id='initial-page'
                  value={form.initialPage}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='col-span-3 sm:col-span-1'>
                <label
                  htmlFor='final-page'
                  className='block text-sm font-medium text-gray-700'
                >
                  P??gina final
                </label>
                <input
                  type='text'
                  name='finalPage'
                  id='final-page'
                  value={form.finalPage}
                  onChange={handleChange}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
