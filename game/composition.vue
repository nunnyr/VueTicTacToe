
<template>
<!--everything that gets rendered to the page -->
<!--a div tag displaying text Capacity and then using a Mustache, capacity is demonstrated-->
        <div>Capacity: {{ capacity }}</div>
        <!--button tag with an event handler, a click event that references
        our method that was defined in setup()
        -->
        <button @click="increaseCapacity()">Increase Capacity</button>
</template>

<script>

//setup creates a reactive reference. It wraps the primitive in an object that allows us to track changes.

import { ref } from "vue"

export default {
    setup() {
        //when we declare a ref as usual, we are going to give it access to the template
        const capacity = ref(3)

        function increaseCapacity(){
            capacity.value++
        }
    return { capacity, increaseCapacity }

    }

}


</script>