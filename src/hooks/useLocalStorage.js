import {useState} from "react"

const useLocalStorage = (key, initialValue) =>{

    // call localStorage.getItem('itemName')

    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue

    });
    return [storedValue]

}

export default useLocalStorage;