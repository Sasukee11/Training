function ArrayList() {

    const arr = ["ReactJS","NodeJS","ExpressJS"];

    return (
        <div className=" mt-4">
            <ul className=" flex flex-row gap-6">
                {arr.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ArrayList
