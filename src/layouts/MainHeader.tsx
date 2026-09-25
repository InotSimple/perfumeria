export const MainHeader = () => {
return (
    <>
<div className="flex h-10 items-center bg-[#1E1E1E] px-12 text-base uppercase text-white">
        <mask className="text-[#EB9C72]">25% OFF</mask>
        <mask className="ml-1">EN TODO INGRESANDO EL CÓDIGO:</mask>
        <mask className="ml-1 text-[#EB9C72]">PRODUCTOSFARID</mask>
      </div>

      <header className="flex h-full py-8 items-stretch bg-white">


        <div className="flex items-center px-8">
          <a href="#" className="text-xl tracking-widest font-semibold">FARID.</a>
        </div>


        <nav className="flex flex-1 items-stretch justify-center gap-12 text-base uppercase font-semibold">
          <a href="#" className="relative flex items-center gap-2">
            Home
          </a>
          <a href="#" className="flex items-center gap-2">Shop</a>
          <a href="#" className="flex items-center gap-2">For Men</a>
          <a href="#" className="flex items-center gap-2">For Women</a>
          <a href="#" className="flex items-center gap-2">Whishlist</a>
          <a href="#" className="flex items-center">Profile</a>
        </nav>




      
      </header>
      </>
)
}