<template>
    <div>
        <h1>Guess the number game (baseball)</h1>
        <form @submit.prevent="onSubmitForm">
            <input v-model="value" ref="answer" minlength="4" maxlength="4" />
            <button type="submit">Input</button>
        </form>
        <div>Try counts: {{tries.length}}</div>
        <ul>
            <li :key="i" v-for="(t,i) in tries">
                {{t.try}}: {{t.result}}
            </li>
        </ul>
    </div>
</template>

<script>
    const getNumbers = () => {
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for(let i=0; i<4; i+=1) {
            const sel_item = candidates.splice(Math.floor(Math.random()*(9-i)), 1)[0];
            array.push(sel_item);
        }
        return array;
    };

    export default {
        data() {
            return {
                answer: getNumbers(),
                tries: [],
                value: '',
            }
        },
        methods: {
            initGame(msg) {
                alert(msg);
                this.tries = [];
                this.answer = getNumbers();
            },
            onSubmitForm(e) {
                // e.preventDefault();  -> v-on:submit => @submit.prevent
                if (this.value === this.answer.join('')) {
                    this.initGame('Homerun! Good by!');
                } else if (this.tries.length >= 10) {
                    this.initGame(`Defeated!! Answer is ${this.answer}`);
                } else {
                    let strike = 0;
                    let ball = 0;
                    const values = this.value.split('').map(v => parseInt(v));
                    for(let i=0;i<4;i++) {
                        if (values[i] === this.answer[i]) {
                            strike++;
                        } else if (this.answer.includes(values[i])) {
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} strike, ${ball} ball.`,
                    });
                }
                this.value = '';
                this.$refs.answer.focus();
            }, 
        },
    };
</script>

<style scoped>

</style>