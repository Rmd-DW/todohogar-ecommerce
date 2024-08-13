<template>
  <button :class="['btn', type, 'm-2']" type="submit">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: 'btn-primary' 
        }
    }
}
</script>

<style scoped>
button{
  background-color: #30A7AE;
  color: white;
}
</style>