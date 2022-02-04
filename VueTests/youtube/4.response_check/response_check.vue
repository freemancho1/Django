<template>
    <div>
        <h1>Response Check</h1>
        <div id="screen" :class="state" @click="ocScreen" v-html="message"></div>
        <template v-if="clickTimes.length">
            <div>Average Time: {{avgClickTime}} ms, {{clickTimes.length}} tries.</div>
            <button @click="ocReset">Reset</button>
        </template>
    </div>
</template>

<script>
    let startTime = null;
    let endTime = null;
    let timeout = null;
    let messages = [
        'Click to get started.',
        'When it turns green, click box.',
        'Click Now!!',
        'You\'re too hasty.'
    ];

    export default {
        data() {
            return {
                clickTimes: [],
                state: "waiting",
                message: messages[0],
            }
        },
        computed: {
            avgClickTime() {
                return this.clickTimes.reduce((a,b) => a + b, 0) / this.clickTimes.length || 0;
            },
        },
        methods: {
            ocReset() {
                this.clickTimes = [];
                this.state = "waiting";
                this.message = messages[0];
            },
            ocScreen() {
                if (this.state === "waiting") {
                    this.state = "ready";
                    this.message = messages[1];
                    timeout = setTimeout(() => {
                        this.state = "now";
                        this.message = messages[2];
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000);
                } else if (this.state === "ready") {
                    clearTimeout(timeout);
                    this.state = "waiting";
                    this.message = `${messages[3]}<br/>${messages[1]}<br/>${messages[0]}`;
                } else if (this.state === "now") { 
                    this.state = "waiting";
                    this.message = messages[0];
                    endTime = new Date();
                    this.clickTimes.push(endTime - startTime);
                }
            },
        },
    };
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: green;
    }
</style>