const FactoryMethod = () => {
    function FM(name, city){
        this.name = name;
        this.city = city;
    }

    FM.prototype.cityName = () => console.log()
}

export default FactoryMethod;