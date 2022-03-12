import Search from "./img/Search.svg";
import Message from "./img/message.svg";
import Alarm from "./img/alert.svg";

let eko = document.write(new Date().getHours())

export default function Header() {
    return (
        <div className="flex justify-between  h-24 p-5">
            <div className="bg-gray-100 ml-4 flex items-center justify-start h-12 w-80 rounded-2xl px-2">
                <img src={Search} />
                <input type="text" placeholder="Search" className="h-12 px-3 bg-transparent " />
            </div>
            <div className="flex items-center ">
                <img src={Message} className="mr-3" />
                <img src={Alarm} className="mx-3 animate-bounce" />
                <span className="mx-10 text-6xl font-samibold   "> 17:18 </span>                
            </div>

        </div>
    )
}
