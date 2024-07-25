<template>
    <button :class="['btn m-2', type]" type="submit">{{ text }}</button>
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
