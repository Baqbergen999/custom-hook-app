import bg from './header-bg.png';

export default function Home() {
  return (
    <div>
      <header className="relative w-full h-screen bg-[#333] text-white bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <nav className="flex justify-between items-center p-[10px_30px] text-white">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[70px]"
              src="https://static.vecteezy.com/system/resources/previews/013/146/831/non_2x/body-builder-lifting-a-dumbbell-png.png"
              alt="Logo"
            />
            <h1 className="text-[24px] text-white font-['Anton'] font-medium m-0">
              BORCELLE
            </h1>
          </div>
          <ul className="flex gap-[50px] list-none items-center text-white">
            <li>
              <a
                href="index.html"
                className="no-underline text-white text-[15px] font-['Work_Sans']"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="about.html"
                className="no-underline text-white text-[15px] font-['Work_Sans']"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="services.html"
                className="no-underline text-white text-[15px] font-['Work_Sans']"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="contact.html"
                className="no-underline text-white text-[15px] font-['Work_Sans']"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="gallery.html"
                className="no-underline text-white text-[15px] font-['Work_Sans']"
              >
                Gallery
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="w-[30px]"
                  src="https://img.icons8.com/ios11/512/FFFFFF/menu.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="text-[220px] text-white font-['Anton'] font-medium text-center mt-[19vh] mb-0 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          <span className="relative z-[-10]" >GYM</span> <span className='z-[100]'>CENTRE</span>
        </h1>
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 z-[1] bg-cover bg-center mb-[20%]"
          src="https://pngimg.com/d/dumbbell_PNG16378.png"
          alt=""
        />
        <a
          className="bg-red-600 text-white px-[20px] py-[15px] cursor-pointer no-underline font-['Work_Sans'] text-[23px] tracking-[12px] w-[40%] text-center inline-block ml-[30%]"
          href="#"
        >
          EXPLORE OUR SHOP
        </a>
      </header>
    </div>
  );
}
