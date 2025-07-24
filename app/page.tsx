'use client';
import Head from 'next/head';
import { useState, useEffect } from "react";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс активного отзыва
  const reviews = [
    "Отзыв 1: Отличная компания!",
    "Отзыв 2: Быстрая помощь!",
    "Отзыв 3: Рекомендую всем!",
    "Разнообразный и богатый опыт говорит нам, что внедрение современных методик играет важную роль в формировании анализа существующих паттернов поведения. Приятно, граждане, наблюдать, как действия представителей оппозиции, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов."
  ];

  // Автоматическое переключение отзывов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Меняет отзыв каждые 5 секунд

    return () => clearInterval(interval); // Очистка таймера при размонтировании компонента
  }, [reviews.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };



  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#CFDDD3] from-30% to-[#A8C3B3] overflow-x-hidden font-сormorant">
      <Head>
        <title>Глобус С - Бухгалтер всегда на связи</title>
        <meta
          name="description"
          content="Услуги для малого и среднего бизнеса: бухгалтерский учёт, кадровый учёт, электронный документооборот, сверка ЕНС."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow container">


        <div className="flex flex-col sm:flex-row h-svh w-svw bg-gradient-to-br from-[#ddd3cf] to-[#E7E0DD]"//Заглавный блок!!!!!!!!!!!!!!!
        >
          <section
            className="w-full sm:w-1/2 p-4 flex items-center justify-center relative h-1/3 sm:h-auto"
            style={{
              backgroundImage: "url('/bgphotogreen.png')",
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          >
            <div className='w-full h-full absolute bg-gradient-to-t from-[#CFDDD3] to-[#ffffff]/40'></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full opacity-10 md:p-10 z-10"
            >
              <circle cx="100" cy="100" r="100" fill="#0F4AA8" />
              <path
                d="M100 0C45 0 0 45 0 100s45 100 100 100 100-45 100-100S155 0 100 0zm0 180c-44.18 0-80-35.82-80-80S55.82 20 100 20s80 35.82 80 80-35.82 80-80 80z"
                fill="#FFFFFF"
              />
            </svg>
            <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-serif text-white relative z-20 drop-shadow-lg">Глобус С</h1>
          </section>


          <section className="sm:w-1/2 p-4 flex flex-col justify-center mt-10 sm:mt-0 mr-0 sm:mr-4">
            <div className="xl:text-3xl md:text-2xl text-xl text-center font-bold text-[#376D4F] mb-6 tracking-wide drop-shadow-sm">
              <p className='mb-3'>Услуги для малого и среднего бизнеса</p>
              <p>Удалённое ведение бухгалтерии</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:text-lg md:text-base sm:text-sm font-medium text-white">
              <div className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer"
                onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <h3>Бухгалтерский и налоговый учёт</h3>
              </div>
              <div className="bg-gradient-to-r from-[#355834] to-[#4A714D] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer"
                onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <h3>Кадровый учёт и расчёт зарплаты</h3>
              </div>
              <div className="bg-gradient-to-r from-[#6E633D] to-[#8C7A4E] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer"
                onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <h3>Электронный документооборот</h3>
              </div>
              <div className="bg-gradient-to-r from-[#C2A878] to-[#E0C28D] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer"
                onClick={() => document.getElementById("target-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <h3>Сверка ЕНС</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-4 mx-auto">
              {/* Telegram with dropdown */}
              <div className="relative group">
                <button className="text-[#B7CCBD] hover:text-white transition-colors flex items-center" aria-label="Telegram profiles">
                  <svg width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className='drop-shadow-lg'>
                    {/* SVG содержимое остается таким же */}
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0" transform="scale(1)">
                        </path>
                        <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF" transform="scale(1)">
                        </path>
                        <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1" transform="scale(1)">
                        </path>
                        <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4" transform="scale(1)">
                        </path>
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1 text-xs">▼</span>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <a href="https://t.me/globuss63" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Globuss</a>
                    <a href="https://t.me/Borodyula" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Borodyula</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp with dropdown */}
              <div className="relative group">
                <button className="text-[#B7CCBD] hover:text-white transition-colors flex items-center" aria-label="WhatsApp profiles">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='drop-shadow-lg'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" />
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" />
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5BD066" />
                        <stop offset="1" stopColor="#27B43E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="ml-1 text-xs">▼</span>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <a href="https://wa.me/79171075735" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Основной номер</a>
                    <a href="https://wa.me/79276911319" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Дополнительный</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div id="target-section" className="overflow-x-auto table:h-full w-svw content-center">
          <div className="mx-10">
            {/* Контейнер для управления отображением */}
            <div className="hidden table:block">
              {/* Обычная таблица для больших экранов */}
              <table className="table-auto w-full text-left border-collapse rounded-xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] text-white">
                    <th className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 font-semibold xl:text-lg md:text-base sm:text-sm"></th>
                    <th className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 font-semibold xl:text-lg md:text-base sm:text-sm">ООО</th>
                    <th className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 font-semibold xl:text-lg md:text-base sm:text-sm">ИП с работниками</th>
                    <th className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 font-semibold xl:text-lg md:text-base sm:text-sm">ИП без работников</th>
                    <th className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 font-semibold xl:text-lg md:text-base sm:text-sm">Нулевая ООО</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 7 }).map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`${rowIndex % 2 === 0
                        ? "bg-gradient-to-r from-[#C2A878] to-[#E0C28D]"
                        : "bg-gradient-to-r from-[#6E633D] to-[#8C7A4E] text-white"
                        }`}
                    >
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td key={colIndex} className="px-1 py-1 sm:px-3 sm:py-2 md:px:6 md:py-4 text-[#1E1E1E] font-medium xl:text-base text-sm">
                          <textarea
                            rows={5}
                            className="w-full bg-transparent outline-none text-[#1E1E1E] font-medium break-words whitespace-normal resize-none max-h-12 content-center"
                            defaultValue={rowIndex === 0 && colIndex === 0 ? "ОСНО" : rowIndex === 1 && colIndex === 0 ? "УСН доходы" : rowIndex === 2 && colIndex === 0 ? "УСН доходы-расходы" : rowIndex === 3 && colIndex === 0 ? "УСН с НДС доходы" : rowIndex === 4 && colIndex === 0 ? "УСН с НДС доходы-расходы" : rowIndex === 5 && colIndex === 0 ? "УСН + патент" : rowIndex === 6 && colIndex === 0 ? "Патент" :
                              rowIndex === 0 && colIndex === 1 ? "от 10 000 р в месяц" : rowIndex === 1 && colIndex === 1 ? "от 7 000 р в месяц" : rowIndex === 2 && colIndex === 1 ? "от 9 000 р в месяц" : rowIndex === 3 && colIndex === 1 ? "от 12 000 р в месяц" : rowIndex === 4 && colIndex === 1 ? "от 15 000 р в месяц" : rowIndex === 5 && colIndex === 1 ? "" : rowIndex === 6 && colIndex === 1 ? "" :
                                rowIndex === 0 && colIndex === 2 ? "от 7 000 р в месяц" : rowIndex === 1 && colIndex === 2 ? "от 5 000 р в месяц" : rowIndex === 2 && colIndex === 2 ? "от 7 000 р в месяц" : rowIndex === 3 && colIndex === 2 ? "от 10 000 р в месяц" : rowIndex === 4 && colIndex === 2 ? "от 12 000 р в месяц" : rowIndex === 5 && colIndex === 2 ? "от 13 000 р в месяц" : rowIndex === 6 && colIndex === 2 ? "от 4 000 р в месяц" :
                                  rowIndex === 0 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 1 && colIndex === 3 ? "от 6 000 р в месяц" : rowIndex === 2 && colIndex === 3 ? "от 8 000 р в месяц" : rowIndex === 3 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 4 && colIndex === 3 ? "от 4 000 р в месяц" : rowIndex === 5 && colIndex === 3 ? "от 4 000 р в месяц" : rowIndex === 6 && colIndex === 3 ? "от 3 000 р в месяц" :
                                    rowIndex === 0 && colIndex === 4 ? "от 3 000 р в месяц" : rowIndex === 1 && colIndex === 4 ? "от 3 000 р в месяц" : rowIndex === 2 && colIndex === 4 ? "от 3 000 р в месяц" : rowIndex === 3 && colIndex === 4 ? "от 3 000 р в месяц" : rowIndex === 4 && colIndex === 4 ? "от 3 000 р в месяц" : rowIndex === 5 && colIndex === 4 ? "" : rowIndex === 6 && colIndex === 4 ? "" : ''}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Транспонированный вариант для мобильных экранов */}
            <div className="table:hidden flex flex-col gap-10 my-10">
              {["ООО", "ИП с работниками", "ИП без работников", "Нулевая ООО"].map((header, colIndex) => (
                <div key={colIndex} className="border rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] px-6 py-4 font-semibold text-lg">
                    {header}
                  </div>
                  <div className="flex flex-col text-black sm:text-base text-sm font-сormorant">
                    {["ОСНО", "УСН доходы", "УСН доходы-расходы", "УСН с НДС доходы", "УСН с НДС доходы-расходы", "УСН + патент", "Патент"].map((rowName, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`flex justify-between p-4  ${rowIndex % 2 === 0 ? "bg-gradient-to-r from-[#C2A878] to-[#E0C28D]" : "bg-gradient-to-r from-[#6E633D] to-[#8C7A4E]"}`}
                      >
                        <span className="content-center">{rowName}</span>
                        <textarea
                          className="  bg-transparent outline-none text-right font-medium text-black w-full break-words whitespace-normal resize-none content-center"
                          rows={2}
                          defaultValue={
                            rowIndex === 0 && colIndex === 0 ? "от 10 000 р в месяц" : rowIndex === 1 && colIndex === 0 ? "от 7 000 р в месяц" : rowIndex === 2 && colIndex === 0 ? "от 9 000 р в месяц" : rowIndex === 3 && colIndex === 0 ? "от 12 000 р в месяц" : rowIndex === 4 && colIndex === 0 ? "от 15 000 р в месяц" : rowIndex === 5 && colIndex === 0 ? "" : rowIndex === 6 && colIndex === 0 ? "" :
                              rowIndex === 0 && colIndex === 1 ? "от 7 000 р в месяц" : rowIndex === 1 && colIndex === 1 ? "от 5 000 р в месяц" : rowIndex === 2 && colIndex === 1 ? "от 7 000 р в месяц" : rowIndex === 3 && colIndex === 1 ? "от 10 000 р в месяц" : rowIndex === 4 && colIndex === 1 ? "от 12 000 р в месяц" : rowIndex === 5 && colIndex === 1 ? "от 13 000 р в месяц" : rowIndex === 6 && colIndex === 1 ? "от 4 000 р в месяц" :
                                rowIndex === 0 && colIndex === 2 ? "от 3 000 р в месяц" : rowIndex === 1 && colIndex === 2 ? "от 6 000 р в месяц" : rowIndex === 2 && colIndex === 2 ? "от 8 000 р в месяц" : rowIndex === 3 && colIndex === 2 ? "от 3 000 р в месяц" : rowIndex === 4 && colIndex === 2 ? "от 4 000 р в месяц" : rowIndex === 5 && colIndex === 2 ? "от 4 000 р в месяц" : rowIndex === 6 && colIndex === 2 ? "от 3 000 р в месяц" :
                                  rowIndex === 0 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 1 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 2 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 3 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 4 && colIndex === 3 ? "от 3 000 р в месяц" : rowIndex === 5 && colIndex === 3 ? "" : rowIndex === 6 && colIndex === 3 ? "" : ''}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='md:text-sm text-xs font-medium text-black my-5'>
              <p>*Стоимость услуг увеличивается при наличии маркированных товаров, прослеживаемых товаров и экспортно/импортных операций.</p>
              <p>*Стоимость сдачи нулевых отчетов для ООО - от 3000 р в квартал.</p>
              <p>*Стоимость сдачи нулевых отчетов для ИП - от 3000 р в год.</p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2  content-center md:h-svh h-full w-svw bg-gradient-to-br from-[#ddd3cf] to-[#E7E0DD] "//Блок с отзывами и новостями!!!!!!!!!!!!!!!!!!!!!
        >
          <div className='my-auto mx-10 min-h-3/4 '>
            <div className='grid gap-10 my-10'>
              <h3 className="xl:text-2xl md:text-xl text-lg font-bold text-[#376D4F] text-center">
                Отзывы клиентов
              </h3>

              <div className='relative grid grid-cols-1'>
                <div className="">
                  <div className="carousel-item w-full text-center p-4 px-10 drop-shadow-lg transition-all duration-500">
                    <p className="xl:text-lg md:text-base sm:text-sm text-[#14281D] ">{reviews[currentIndex]}</p>
                  </div>
                </div>

                <div className='h-full absolute place-content-center'><div onClick={handlePrevious} className='cursor-pointer grid  bg-[#376D4F] opacity-30 hover:opacity-100 hover:bg-[#376D4F] text-white rounded-full transition-all duration-300 w-6 h-6 '>
                  <button
                    className="-mt-0.5"
                    aria-label="Предыдущий отзыв"
                  >
                    &#8249;
                  </button>
                </div></div>

                <div className='h-full absolute place-content-center right-0'><div onClick={handleNext} className='cursor-pointer grid bg-[#376D4F] opacity-30 hover:opacity-100 hover:bg-[#376D4F] text-white rounded-full transition-all duration-300 w-6 h-6'>
                  <button
                    className="-mt-0.5"
                    aria-label="Следующий отзыв"
                  >
                    &#8250;
                  </button>
                </div>
                </div></div>

              <div className="flex gap-1 justify-center">
                {reviews.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                      ? "bg-[#376D4F]"
                      : "bg-[#376D4F] opacity-30"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 md:mt-0 w-4/5 md:w-3/4 xl:w-2/3 h-60vh bg-gradient-to-b from-[#14281D] from-30% to-[#E0C28D] mx-auto border-hidden rounded-xl shadow-lg relative">
            <div className="w-full h-full px-6 pt-6 ">
              <h3 className="xl:text-2xl md:text-xl text-lg font-bold text-[#ffffff] mb-4 text-center">
                Лента новостей
              </h3>
              <div className="news-list space-y-4 overflow-y-scroll h-48vh scrollbar-hide ">

                {[
                  "Новость 1: Новая услуга для бизнеса.",
                  "Новость 2: Скидка на бухгалтерские услуги.",
                  "Новость 3: Наш офис теперь открыт в выходные!",
                  "Для современного мира убеждённость некоторых оппонентов предопределяет высокую востребованность новых принципов формирования материально-технической и кадровой базы. Однозначно, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме. Значимость этих проблем настолько очевидна, что социально-экономическое развитие требует определения и уточнения форм воздействия.",
                  "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: курс на социально-ориентированный национальный проект способствует повышению качества своевременного выполнения сверхзадачи. Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности однозначно фиксирует необходимость своевременного выполнения сверхзадачи."
                ].map((news, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-[#C2A878] to-[#E0C28D] rounded-lg shadow-xl"
                  >
                    <p className="xl:text-base md:text-sm sm:text-xs text-[#14281D] ">{news}</p>
                  </div>
                ))}

              </div>

            </div>
            <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#2b2417] to-[#000000]/0 from-10% border-hidden rounded-b-xl'></div>
          </div>

        </div>


      </main>


      <footer className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] text-white py-6 border-t border-[#376D4F]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          {/* <p className="xl:text-lg md:text-base sm:text-sm font-medium tracking-wide text-center">
            &copy; {new Date().getFullYear()} Глобус С. Все права защищены.
          </p> */}
          <div className="grid grid-cols-2 gap-10 mt-4 mx-auto">
            {/* Telegram with dropdown */}
            <div className="relative group">
              <button className="text-[#B7CCBD] hover:text-white transition-colors flex items-center" aria-label="Telegram profiles">
                <svg width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className='drop-shadow-lg'>
                  {/* SVG содержимое остается таким же */}
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0" transform="scale(1)">
                      </path>
                      <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF" transform="scale(1)">
                      </path>
                      <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1" transform="scale(1)">
                      </path>
                      <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4" transform="scale(1)">
                      </path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1 text-xs">▼</span>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1">
                  <a href="https://t.me/globuss63" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Globuss</a>
                  <a href="https://t.me/Borodyula" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Borodyula</a>
                </div>
              </div>
            </div>

            {/* WhatsApp with dropdown */}
            <div className="relative group">
              <button className="text-[#B7CCBD] hover:text-white transition-colors flex items-center" aria-label="WhatsApp profiles">
                <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='drop-shadow-lg'>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" />
                  <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" />
                  <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5BD066" />
                      <stop offset="1" stopColor="#27B43E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-1 text-xs">▼</span>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1">
                  <a href="https://wa.me/79171075735" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Основной номер</a>
                  <a href="https://wa.me/79276911319" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Дополнительный</a>
                </div>
              </div>
            </div>
          </div>
          <a href="mailto:Globus.samara63@mail.ru" className="mt-4 mx-auto">
            Globus.samara63@mail.ru
          </a>
          <div className="mt-4 mx-auto space-y-4">
            {/* Номер 1 */}
            <div className="flex items-center justify-center">
              <p className="mr-2">+7 917 107 5735</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('+79171075735');
                  // Можно добавить уведомление о копировании
                  alert('Номер скопирован в буфер обмена');
                }}
                className="text-[#B7CCBD] hover:text-white transition-colors"
                aria-label="Копировать номер"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>

            {/* Номер 2 */}
            <div className="flex items-center justify-center">
              <p className="mr-2">+7 927 691 1319</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('+79276911319');
                  // Можно добавить уведомление о копировании
                  alert('Номер скопирован в буфер обмена');
                }}
                className="text-[#B7CCBD] hover:text-white transition-colors"
                aria-label="Копировать номер"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

