export default function Example() {

    const teste = {
		"_id": "620c36d7ee98680017df5afa",
		"author": "Holger M Kienle",
		"title": "It's About Time to Take JavaScript (More) Seriously",
		"subtitle": "teste",
		"local": "[S.l.]",
		"revista": "IEEE Software",
		"fascicle": "3",
		"volume": "27",
		"month": "5",
		"year": "2010",
		"initialPage": "60",
		"finalPage": "62"
	}

    let mesConvertido = '';
    
    switch (teste.month){
        case "1":
            mesConvertido='Jan'
            break;
        case "2":
            mesConvertido='Fev'
            break;
        case "3":
            mesConvertido='Mar'
            break;
        case "4":
            mesConvertido='Abr'
            break;
        case "5":
            mesConvertido='Mai'
            break;
        case "6":
            mesConvertido='Jun'
            break;
        case "7":
            mesConvertido='Jul'
            break;
        case "8":
            mesConvertido='Ago'
            break;
        case "9":
            mesConvertido='Set'
            break;
        case "10":
            mesConvertido='Out'
            break;
        case "11":
            mesConvertido='Nov'
            break;
        case "12":
            mesConvertido='Dez'
            break;
        default:
    }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Lista de referências</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Ordem alfábetica</p>
      </div>
      <div className="flex flex-col align-center border-t border-gray-200">
        {/* <dl>  */}
          <div className="bg-white px-4 py-5">
            <div className="mt-1">{teste.author.split(' ').slice(-1).join(' ').toUpperCase()}, {teste.author.split(' ').slice(0, -1).join(' ')}.
            {` ${teste.title.toUpperCase()}`}
            {teste.subtitle.length !== 0 ? `: ${teste.subtitle}` : <></>}. <b>{teste.revista}</b>,
            {` ${teste.local}`}, v. {teste.volume}, n. {teste.fascicle}, p. {teste.initialPage}-{teste.finalPage},
            {` ${mesConvertido}`}. {teste.year}. 
            </div>
          </div>
          
          {/* <div className="bg-white px-4 py-5">
            <div className="mt-1 text-sm text-gray-900">Backend Developer</div>
          </div>
        </dl> */}
        
      </div>
    </div>
  )
}