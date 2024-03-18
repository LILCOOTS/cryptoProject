class UI{
    //constructor is created to give access of the methods in different js files
    constructor(){
        this.init()
    }
    //init is created to store all the methods which are to be used.
    init(){
        this.printCryptoCurrency()
    }
    
    printCryptoCurrency(){
        api.getCryptoCurrencies()
            .then(data => {
                const cryptoData = data.cryptoCurrencyData;

                console.log(cryptoData);
            })
    }
}