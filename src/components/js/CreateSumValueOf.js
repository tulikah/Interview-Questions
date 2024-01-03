const CreateSumValueOf = () => {
    function sum(num) {
        let fn = function (args){
          return sum(num+args)
        }
        fn.valueOf = () => num;
      }
      let total = sum(1);
      console.log(sum(1));
}

export default CreateSumValueOf;

