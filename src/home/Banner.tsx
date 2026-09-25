import slide2 from '../assets/slides/slide2.avif'

export const Banner = () => {
    return (
        <>
            <section className="group relative w-full overflow-hidden">

                <figure className="w-full h-64 overflow-hidden md:h-screen">
                    <img
                        src={slide2}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </figure>

                <div className="absolute inset-0 flex items-center md:pl-40">
                    <div>
                        <h1 className="text-4xl font-extralight md:text-8xl">
                            Farid <br /> Perfumería
                        </h1>

                        <p className="mt-6 hidden  text-xl  text-muted md:mt-10 md:block">
                          El lugar perfecto para encontrar los mejores perfumes <br/>
                           que están en tendencia y oler diferente que los demás.
                        </p>

                        <a href="#"
                            className="mt-8 inline-flex h-12 items-center border border-foreground px-9 text-sm font-semibold uppercase text-foreground transition hover:bg-foreground hover:text-surface md:mt-10"
                        >
                            Descubrir
                        </a>
                    </div>
                </div>

                <div className="absolute left-0 top-1/2 hidden h-30  w-10 -translate-y-1/2 items-center justify-center bg-white text-sm font-semibold uppercase text-foreground md:flex">
                    <span className="[writing-mode:vertical-rl]">Previous</span>
                </div>

                <div className="absolute right-0 top-1/2 hidden h-30  w-10 -translate-y-1/2 items-center justify-center bg-white text-sm font-semibold uppercase text-foreground md:flex">
                    <span className="[writing-mode:vertical-rl]">Next</span>
                </div>

            </section>
        </>
    )
}