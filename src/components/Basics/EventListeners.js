import React from 'react'

const EventListeners = () => {
    // - onClick
    // - onBlur
    // - onChange
    // - onFocus
    // - setTimeout()
    // - setInterval()


    // - Event Bubbling and Capturing: (very expensive - so use stop propogation)
    //     - bubbling is from inside to outside click events
    //     - capturing is from outside to inside
    // - Event Delegation

    document.getElementById("grandparent").addEventListener(
        "click",
        () => {
            console.log("Grandparent clicked!");
        },
        true
    );
    document.getElementById("parent").addEventListener(
        "click",
        () => {
            console.log("parent clicked!");
        },
        true
    );

    document.getElementById("child").addEventListener(
        "click",
        (e) => {
            console.log("child clicked!");
            e.stopPropagation() // this will stop propogating. The output will only be Child.(for bubbling)
        },
        true
    );

    //Click on the child box, output for bubbling will be: Flag will be false
    // child clicked!
    // parent clicked!
    // Grandparent clicked!

    //Click on the child box, output for capturing will be: Flag will true
        // Grandparent clicked!
        // parent clicked!
        // child clicked!
      // if Parent is false: it will show sequence:
        //Grandparent
        //Child
        //Parent


    return (
        <div>
            Event Bubbling and Capturing
            <div id="grandparent">
                <div id="parent">
                    <div id="child"></div>
                </div>
            </div>

        </div>
    )
}

export default EventListeners
