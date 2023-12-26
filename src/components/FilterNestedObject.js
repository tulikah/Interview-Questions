const FilterNestedObject = () => {

    function getNested(obj, func) {
        for (let key in obj) {
            let val = obj[key];
           
            if (typeof val === "object") {
                console.log('val:',  func);
               getNested(val, func);

            } else {
              let temp = func(val);
              if (!temp) {
                val = null;
              }
            }
        
            if(JSON.stringify(val) === "{}") {
                val = null;
            }
            }

         
    }


   
    const filter = (s) => typeof s === "string";
        
    //Input:
    const obj = {
    a: 1,
    b: {
        c: "Hello World",
        d: 2,
        e: {
            f: {
                g: -4,
            },
        },
        h: "Good Night Moon",
    },
    };



    const filteredNest = getNested(obj, filter);
    // console.log('filteredNest', filteredNest);

    return (
        <h1>Filter Nested Object</h1>
    )


    /* Output:
    {
    b: {
        c: "Hello World",
        h: "Good Night Moon",
    }
    }; */
}

export default FilterNestedObject;