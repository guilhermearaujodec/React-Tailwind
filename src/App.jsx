

function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-3 flex justify-center items-center flex-col bg-indigo-600 text-slate-50">
        <h1 className="text-3xl">Aula Tailwind</h1>
        <p>Exemplo de página</p>
      </header>
      <main className="grow">
        <h2 className="text-2xl text-center font-bold m-4">Ficha dos clientes</h2>
        <div className="p-6 flex justify-evenly">
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950 shadow-slate-950">
            <h3 className="text-2xl mb-2">Título</h3>
            <img className="w-2/3 block m-auto" src="vite.svg" alt="Logo Vite" />
            <p className="my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis rem possimus, numquam, perferendis repellendus eos maxime molestias, repellat eveniet soluta cupiditate amet doloremque? Pariatur molestiae hic nihil nulla eum!</p>
          </div>
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950 shadow-slate-950">
            <h3 className="text-2xl mb-2">Título</h3>
            <img className="w-2/3 block m-auto" src="vite.svg" alt="Logo Vite" />
            <p className="my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis rem possimus, numquam, perferendis repellendus eos maxime molestias, repellat eveniet soluta cupiditate amet doloremque? Pariatur molestiae hic nihil nulla eum!</p>
          </div>
          <div className="w-64 p-4 shadow-2xl text-center rounded-xl border border-indigo-950 shadow-slate-950">
            <h3 className="text-2xl mb-2">Título</h3>
            <img className="w-2/3 block m-auto" src="vite.svg" alt="Logo Vite" />
            <p className="my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis rem possimus, numquam, perferendis repellendus eos maxime molestias, repellat eveniet soluta cupiditate amet doloremque? Pariatur molestiae hic nihil nulla eum!</p>
          </div>
        </div>
      </main>
      <footer className="p-3 flex justify-center items-center bg-black text-white">
        <p>Av. Paulista, 1060 - Bela Vista - SP</p>
      </footer>

    </div>
  )
}

export default App
