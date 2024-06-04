import DropdownInput from "../Input/DropdowInput";
import { useState } from 'react'

const PROPERTYS = [
    { name: 'Bodega' },
    { name: 'Casas' },
    { name: 'Departamentos' },
    { name: 'Locales' },
    { name: 'Oficinas' },
    { name: 'Terrenos' }
];

export default function Welcome() {

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleOptionSelect = (option) => {
      console.log('Selected option:', option);
    };

    const [typeProperty, setTypeProperty] = useState(PROPERTYS)
    const [bgChange, setBgChange] = useState(null)

    const handleChangeClick = (index) => {
        setBgChange(index)
    }

    return (
        <section className="max-w-screen-xl mx-auto py-16 grid justify-center dark:text-white">
            <form className="flex flex-col gap-6 border bg-transparent  border-gray-200 p-5 rounded-lg">
                <div className="text-center">
                    <h1 className="text-black text-bold text-5xl dark:text-white mb-10"> Propiedades Carlitos </h1>
                    <span className="text-2xl text-bold mt-5 pt-5">¿Qué buscas?</span>
                    <ul className="flex flex-row gap-5 pt-5">
                        {
                            typeProperty.map( (prop, index) => {
                                return (
                                    <li  
                                        onClick={() => handleChangeClick(index)} 
                                        key={index} 
                                        className={`p-2 border rounded-lg cursor-pointer ${
                                            bgChange === index ? 'bg-blue-500 text-white' : 'bg-transparent'
                                          }`}
                                    >
                                    {prop.name}
                                  </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="flex flex-row gap-4">
                    <label>
                        <span>Sector: </span>
                        <DropdownInput options={options} onOptionSelect={handleOptionSelect} />
                    </label>
                    <label>
                        <span>Para: </span>
                        <input 
                            className="input-box"
                            type="text" 
                        />
                    </label>
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver propiedades</button>
            </form>
        </section>
    )
}