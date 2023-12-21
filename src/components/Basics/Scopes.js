const Scopes = () => {
    /* 
        Explain about execution context here:
        case1:
            var is stored in a global space in the memory
            let, const are stored in a separate space
        case2:
            becoz of this reason, you can access var variables thru window object
            cannot access let, const as they're not a part of global space
        case3:
            you can access var before they're initialized
            cannot do the same for let, const - throws referrence error
        case4:
            can decalre same var variables twice
            but not in the case of let, const -> they're very strict
        case5:
            const needs to be initialized and cannot be updated/re-initialize

    
    */

    return (
        <h1></h1>
    )
}

export default Scopes;