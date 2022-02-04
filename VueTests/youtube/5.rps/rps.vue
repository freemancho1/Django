<template>
    <div>
        <h1>Rock Paper Scissors</h1>
        <div id="computer" :style="computedImgUrl"></div>
        <div>
            <button @click="ocRPS(0)">Rock</button>
            <button @click="ocRPS(1)">Paper</button>
            <button @click="ocRPS(2)">Scissors</button>
        </div>
        <div>{{result}}</div>
        <div>Score: {{score}}</div>
        <button @click="ocReset">Reset</button>
    </div>
</template>

<script>
    const rpsCodes = {rock: 0, paper: 1, scissors: 2,};
    const rpsScores = [ 0, -1, 1];
    const imgPositions = ['0px', '-284px', '-142px'];
    let rpsCode = rpsCodes.rock;

    let interval = null;

    export default {
        data() {
            return {
                imgPosition: imgPositions[rpsCode],
                result: '',
                score: 0,
            };
        },
        computed: {
            computedImgUrl() {
                return { background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgPosition} 0` };
            },
        },
        methods: {
            startInterval() {
                interval = setInterval(() => {
                    switch(rpsCode) {
                        case rpsCodes.rock: rpsCode = rpsCodes.paper; break;
                        case rpsCodes.paper: rpsCode = rpsCodes.scissors; break;
                        case rpsCodes.scissors: rpsCode = rpsCodes.rock; break;
                        default: break;
                    }
                    this.imgPosition = imgPositions[rpsCode];
                }, 100);
            },
            ocReset() {
                rpsCode = rpsCodes.rock;
                this.imgPosition = imgPositions[rpsCode];
                this.score = 0;
                clearInterval(interval);
                this.startInterval();
            },
            ocRPS(choice) {
                clearInterval(interval);
                const myScore = rpsScores[choice];
                const cpuScore = rpsScores[rpsCode];
                const diff = myScore - cpuScore;
                if ([-1, 2].includes(diff)) {
                    this.result = "You Win!!";
                    this.score += 1;
                } else if (diff === 0) {
                    this.result = "It\'s a draw..";
                } else {
                    this.result = "Computer Win!!";
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.startInterval();
                }, 2000);
            },
        },
        mounted() {
            this.startInterval();
        },
        beforeDestroy() {
            clearInterval(interval);
        },
    };
</script>

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>