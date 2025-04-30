import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-3xl font-bold text-blue-600">
            kolesa.kz
          </a>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Избранное <span className="text-blue-600">(1)</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Сообщения
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Пополнить счёт <span className="text-blue-600">(0 ед.)</span>
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
                Кабинет{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
              </svg>
              Подать объявление
            </a>
          </div>
        </div>
        <nav className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex gap-6 overflow-x-auto">
            {[
              { text: "Машины", active: true },
              { text: "Авто от Kolesa.kz"},
              { text: "Новые авто",},
              { text: "Запчасти", },
              { text: "Ремонт и услуги"},
              { text: "Коммерческие", },
              { text: "Почитать", },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-1 px-3 py-1 rounded ${
                  item.active
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="min-h-screen bg-white font-sans text-sm text-gray-900">

        <main className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-[22px] font-medium mb-1">Toyota Camry 2023 г.</h1>
          <div className="text-[28px] font-bold mb-4">17 400 000 ₸</div>

          <div className="flex flex-col lg:flex-row gap-6">

            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2 text-[15px]">
                <div className="bg-[#f8f8f8] px-2 py-1 rounded text-[#5c5c5c]">
                  Ежемесячный платеж
                </div>
                <div className="bg-[#ffdc60] font-semibold px-2 py-1 rounded">
                  509 062 ₸
                </div>
              </div>
              <div className="text-[15px] text-[#6f6f6f]">
                Первоначальный взнос:{" "}
                <span className="text-black font-medium">1 740 000 ₸</span>
              </div>
              <button className="bg-[#f03c2e] text-white w-[230px] py-[10px] text-[15px] rounded hover:bg-red-600">
                Рассчитать Кредит
              </button>

              <div className="grid grid-cols-2 gap-y-2 text-[14px] text-[#333] pt-4">
                <div>
                  <strong>Город:</strong> Алматы
                </div>
                <div>
                  <strong>Поколение:</strong> 2020 - н.в. XV70 рестайлинг (V75)
                </div>
                <div>
                  <strong>Кузов:</strong> Седан
                </div>
                <div>
                  <strong>Объём двигателя:</strong> 2.5 (бензин)
                </div>
                <div>
                  <strong>Пробег:</strong> 62 000 км
                </div>
                <div>
                  <strong>Коробка передач:</strong> Автомат
                </div>
                <div>
                  <strong>Привод:</strong> Передний привод
                </div>
                <div>
                  <strong>Руль:</strong> Слева
                </div>
                <div>
                  <strong>Цвет:</strong> Белый металлик
                </div>
                <div>
                  <strong>Растаможен в Казахстане:</strong> Да
                </div>
              </div>

              <div className="pt-6 text-[14px] text-[#444]">
                <div className="font-semibold mb-1">Комментарий продавца</div>
                <p>
                  Второй хозяин. Машина Дилерская. Никаких повреждении и ДТП. В
                  родном окрасе
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[600px]">
              <img
                src="https://carvizor.ru/upload/resize_cache/iblock/996/822_9999999_1/image001.jpg"
                alt="Toyota Camry"
                className="w-full h-[360px] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;

