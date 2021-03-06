import axios from "axios";
import { useState } from "react";

export function PostRef() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    subtitle: "",
    local: "",
    revista: "",
    fascicle: "",
    volume: "",
    month: "",
    year: "",
    initialPage: "",
    finalPage: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`O campo ${key} foi preenchido incorretamente`);
        return;
      }
    }

    try {
      await axios.post("https://ironrest.herokuapp.com/abenete", form).then(
        setForm({
          author: "",
          title: "",
          subtitle: "",
          local: "",
          revista: "",
          fascicle: "",
          volume: "",
          month: "",
          year: "",
          initialPage: "",
          finalPage: "",
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='pt-5'>
      {/* Div com os textos informativos: */}

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-rows md:gap-6'>
          <div className='md:col-span'>
            <div className='pt-0 px-4 '>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Informações do artigo utilizado
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Por favor, preencha todos os campos para gerar a referência
                bibliográfica
              </p>
            </div>
          </div>

          {/* Formulário: */}

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
                        placeholder='João Silva'
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
                        Título do artigo
                      </label>

                      <input
                        type='text'
                        name='title'
                        placeholder='Um estudo sobre como títulos podem ser longos'
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
                        Subtítulo do artigo
                      </label>
                      <input
                        type='text'
                        name='subtitle'
                        id='subtitle-artigo'
                        placeholder='Os subtítulos podem ser maiores ainda'
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
                        placeholder='Ironhacker'
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
                        placeholder='São Paulo'
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
                        Fascículo
                      </label>
                      <input
                        type='text'
                        name='fascicle'
                        placeholder='1'
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
                        placeholder='2'
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
                        Mês
                      </label>
                      <input
                        type='text'
                        name='month'
                        id='month'
                        placeholder='1-12'
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
                        placeholder='2022'
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
                        Página Inicial
                      </label>
                      <input
                        type='text'
                        name='initialPage'
                        id='initial-page'
                        placeholder='0'
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
                        Página final
                      </label>
                      <input
                        type='text'
                        name='finalPage'
                        id='final-page'
                        placeholder='30'
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
        </div>
      </div>
    </div>
  );
}
