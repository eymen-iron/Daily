import Close from "./close.svg";
export default function App() {
  return (
      <>
    <div className="w-width h-height bg-white rounded-lg flex flex-col shadow-2xl py-70 px-158 relative">
       <div href="/" className="max-w-12 max-h-12 mr-0 text-end absolute top-2 right-2	"> <img src={Close}/></div>
      <a href="/" className="font-bold text-xl text-center h-16 w-72 mb-16">Create an account to add posts as favorite</a>
      <a href="/" className="font-bold text-m text-white py-4 px-20 h-15 w-307 bg-go mb-12 rounded-xl">Sign up with Google</a>
      <a href="/" className=" text-m text-white py-4 px-16 h-15 w-307 bg-fc mb-12 rounded-xl">Sign up with Facebook</a>
      <a href="/" className=" text-m text-white py-4 px-20 h-15 w-307 bg-tw mb-12 rounded-xl">Sign up with Twitter</a>
      <div className="flex items-start justify-between" >
      <input type="checkbox" className="mt-2" />
      <a href="/" className="ml-1">I’m interested in updates about products and services.</a>
      </div>
      <div></div>
    </div>
    </>
  )
}
