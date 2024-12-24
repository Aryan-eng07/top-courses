import "./Spinner.css"
const Spinner=()=>{
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="custom-loader"></div>
            <p className="text-indigo-950 text-lg font-semibold">Loading....</p>
        </div>

    )
}
export default Spinner