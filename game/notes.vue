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
import useEventSpace from "event-space.js" 
//where my code will be resuable for other features







export default {
    setup(){
        //capacity is the the variable and function that the template
        //will need
        return useEventSpace()
       }
}
   






</script>

<!--using the reactive object-->
<!-- 
import {reactive, computed} from "vue"
export default {
    setup() {
        const event = reactive({
            capacity: 4,
            attending: ["Tim", "Bob", "Joe"],
            spacesLeft: computed(() => {
                return event.capacity - event.attending.length
            })
        });

    function increaseCapacity() { event.capacity++}
    return {event. increaseCapacity};

    

    }
}

//splitting an event object will remove its reactivity
-->
