import React from "react";

export default function Magnum() {
  return (
    <div className="bg-white min-h-screen">
      <header className="w-full border-b">
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-extrabold text-pink-600">
              ≡ magnum
            </div>
            <a href="#" className="text-pink-500 text-sm font-semibold pl-20 pt-2 font-bold">
              Magnum Corp. <span className="inline-block ml-1"><img className="w-3" src="https://cdn-icons-png.flaticon.com/512/10009/10009149.png" alt="" /></span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-[20px] px-4 py-5 w-[500px]">
              <span className="text-gray-500 mr-2"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ababab" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
              <input
                type="text"
                placeholder="Поиск"
                className="bg-transparent w-full focus:outline-none text-sm"
              />
              <select className="bg-transparent text-sm text-gray-500">
                <option>по скидкам</option>
              </select>
            </div>

            <div className="flex items-center border rounded-[20px] px-5 py-5 gap-3 text-sm font-semibold text-gray-500">
              <span className="text-pink-500 text-1xl font-bold">Алматы</span>
              <span className="border-l h-4"></span>
              <span className="text-pink-500 font-bold">RU</span>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-6 px-6 py-2 text-sm font-medium text-gray-700">
          <a href="#" className="text-purple-600">
            Каталог скидок
          </a>
          <a href="#" className="text-orange-500">
            Акции
          </a>
          <a href="#">Magnum Club</a>
          <a href="#">Magnum Go</a>
          <a href="#">Наши бренды</a>
          <a href="#">Готовим с Magnum</a>
          <a href="#">Магазины</a>
          <a href="#">Контакты</a>
          <a href="#">О компании</a>
        </nav>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -25%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn.metro-group.com/kz/kz_pim_34382001001_01.png?w=400&h=400&mode=pad"
              alt="Макароны Султан"
              className="h-24 object-contain w-100"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Макарон
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            МАКАРОНЫ "СУЛТАН" В АССОРТИ...
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              339 тг
            </span>
            <span className="line-through text-gray-400 text-sm">454 тг</span>
          </div>
        </div>

        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -35%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://carefood.kz/upload/iblock/cf2/5l5prb1q8bkuiaqk86vsmby87mycfya4/chay_piala_gold_ind_gran_500gr.jpg"
              alt="Чай Пиала"
              className="h-24 object-contain"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Чай
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            ЧАЙ "ПИАЛА" GOLD 25 ШТ
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              309 тг
            </span>
            <span className="line-through text-gray-400 text-sm">479 тг</span>
          </div>
        </div>
        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -25%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn.metro-group.com/kz/kz_pim_34382001001_01.png?w=400&h=400&mode=pad"
              alt="Макароны Султан"
              className="h-24 object-contain w-100"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Макарон
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            МАКАРОНЫ "СУЛТАН" В АССОРТИ...
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              339 тг
            </span>
            <span className="line-through text-gray-400 text-sm">454 тг</span>
          </div>
        </div>

        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -35%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://carefood.kz/upload/iblock/cf2/5l5prb1q8bkuiaqk86vsmby87mycfya4/chay_piala_gold_ind_gran_500gr.jpg"
              alt="Чай Пиала"
              className="h-24 object-contain"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Чай
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            ЧАЙ "ПИАЛА" GOLD 25 ШТ
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              309 тг
            </span>
            <span className="line-through text-gray-400 text-sm">479 тг</span>
          </div>
        </div>
        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -25%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn.metro-group.com/kz/kz_pim_34382001001_01.png?w=400&h=400&mode=pad"
              alt="Макароны Султан"
              className="h-24 object-contain w-100"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Макарон
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            МАКАРОНЫ "СУЛТАН" В АССОРТИ...
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              339 тг
            </span>
            <span className="line-through text-gray-400 text-sm">454 тг</span>
          </div>
        </div>

        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -35%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://carefood.kz/upload/iblock/cf2/5l5prb1q8bkuiaqk86vsmby87mycfya4/chay_piala_gold_ind_gran_500gr.jpg"
              alt="Чай Пиала"
              className="h-24 object-contain"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Чай
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            ЧАЙ "ПИАЛА" GOLD 25 ШТ
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              309 тг
            </span>
            <span className="line-through text-gray-400 text-sm">479 тг</span>
          </div>
        </div>
        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -25%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn.metro-group.com/kz/kz_pim_34382001001_01.png?w=400&h=400&mode=pad"
              alt="Макароны Султан"
              className="h-24 object-contain w-100"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Макарон
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            МАКАРОНЫ "СУЛТАН" В АССОРТИ...
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              339 тг
            </span>
            <span className="line-through text-gray-400 text-sm">454 тг</span>
          </div>
        </div>

        <div className="relative border rounded-2xl shadow p-4 bg-white">
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            -35%
          </div>
          <div className="flex justify-center mb-2">
            <img
              src="https://carefood.kz/upload/iblock/cf2/5l5prb1q8bkuiaqk86vsmby87mycfya4/chay_piala_gold_ind_gran_500gr.jpg"
              alt="Чай Пиала"
              className="h-24 object-contain"
            />
          </div>
          <div className="text-xs text-blue-600 font-semibold mb-1">
            М это Чай
          </div>
          <div className="text-sm font-semibold leading-tight mb-1">
            ЧАЙ "ПИАЛА" GOLD 25 ШТ
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-300 text-black font-bold px-2 py-1 rounded">
              309 тг
            </span>
            <span className="line-through text-gray-400 text-sm">479 тг</span>
          </div>
        </div>
      </div>
    </div>
  );
}
