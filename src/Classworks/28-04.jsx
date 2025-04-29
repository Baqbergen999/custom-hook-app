import React from "react";


const Tailwind = () => {
    return(
        <div>
            <main className="container mx-auto px-40 py-10">
                <h1 className="text-3xl">Компании-работодатели</h1>
                <p className="font-10 my-5">Познакомьтесь нашими партнёрами-работодателями и совместными программами подготовки.</p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-200  rounded-lg shadow-md p-10">
                        <h1 className="text-3xl mb-3">слетать.py</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad unde maiores voluptatem nostrum porro assumenda ab dolorum ullam alias! Natus repellat id dolorem repellendus cupiditate!</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Программа</button>
                    </div>
                    <div className="bg-gray-200  rounded-lg shadow-md  p-10">
                        <h1 className="text-3xl mb-3">Максимум</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad unde maiores voluptatem nostrum porro assumenda ab dolorum ullam alias! Natus repellat id dolorem repellendus cupiditate!</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Программа</button>
                    </div>
                    <div className="bg-gray-200  rounded-lg shadow-md p-10">
                        <h1 className="text-3xl mb-3">Контур</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad unde maiores voluptatem nostrum porro assumenda ab dolorum ullam alias! Natus repellat id dolorem repellendus cupiditate!</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Программа</button>
                    </div>
                    <div className="bg-gray-200  rounded-lg shadow-md p-10">
                        <h1 className="text-3xl mb-3">Nauka</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad unde maiores voluptatem nostrum porro assumenda ab dolorum ullam alias! Natus repellat id dolorem repellendus cupiditate!</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Программа</button>
                    </div>
                    <div className="bg-gray-200  rounded-lg shadow-md p-10">
                        <h1 className="text-3xl mb-3">Открытые решение</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad unde maiores voluptatem nostrum porro assumenda ab dolorum ullam alias! Natus repellat id dolorem repellendus cupiditate!</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Программа</button>
                    </div>
                    <div className="bg-gray-800  rounded-lg shadow-md p-10">
                        <h1 className="text-start mt-10 text-white text-3xl">And yet a <br />lot of companies</h1>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Tailwind;