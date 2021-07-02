import {ref, computed } from "vue"

function useEventSpace(){ //this is a composition functions
    const capacity = ref(3)
    const attending = ref(["Pusheen", "Nico", "Tim"])
    const spacesLeft = computed(() => {
        //why are we using .value here?
        //we are dealing with reactive references
        capacity.value - attending.value.length
    })

    function increaseCapacity(){
        //the below is our right instinct
        //we can't increment an object. This is a reactive reference not a primitive.
        //when we inspect the capacity we see a reference to getter and setter but
        //what we are also seeing is that it has a value property.

        capacity.value++
    }
    //by returning it below we are giving our template access to it
    return { capacity, attending, spacesLeft, increaseCapacity }
}