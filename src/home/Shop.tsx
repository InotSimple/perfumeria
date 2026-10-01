import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export interface Shop {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    calificacion: number;
    numero_resenas: number;
    imagen: string;
}

const queryClient = new QueryClient();

const ShopContent = () => {
    const { data = [], isPending } = useQuery<Shop[]>({
        queryKey: ["Shop"],
        queryFn: () =>
            fetch("https://farid.alwaysdata.net/perfumes").then((r) => r.json()),
    });

    return (
       <>
            <div className="px-6 pt-20 text-center">
                <span className="block font-script text-4xl leading-none text-[#EB9C72]">
                    Mejores productos
                </span>

                <h2 className="mt-2 text-3xl font-light uppercase text-foreground md:text-5xl">
                    Mejores Perfumes 
                </h2>

                <p className="mt-6 text-xl text-gray-500">
                    Lo mejor y lo mas viral de la perfumeria
                </p>
            </div>

            {isPending ? (
                <p className="py-10 text-center">Cargando...</p>
            ) : (
<section className="grid grid-cols-1 gap-x-10 gap-y-16 px-6 py-16 sm:grid-cols-2 md:px-12 xl:grid-cols-4">
    {data.slice(0, 4).map(({ id, nombre, calificacion, imagen }) => (
        <div key={id} className="group mx-auto w-full max-w-340px">

            <figure className="flex aspect-square items-center justify-center overflow-hidden  bg-white p-6 ">
                <img
                    src={`https://farid.alwaysdata.net/fotos/${imagen}`}
                    alt={nombre}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = "/perfumes/default.jpg" }}
                />
            </figure>

            <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={i < Math.round(calificacion) ? faStarSolid : faStarRegular}
                        className={i < Math.round(calificacion) ? "text-yellow-300" : "text-border"}
                        size="sm"
                    />
                ))}
            </div>

            <h3 className="mt-3 text-center text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-accent">
                {nombre}
            </h3>

        </div>
    ))}
</section>
            )}
        </>
    );
};

export const Shop = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ShopContent />
        </QueryClientProvider>
    );
};