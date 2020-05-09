<template>
    <div>
        <div>
            <div v-if="show.form" class="input-value">{{ form.input }}</div>
            <div class="set-value" @click="setValue()">设置内容</div>
            <div class="clear-value" @click="clearValue()">重制内容</div>
            <div class="submit" @click="handleSubmit">重制内容</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            form: {
                input: ''
            },
            show: {
                form: true
            },
            result: ''
        }
    },
    methods: {
        setValue (val) {
            this.form.input = 'hhhhhh'
            this.show.form = true
            return val
        },
        clearValue () {
            this.form.input = ''
            this.show.form = false
        }
    }
}
</script>
