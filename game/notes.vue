<!--if we wanted to import watch --->
<!-- import {watch} from "vue" -->
<!--we want to create a list of people attending our event, by adding an attending array-->

<template>
    <p>Spaces left: {{spacesLeft}} out of {{ capacity }}</p>
    <!-- <div>Capacity: {{ capacity }}</div> -->
    <!--We are going to add a button that calls this method-->
    <button @click="increaseCapacity()">Increase Capacity </button> 
    <h2>Attending</h2>
    <ul>
        <!--it is recommended to include a key for v-for it helps 
        keep track of things and not simply move them around -->
        <li v-for="(name, index) in attending" :key="index">
            {{ name }}
        </li>
    </ul>
</template>

<script>
//to have computed properties we need to import it
import { ref, computed } from "vue"




export default {
    setup(){
        //capacity is the the variable and function that the template
        //will need
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
}





</script>