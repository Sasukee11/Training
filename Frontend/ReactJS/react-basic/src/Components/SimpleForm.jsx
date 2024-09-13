import { useRef, useState } from "react"

function SimpleForm() {

    const name = useRef();
    const email = useRef();
    const address = useRef();

    const [isNameValid,setIsNameValid] = useState(true);
    const [isEmailValid,setIsEmailValid] = useState(true);
    const [isAddressValid,setIsAddressValid] = useState(true);


    function handleSubmit(e){
        e.preventDefault();

        setIsNameValid( () => {
            const firstNameHelper = isNaN(name.current.value);
            const arrFirstName = [...name.current.value].filter((a) => !isNaN(a)).length

            if(name.current.value.trim().length < 3 || !firstNameHelper || arrFirstName !== 0){
                return false
            }
            return true;
        })

        setIsEmailValid( () => {
            setIsEmailValid( () => {
                const regex = /[\w]+\@[\w]+\.[\w]+/;
                if(regex.test(email.current.value)){
                    return true
                }
                return false
            })
        })

        setIsAddressValid( () => {
            if(address.current.value.trim() === ''){
                return false;
            }
            return true;
        })
        
    }
    return (
        <form className="flex flex-col gap-4 p-4">
            <div className="flex flex-row">
                <label className="basis-1/5 text-lg" htmlFor="name">Name</label>
                <input type="text" className="bg-stone-200 rounded-md  basis-4/5 p-2" ref={name} id="name"/>
            </div>
            {!isNameValid && <p className=" text-red-500 text-center">ENTER A VALID NAME</p>}
            <div className="flex flex-row">
                <label className="basis-1/5 text-lg" htmlFor="email">Email</label>
                <input type="email" className="bg-stone-200 rounded-md  basis-4/5 p-2"ref={email} id="email"/>
            </div>
            {!isEmailValid && <p className=" text-red-500 text-center">ENTER A VAILD EMAIL</p>}

            <div className="flex flex-row">
                <label className="basis-1/5 text-lg" htmlFor="address">Address</label>
                <input type="address" ref={address} className="bg-stone-200 rounded-md  basis-4/5 p-2" id="address"/>
            </div>
            {!isAddressValid && <p className=" text-red-500 text-center">ENTER A VAILD ADDRESS</p>}

            <button onClick={handleSubmit} className="px-4 py-2 bg-green-200 text-stone-900 w-1/4 rounded-lg mx-auto"  >
                Submit
            </button>
            
        </form>
    )
}

export default SimpleForm
