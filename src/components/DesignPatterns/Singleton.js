function Singleton() {
    const func = {
        name: () => console.log('tulike'),
        city: () => console.log('Sec')
   }
   Object.freeze(func);
//    func.name = 'tulika' //cannot modify or update an object that is freezed
   console.log(func.name());
}




export default Singleton;