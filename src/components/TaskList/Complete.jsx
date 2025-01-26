
function Complete(props) {
    return (
            <div className={"h-full shrink-0 w-[300px] p-5 bg-green-400 rounded-xl"}>
                <div className={"flex justify-between items-center"}>
                    <h3 className={"bg-red-600 text-sm px-3 py-1 rounded"}>{props.category}</h3>
                    <h4 className={"text-sm"}>{props.date}</h4>
                </div>
                <h2 className={"mt-5 text-2xl font-semibold"}>{props.title}</h2>
                <p className={"text-sm mt-2"}>
                    {props.description}
                </p>
                <div className={"mt-4"}>
                    <button className={"rounded bg-green-500 py-1 px-2 text-sm w-full"}>Completed</button>

                </div>
            </div>
    );
}

export default Complete;