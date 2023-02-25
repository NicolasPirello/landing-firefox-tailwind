import firefox from "../images/firefox.png"


function App() {

  return (
    
    <body className="
     bg-white text-slate-800
     dark:bg-slate-800 dark:text-white">
      
      { /* Manu principal */ }

      <nav className="z-20 bg-white fixed w-full border-b shadow-lg md:static md:w-auto md:border-none md:shadow-none dark:bg-slate-800  dark:border-none">

        <div className="p-6 container mx-auto">

          <div className="flex items-center justify-between">

            {/* Imagen - Logo */}

            <div className="z-20">
              <a href="" className="flex items-center">
                <img src={firefox} alt="" className="w-14 h-14"/>
                <span className="text-3xl ml-3"><span className="font-bold">Firefox </span>Browser</span>
              </a>
            </div>

            {/* Cuerpo del menu */}

            <div>

              {/* Boton Responsive
                  La clase peer cuando cambie estado de un elemento va a aplicar estilo al elemento siguiente.
                  Si tenes un input y lo relacionas con el Label, ese input lo ocultas y el label le das el formato que quieras, despues lo manipulas con los estilos personalizados.
              */}

              <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden/>

              <label htmlFor="hamburger" className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded">
                <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
                <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
              </label>

              {/* Cuerpo de los enlaces */}

              <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-[70%] shadow-lg transition duration-200 flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-[0] md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">

                {/* Enlaces */}

                <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                  <a href="" className="tracking-wide cursor-pointer px-3 py-2 hover:bg-blue-500 rounded hover:text-white font-semibold text-lg transition duration-200">Caracteristicas</a>
                  <a href="" className="tracking-wide cursor-pointer px-3 py-2 hover:bg-yellow-400 rounded hover:text-white font-semibold text-lg transition duration-200">Ayuda</a>
                  <a href="" className="tracking-wide cursor-pointer px-3 py-2 hover:bg-indigo-500 rounded hover:text-white font-semibold text-lg transition duration-200">Componentes</a>
                  <a href="" className="tracking-wide cursor-pointer px-3 py-2 hover:bg-pink-500 rounded hover:text-white font-semibold text-lg transition duration-200">Idiomas</a>
                </div>

                {/* Boton */}

                <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6 ">
                  <a href="" className="block px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:bg-blue-600">Descargar</a>
                </div>

              </div>

            </div>


          </div>

        </div>


      </nav>


    </body>

  )
}

export default App
