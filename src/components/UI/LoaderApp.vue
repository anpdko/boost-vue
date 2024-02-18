<template>
    <div class="center">
        <div class="loader"></div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LoaderApp'
})
</script>

<style scoped lang='scss'>

.center{
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader {
    height: 20px;
    aspect-ratio: 4;
    display: grid;
}

.loader:before,
.loader:after {
    content: "";
    grid-area: 1/1;
    --_g: no-repeat radial-gradient(farthest-side, #3957FF 94%, #0000);
    background:
        var(--_g) left,
        var(--_g) right;
    background-size: 25% 100%;
    animation: l34 1s infinite;
    transform: translate(var(--d, 0)) rotate(0);
}

.loader:after {
    --d: 37.5%;
    animation-delay: .5s;
}

@keyframes l34 {
    50%,
    100% {
        transform: translate(var(--d, 0)) rotate(.5turn)
    }
}
</style>