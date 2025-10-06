const getStoreBook = () => {
    const storeBookString = localStorage.getItem("readList")

    if (storeBookString) {
        const storeBookData = JSON.parse(storeBookString)
        return storeBookData
    } else {
            return []
    }
    
}

const addToStoreDB = (id) => {
    const storedBookData = getStoreBook()
    
    if (storedBookData.includes(id)) {
        alert("Bhai ei id already exist")
    } else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
        // console.log(storedBookData)
    }
}

export { addToStoreDB, getStoreBook };