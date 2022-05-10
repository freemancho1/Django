<template>
<div class="component-user-define-button">
    
    <button 
        v-bind="$attrs"
        :type="type"
        :class="classes"
        ref="button"
        v-on="type==='switch' ? { click: ocSwitch }: {}">

        <slot></slot>

    </button>

</div>
</template>


<script setup>
import { ref, onMounted, defineProps, useAttrs } from 'vue';

const attrs = useAttrs();
const props = defineProps({
    type: {
        default: 'button',
        validator: (value) => {
            const button_type = ['button', 'submit', 'reset', 'switch'];
            return button_type.includes(value);
        },
    },
    sm: Boolean,
    md: {
        type: Boolean,
        default: true,
    },
    lg: Boolean,
    pill: Boolean,
});

const classes = ref([]);
const button = ref(null);
const active = ref(false);

if (props.sm) classes.value.push('ssm')
else if (props.lg) classes.value.push('slg')
else classes.value.push('smd')

if (props.pill) classes.value.push('pill')

const ocSwitch = () => {
    if (active.value)
        classes.value = classes.value.filter((c) => c != 'deactive');
    else
        classes.value.push('deactive');
    active.value = !active.value;
}

onMounted(() => {
    Object.keys(attrs).forEach((attr) => {
        if (attr.startsWith('text-'))
            button.value.style.color = attr.substring(5);
        if (attr.startsWith('bg-'))
            button.value.style.backgroundColor = attr.substring(3);
    });
    console.log(classes.value);
});

</script>

<style scoped lang="scss">
.ssm {
    height: 30px;
    font-size: 10px !important;
}
.smd {
    height: 40px;
    font-size: 15px !important;
}
.slg {
    height: 50px;
    font-size: 20px !important;
}

.pill {
    border-radius: 16px;
}

.deactive {
    filter: brightness(50%);
}
</style>