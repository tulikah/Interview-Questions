function Counter() {
   this.count = 0;

   this.increment = () => {
      return this.count++
   }

   this.decrement = () => {
      return this.count--;
   }

}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1 === counter2) //false; -> stored in different memory

//Create singleton objs

function Singleton() {
   let instance;

   return {
      getInstance() {
         if(!instance) {
            instance = new Counter();
         }
         return instance;
      }
   }
}

const counter3 = new Singleton.getInstance();
const counter4 = new Singleton.getInstance();

console.log(counter4 === counter3) //true;


export default Singleton;