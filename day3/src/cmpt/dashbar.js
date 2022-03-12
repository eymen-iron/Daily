import Group from "./img/Group.svg";
import Folders from "./img/Folders.svg";
import Projects from "./img/Project.svg";
import Tasks from "./img/Task.svg";
import Setting from "./img/Settings.svg";
import Profile from "./img/Profile.png";
import Click from "./img/click.svg";
export default function Dashboard() {
    return (
        <div className="flex flex-col justify-between basis-2/12 mt-16 mx-4">
            <div className="flex flex-col ">
                <a href="/" className="font-semibold	text-3xl	 mb-8">3ynm4n </a>
                <div>
                    <a href="/" className="mb-1 h-11  text-xl bg-sky-100 rounded-xl flex gap-3 items-center font-semibold mr-5"> <img className="ml-4" src={Group} /> Dashboard</a>
                    <a href="/" className="mb-1 h-11 ml-4 text-xl flex gap-3 items-center font-semibold "><img src={Folders} /> Folders</a>
                    <a href="/" className="mb-1 h-11 ml-4 text-xl flex gap-3 items-center font-semibold "><img src={Projects} /> Projects</a>
                    <a href="/" className="mb-1 h-11 ml-4 text-xl flex gap-3 items-center font-semibold "><img src={Tasks} /> Tasks</a>
                    <a href="/" className="mb-1 h-11 ml-4 text-xl flex gap-3 items-center font-semibold "> <img src={Setting} /> Setting</a>
                </div>
            </div>
            <div className="h-20 border-t-4 border-red flex items-center justify-between">
                <div className="flex items-center">
                    <img src={Profile} />
                    <h2 className="text-l ml-3   font-extrabold">3ynm3n </h2>
                </div>
                <img src={Click} />

            </div>
        </div>
    )
}
