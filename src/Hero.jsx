import hero_1 from "./assets/hero1.png";
import hero_2 from "./assets/hero2.png";
import hero_heart from "./assets/heroHeart.png";
import diamond from "./assets/diamond.png";
import manicure from "./assets/manicure.png";
import service from "./assets/hand-holding-heart.png"

function Hero() {
    return(
        <section className=" pt-50 font-serif">
            <img src={hero_1} alt="" className="absolute right-0 -top-5 opacity-70 -z-10"/>
            <img src={hero_2} alt=""  className="w-1/3 absolute top-0 left-0 opacity-70 -z-10"/>
            <div className="text-center -mb-120">
                <h1 className="uppercase text-pink-300 text-6xl">salon</h1>
                <h1 className="uppercase text- text-black text-9xl -mt-5 tracking-widest">paznokci</h1>
            </div>
            <div className="flex justify-center content-center -mb-130">
                <img src={hero_heart} alt="" />
            </div>
            <h2 className="font-['Dynalight',fantasy] text-center text-7xl ml-10">Piękno w twoich dłoniach</h2>
            <div className="flex gap-25 mt-10 ml-45">
                <div className="flex flex-col gap-10">
                    <img src={diamond} alt="" className="w-25"/>
                    <p className="text-2xl uppercase text-center">stylizacja <br /> paznokci</p>
                </div>
                <div className="w-1 h-40 rounded-2xl bg-black mt-5"></div>
                <div className="flex flex-col gap-10">
                    <img src={manicure} alt="" className="w-25"/>
                    <p className="text-2xl uppercase text-center">manicure <br />klasyczny</p>
                </div>
                <div className="w-1 h-40 rounded-2xl bg-black"></div>
                <div className="flex flex-col gap-10">
                    <img src={service} alt="" className="w-25"/>
                    <p className="text-2xl uppercase text-center">indywidualne <br /> podejscie</p>
                </div>
            </div>
        </section>
    );
}

export default Hero