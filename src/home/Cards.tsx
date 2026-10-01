

export interface CardsItem {
    id: string;
    foto: string;
    palabra: string;
    titulo: string;
    colorPalabra: string;
    textoOscuro: boolean;
}

export const DATA_CATEGORIAS: CardsItem[] = [
  {
    id: "p1",
    foto: "/cards/perfumearabe.webp",
    palabra: "Oud",
    titulo: "Perfumes Árabes",
    colorPalabra: "text-[#FFE5D5]",
    textoOscuro: false
  },
  {
    id: "p2",
    foto: "/cards/perfumediseñador.jpg",
    palabra: "Chic",
    titulo: "Perfumes de Diseñador",
    colorPalabra: "text-[#F7BB98]",
    textoOscuro: true
  },
  {
    id: "p3",
    foto: "/cards/perfumenicho.webp",
    palabra: "Único",
    titulo: "Perfumes de Nicho",
    colorPalabra: "text-[#E3CBBB]",
    textoOscuro: false
  }
]

export const Cards = () => {
  return (
    <section className="grid gap-10 px-6 py-16 md:grid-cols-3 md:px-12">
      {DATA_CATEGORIAS.map((p) => (
        <a key={p.id} href="#" className="group relative ml-6 mt-6 block">

          <figure className="aspect-558/450 overflow-hidden">
            <img
              src={p    .foto}
              alt={p.titulo}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>

          <span className="pointer-events-none absolute -left-6 -top-6 h-full w-full border border-foreground transition-all duration-500 group-hover:-left-3 group-hover:-top-3"></span>

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end pb-12 pl-8 pr-4 xl:pb-20 xl:pl-14">
            <span className={`-mb-2 font-script text-2xl leading-none xl:text-9xl ${p.colorPalabra}`}>
              {p.palabra}
            </span>
            <span className={`text-xl xl:text-xl font-bold ${p.textoOscuro ? "text-foreground" : "text-white"}`}>
              {p.titulo}
            </span>
          </div>

        </a>
      ))}
    </section>
  )
}