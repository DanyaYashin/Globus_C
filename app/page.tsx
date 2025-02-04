'use client';
import Head from 'next/head';
import { useState, useEffect } from "react";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс активного отзыва
  const reviews = [
    "Отзыв 1: Отличная компания!",
    "Отзыв 2: Быстрая помощь!",
    "Отзыв 3: Рекомендую всем!",
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
            <h1 className="text-6xl font-serif text-white relative z-20 drop-shadow-lg">Глобус С</h1>
          </section>


          <section className="sm:w-1/2 p-4 flex flex-col justify-center mt-10 sm:mt-0 mr-0 sm:mr-4">
            <div className="xl:text-3xl md:text-2xl text-xl text-center font-bold text-[#376D4F] mb-6 tracking-wide drop-shadow-sm">
              Услуги для малого и среднего бизнеса
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:text-lg md:text-md sm:text-sm font-medium text-white">
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
            <div className="grid grid-cols-3 gap-10 mt-4 mx-auto">
              <a
                href="https://t.me/your_channel"  // Замените на ссылку вашего канала в Telegram
                className="text-[#B7CCBD] hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className='drop-shadow-lg'>
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
              </a>
              <a
                href="https://vb.me/your_channel"  // Замените на ссылку вашего Viber
                className="text-[#B7CCBD] hover:text-white transition-colors"
                aria-label="Viber"
              >
                <svg width="30px" height="30px" viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" className='drop-shadow-lg'>
                  <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-598.000000, -758.000000)" fill="#7F4DA0">
                      <path d="M624,810 C638.359403,810 650,798.359403 650,784 C650,769.640597 638.359403,758 624,758 C609.640597,758 598,769.640597 598,784 C598,798.359403 609.640597,810 624,810 Z M625.557163,799.409207 C627.325063,799.188564 628.753733,798.762672 630.321233,797.998094 C631.862939,797.243741 632.849644,796.530492 634.155019,795.232271 C635.37816,794.005859 636.056551,793.077041 636.776002,791.635145 C637.778174,789.623608 638.348632,787.232396 638.446219,784.599993 C638.482254,783.702032 638.456556,783.50185 638.25094,783.245321 C637.86039,782.747507 637.002091,782.829703 636.709224,783.388976 C636.616662,783.573725 636.590964,783.732729 636.560135,784.451177 C636.508729,785.554433 636.431719,786.267682 636.27751,787.119522 C635.671103,790.460024 634.067654,793.128369 631.508319,795.042409 C629.375578,796.643375 627.170843,797.423387 624.282692,797.592702 C623.306228,797.649143 623.136647,797.685029 622.915679,797.854391 C622.504456,798.177682 622.483974,798.9371 622.879644,799.291164 C623.121199,799.511855 623.290771,799.542627 624.128492,799.516968 C624.565327,799.501582 625.207683,799.450263 625.557163,799.409207 L625.557163,799.409207 Z M613.809012,798.854999 C613.98892,798.793445 614.266425,798.649789 614.425756,798.547142 C615.402134,797.900559 618.120799,794.426647 619.009917,792.692195 C619.518641,791.70186 619.688213,790.968064 619.528978,790.424129 C619.364432,789.839149 619.092143,789.531244 617.874123,788.551135 C617.385891,788.156063 616.928478,787.750671 616.856589,787.642901 C616.67156,787.376051 616.522471,786.852663 616.522471,786.483204 C616.527687,785.626251 617.082688,784.071435 617.812475,782.875805 C618.377717,781.947024 619.39013,780.756602 620.392302,779.84316 C621.569167,778.765517 622.607278,778.031815 623.779022,777.4519 C625.284788,776.702756 626.204735,776.512894 626.877996,776.825864 C627.047567,776.902853 627.227389,777.0055 627.284002,777.051621 C627.335313,777.097836 627.731079,777.580217 628.162784,778.113821 C628.995289,779.160683 629.185438,779.329998 629.755896,779.524982 C630.480563,779.771285 631.220592,779.704618 631.965742,779.324885 C632.531079,779.032366 633.76447,778.267798 634.561026,777.713628 C635.609379,776.979831 637.850063,775.153043 638.153362,774.788658 C638.687784,774.13185 638.780346,773.290379 638.42053,772.361503 C638.040222,771.381489 636.560154,769.54439 635.527163,768.759265 C634.591855,768.051128 633.92893,767.779251 633.05526,767.738158 C632.335809,767.702263 632.037726,767.763817 631.117779,768.14355 C623.902394,771.11464 618.141368,775.548114 613.567447,781.639157 C611.177779,784.820617 609.358473,788.120102 608.114745,791.542752 C607.390173,793.538846 607.354224,794.406072 607.950294,795.427217 C608.207307,795.858231 609.301946,796.925592 610.098502,797.520807 C611.424455,798.506067 612.035983,798.870414 612.524215,798.973014 C612.858247,799.04487 613.438945,798.988429 613.809012,798.854999 L613.809012,798.854999 Z M625.911773,795.688935 C629.031324,795.232271 631.446691,793.785177 633.029562,791.43501 C633.91868,790.111111 634.47368,788.556295 634.663839,786.888605 C634.730607,786.277956 634.730607,785.164427 634.658718,784.979678 C634.591855,784.80525 634.376007,784.569173 634.190969,784.471724 C633.990569,784.369076 633.564079,784.379302 633.327644,784.502496 C632.931879,784.702593 632.813714,785.020771 632.813714,785.882837 C632.813714,787.211849 632.469355,788.612736 631.873285,789.700606 C631.194894,790.942404 630.208198,791.968672 629.005635,792.681969 C627.972644,793.297732 626.4463,793.754405 625.053579,793.867278 C624.549889,793.908372 624.272384,794.010981 624.082235,794.231625 C623.789368,794.56519 623.758454,795.01675 624.00513,795.391313 C624.272375,795.806969 624.683502,795.873684 625.911773,795.688935 L625.911773,795.688935 Z M627.006411,791.814743 C628.018825,791.599213 628.794898,791.214367 629.457823,790.593454 C630.310906,789.787877 630.778646,788.812881 630.984157,787.411993 C631.122909,786.498599 631.066382,786.139423 630.742601,785.841791 C630.439407,785.564706 629.879286,785.554433 629.540048,785.816132 C629.293372,786.00088 629.216267,786.195864 629.15974,786.724365 C629.092972,787.427389 628.969591,787.919995 628.758949,788.376716 C628.306657,789.346542 627.510101,789.849431 626.163665,790.013633 C625.531464,790.090622 625.341315,790.162449 625.135794,790.403592 C624.760607,790.850039 624.90448,791.573563 625.423541,791.840412 C625.618906,791.9379 625.701131,791.948173 626.132751,791.922513 C626.400005,791.907118 626.79577,791.860949 627.006411,791.814743 L627.006411,791.814743 Z" id="Viber" transform="translate(624.000000, 784.000000) scale(1, -1) translate(-624.000000, -784.000000) ">
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://wa.me/your_channel"  // Замените на ссылку вашего Whatsapp
                className="text-[#B7CCBD] hover:text-white transition-colors"
                aria-label="Whatsapp"
              >
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
              </a>
            </div>
          </section>
        </div>


        <div id="target-section" className="overflow-x-auto md:h-svh w-svw content-center">
          <div className="mx-10">
            {/* Контейнер для управления отображением */}
            <div className="hidden md:block">
              {/* Обычная таблица для больших экранов */}
              <table className="table-auto w-full text-left border-collapse rounded-xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] text-white">
                    <th className="px-6 py-4 font-semibold text-lg"></th>
                    <th className="px-6 py-4 font-semibold text-lg">ООО</th>
                    <th className="px-6 py-4 font-semibold text-lg">ИП с работниками</th>
                    <th className="px-6 py-4 font-semibold text-lg">ИП без работников</th>
                    <th className="px-6 py-4 font-semibold text-lg">Нулевая ООО</th>
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
                        <td key={colIndex} className="px-6 py-4 text-[#1E1E1E] font-medium">
                          <input
                            type="text"
                            className="w-full bg-transparent outline-none text-[#1E1E1E] font-medium"
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
            <div className="md:hidden flex flex-col gap-10 my-10">
              {["ООО", "ИП с работниками", "ИП без работников", "Нулевая ООО"].map((header, colIndex) => (
                <div key={colIndex} className="border rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] px-6 py-4 font-semibold text-lg">
                    {header}
                  </div>
                  <div className="flex flex-col text-black text-base font-сormorant">
                    {["ОСНО", "УСН доходы", "УСН доходы-расходы", "УСН с НДС доходы", "УСН с НДС доходы-расходы", "УСН + патент", "Патент"].map((rowName, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`flex justify-between p-4 ${rowIndex % 2 === 0 ? "bg-gradient-to-r from-[#C2A878] to-[#E0C28D]" : "bg-gradient-to-r from-[#6E633D] to-[#8C7A4E]"}`}
                      >
                        <span className="">{rowName}</span>
                        <input
                          type="text"
                          className="bg-transparent outline-none text-right font-medium text-black"
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
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 content-center h-svh w-svw bg-gradient-to-br from-[#ddd3cf] to-[#E7E0DD] "//Блок с отзывами и новостями!!!!!!!!!!!!!!!!!!!!!
        >
          <div className='my-auto mx-10'>
            <div className='grid gap-10'>
              <h3 className="text-2xl font-bold text-[#376D4F] text-center">
                Отзывы клиентов
              </h3>

              <div className='relative grid grid-cols-1'>
                <div className="">
                  <div className="carousel-item w-full text-center p-4 drop-shadow-lg transition-all duration-500">
                    <p className="text-lg text-[#14281D]">{reviews[currentIndex]}</p>
                  </div>
                </div>

                <div onClick={handlePrevious} className='cursor-pointer grid place-content-center absolute left-0 bg-[#376D4F] opacity-30 hover:opacity-100 hover:bg-[#376D4F] text-white rounded-full transition-all duration-300 w-6 h-6 '>
                  <button
                    className="-mt-0.5"
                    aria-label="Предыдущий отзыв"
                  >
                    &#8249;
                  </button>
                </div>

                <div onClick={handleNext} className='cursor-pointer grid place-content-center absolute right-0 bg-[#376D4F] opacity-30 hover:opacity-100 hover:bg-[#376D4F] text-white rounded-full transition-all duration-300 w-6 h-6'>
                  <button
                    className="-mt-0.5"
                    aria-label="Следующий отзыв"
                  >
                    &#8250;
                  </button>
                </div>
              </div>

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

          <div className="mt-10 md:mt-0 w-4/5 md:w-3/4 xl:w-2/3 h-60vh bg-gradient-to-b from-[#14281D] from-30% to-[#E0C28D] mx-auto border-hidden rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full p-6">
              <h3 className="xl:text-2xl md:text-xl font-bold text-[#ffffff] mb-4 text-center">
                Лента новостей
              </h3>
              <div className="news-list space-y-4 overflow-y-auto ">
                {[
                  "Новость 1: Новая услуга для бизнеса.",
                  "Новость 2: Скидка на бухгалтерские услуги.",
                  "Новость 3: Наш офис теперь открыт в выходные!",
                ].map((news, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-[#C2A878] to-[#E0C28D] rounded-lg shadow-xl"
                  >
                    <p className="xl:text-lg md:text-md sm:text-sm text-[#14281D] ">{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


      </main>


      <footer className="bg-gradient-to-r from-[#14281D] to-[#1F3C2C] text-white py-6 border-t border-[#376D4F]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          <p className="text-lg font-medium tracking-wide text-center">
            &copy; {new Date().getFullYear()} Глобус. Все права защищены.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <a
              href="https://t.me/your_channel"  // Замените на ссылку вашего канала в Telegram
              className="text-[#B7CCBD] hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <svg width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className='drop-shadow-lg'>
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
            </a>
            <a
              href="https://vb.me/your_channel"  // Замените на ссылку вашего Viber
              className="text-[#B7CCBD] hover:text-white transition-colors"
              aria-label="Viber"
            >
              <svg width="30px" height="30px" viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" className='drop-shadow-lg'>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-598.000000, -758.000000)" fill="#7F4DA0">
                    <path d="M624,810 C638.359403,810 650,798.359403 650,784 C650,769.640597 638.359403,758 624,758 C609.640597,758 598,769.640597 598,784 C598,798.359403 609.640597,810 624,810 Z M625.557163,799.409207 C627.325063,799.188564 628.753733,798.762672 630.321233,797.998094 C631.862939,797.243741 632.849644,796.530492 634.155019,795.232271 C635.37816,794.005859 636.056551,793.077041 636.776002,791.635145 C637.778174,789.623608 638.348632,787.232396 638.446219,784.599993 C638.482254,783.702032 638.456556,783.50185 638.25094,783.245321 C637.86039,782.747507 637.002091,782.829703 636.709224,783.388976 C636.616662,783.573725 636.590964,783.732729 636.560135,784.451177 C636.508729,785.554433 636.431719,786.267682 636.27751,787.119522 C635.671103,790.460024 634.067654,793.128369 631.508319,795.042409 C629.375578,796.643375 627.170843,797.423387 624.282692,797.592702 C623.306228,797.649143 623.136647,797.685029 622.915679,797.854391 C622.504456,798.177682 622.483974,798.9371 622.879644,799.291164 C623.121199,799.511855 623.290771,799.542627 624.128492,799.516968 C624.565327,799.501582 625.207683,799.450263 625.557163,799.409207 L625.557163,799.409207 Z M613.809012,798.854999 C613.98892,798.793445 614.266425,798.649789 614.425756,798.547142 C615.402134,797.900559 618.120799,794.426647 619.009917,792.692195 C619.518641,791.70186 619.688213,790.968064 619.528978,790.424129 C619.364432,789.839149 619.092143,789.531244 617.874123,788.551135 C617.385891,788.156063 616.928478,787.750671 616.856589,787.642901 C616.67156,787.376051 616.522471,786.852663 616.522471,786.483204 C616.527687,785.626251 617.082688,784.071435 617.812475,782.875805 C618.377717,781.947024 619.39013,780.756602 620.392302,779.84316 C621.569167,778.765517 622.607278,778.031815 623.779022,777.4519 C625.284788,776.702756 626.204735,776.512894 626.877996,776.825864 C627.047567,776.902853 627.227389,777.0055 627.284002,777.051621 C627.335313,777.097836 627.731079,777.580217 628.162784,778.113821 C628.995289,779.160683 629.185438,779.329998 629.755896,779.524982 C630.480563,779.771285 631.220592,779.704618 631.965742,779.324885 C632.531079,779.032366 633.76447,778.267798 634.561026,777.713628 C635.609379,776.979831 637.850063,775.153043 638.153362,774.788658 C638.687784,774.13185 638.780346,773.290379 638.42053,772.361503 C638.040222,771.381489 636.560154,769.54439 635.527163,768.759265 C634.591855,768.051128 633.92893,767.779251 633.05526,767.738158 C632.335809,767.702263 632.037726,767.763817 631.117779,768.14355 C623.902394,771.11464 618.141368,775.548114 613.567447,781.639157 C611.177779,784.820617 609.358473,788.120102 608.114745,791.542752 C607.390173,793.538846 607.354224,794.406072 607.950294,795.427217 C608.207307,795.858231 609.301946,796.925592 610.098502,797.520807 C611.424455,798.506067 612.035983,798.870414 612.524215,798.973014 C612.858247,799.04487 613.438945,798.988429 613.809012,798.854999 L613.809012,798.854999 Z M625.911773,795.688935 C629.031324,795.232271 631.446691,793.785177 633.029562,791.43501 C633.91868,790.111111 634.47368,788.556295 634.663839,786.888605 C634.730607,786.277956 634.730607,785.164427 634.658718,784.979678 C634.591855,784.80525 634.376007,784.569173 634.190969,784.471724 C633.990569,784.369076 633.564079,784.379302 633.327644,784.502496 C632.931879,784.702593 632.813714,785.020771 632.813714,785.882837 C632.813714,787.211849 632.469355,788.612736 631.873285,789.700606 C631.194894,790.942404 630.208198,791.968672 629.005635,792.681969 C627.972644,793.297732 626.4463,793.754405 625.053579,793.867278 C624.549889,793.908372 624.272384,794.010981 624.082235,794.231625 C623.789368,794.56519 623.758454,795.01675 624.00513,795.391313 C624.272375,795.806969 624.683502,795.873684 625.911773,795.688935 L625.911773,795.688935 Z M627.006411,791.814743 C628.018825,791.599213 628.794898,791.214367 629.457823,790.593454 C630.310906,789.787877 630.778646,788.812881 630.984157,787.411993 C631.122909,786.498599 631.066382,786.139423 630.742601,785.841791 C630.439407,785.564706 629.879286,785.554433 629.540048,785.816132 C629.293372,786.00088 629.216267,786.195864 629.15974,786.724365 C629.092972,787.427389 628.969591,787.919995 628.758949,788.376716 C628.306657,789.346542 627.510101,789.849431 626.163665,790.013633 C625.531464,790.090622 625.341315,790.162449 625.135794,790.403592 C624.760607,790.850039 624.90448,791.573563 625.423541,791.840412 C625.618906,791.9379 625.701131,791.948173 626.132751,791.922513 C626.400005,791.907118 626.79577,791.860949 627.006411,791.814743 L627.006411,791.814743 Z" id="Viber" transform="translate(624.000000, 784.000000) scale(1, -1) translate(-624.000000, -784.000000) ">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://wa.me/your_channel"  // Замените на ссылку вашего Whatsapp
              className="text-[#B7CCBD] hover:text-white transition-colors"
              aria-label="Whatsapp"
            >
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
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

