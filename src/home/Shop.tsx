import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

export interface Shop {
    id: number;
    nombre: string;
    marca: string;
    descripcion: string;
    calificacion: number;
    numero_resenas: number;
}

const queryClient = new QueryClient();

const ShopContent = () => {
    const { data = [], isPending } = useQuery<Shop[]>({
        queryKey: ["Shop"],
        queryFn: () =>
            fetch("http://farid.alwaysdata.net/perfumes").then((r) => r.json()),
    });

    return (
        <>
            <div className="px-6 pt-20 text-center">
                <span className="block font-script text-4xl leading-none text-[#EB9C72]">
                    Best products
                </span>

                <h2 className="mt-2 text-3xl font-light uppercase text-foreground md:text-5xl">
                    Best Sellers Products
                </h2>

                <p className="mt-6 text-xl text-muted">
                    The stylish and organized cosmetic products
                </p>
            </div>

            {isPending ? (
                <p className="py-10 text-center">Loading...</p>
            ) : (
                <div className="overflow-x-auto px-6 py-16 md:px-12">
                    <table className="mx-auto w-full max-w-5xl border-collapse text-left">
                        <thead>
                            <tr className="border-b border-border">
                                {["Código", "Nombre", "Marca", "Descripción", "Calificación"].map((s) => (
                                    <th key={s} className="py-3 pr-4 text-sm font-semibold uppercase text-foreground">
                                        {s}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {data.map(({ id, nombre, marca, descripcion, calificacion, numero_resenas }) => (
                                <tr key={id} className="border-b border-border">
                                    <td className="py-4 pr-4 text-sm text-muted">{id}</td>
                                    <td className="py-4 pr-4 text-foreground">{nombre}</td>
                                    <td className="py-4 pr-4 text-muted">{marca}</td>
                                    <td className="max-w-xs py-4 pr-4 text-sm text-muted">{descripcion}</td>
                                    <td className="py-4 pr-4 text-sm font-semibold text-foreground">
                                        {Number(calificacion).toFixed(1)} · {numero_resenas} reseñas
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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