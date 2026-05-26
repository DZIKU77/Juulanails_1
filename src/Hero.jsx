import hero_1 from "./assets/hero1.png";
import hero_2 from "./assets/hero2.png";
import hero_heart from "./assets/heroHeart.png"

function Hero() {
    return(
        <section className=" pt-50 font-serif">
            <img src={hero_1} alt="" className="absolute right-0 -top-5 opacity-70 -z-10"/>
            <img src={hero_2} alt=""  className="w-1/3 absolute top-0 left-0 opacity-70 -z-10"/>
            <div className="text-center -mb-120">
                <h1 className="uppercase text-pink-300 text-6xl">salon</h1>
                <h1 className="uppercase text- text-black text-9xl -mt-5">paznokci</h1>
            </div>
            <div className="flex justify-center content-center -mb-120">
                <img src={hero_heart} alt="" />
            </div>
            <h2 className="font-['Old_English_Text_MT',Goudy_Text,serif] text-center text-5xl ml-10">Piękno w twoich dłoniach</h2>
        </section>
    );
}

export default Hero