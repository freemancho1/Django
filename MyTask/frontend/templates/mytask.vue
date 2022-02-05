<template>
    <div>
        <h1>{:result:}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" maxlength="4" minlength="4" v-model="value"/>
            <button type="submit">Input</button>
        </form>
        <br/>

        <div>Tries: {:result:}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '11',
                result: '22',
            };
        },
        methods: {
            onSubmitForm() {
                
            }
        },
        delimiters: ["{:", ":}"],
    }
</script>

<style></style>