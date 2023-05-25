try {
    class Automobile {
        constructor () {
            throw ("This class is not for creating objects")
        }
    }
    
    const a1 = new Automobile()    
} catch (error) {
    console.log(error)
}
