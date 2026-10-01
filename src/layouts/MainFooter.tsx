    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const redes = [
  { icon: faTwitter, url: "#" },
  { icon: faFacebookF, url: "#" },
  { icon: faLinkedinIn, url: "#" },
  { icon: faInstagram, url: "#" },
];

const enlaces = [
  "Mejores perfumes del verano",
  "Arabe o Diseñador",
  "Sobre nosotros",
];

const navegacion = ["Home", "Pages", "Shop", "Contacts"];

export const MainFooter = () => {
  return (
    <>


    <footer className="relative bg-[#161616] mt-24 pt-24 text-white">

      <a
        href="#"
        className="absolute left-1/2 top-0 w-330px -translate-x-1/2 -translate-y-1/2 border border-border bg-surface px-8 py-6 text-center"
      >
        <p className="text-xl font-semibold tracking-wide text-foreground">@I.NOT_SIMPLE_</p>
        <p className="mt-1 text-xs tracking-[0.2em] text-muted">INSTAGRAM</p>
      </a>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          <div>
            <h4 className="text-xl font-light">Contactos</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-white/50" />
                Av. Alfredo Benavides 778
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-white/50" />
                faridlunamoreno@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-white/50" />
                +51 969 365 030
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold tracking-widest">FARID</p>
            <p className="mx-auto mt-6 max-w-xs text-sm text-white/60">
                Descubre la esencia de la elegancia y el estilo con nuestra exclusiva selección de perfumes. Encuentra tu aroma distintivo y deja una impresión duradera en cada paso que des.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              {redes.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:border-accent hover:text-accent"
                >
                  <FontAwesomeIcon icon={r.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-xl font-light">Links</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {enlaces.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-accent">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <nav className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-10 text-sm font-semibold uppercase">
          {navegacion.map((item) => (
            <a key={item} href="#" className="transition hover:text-accent">
              {item}
            </a>
          ))}
        </nav>
      </div>

    </footer>


    </>
  )
}
