<template>
    <div>
        <div>
            <div class="submit" @click="handleSubmit">重制内容</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            result: ''
        }
    },
    methods: {
        handleSubmit () {
            this.$apis.initMenu().then((res) => {
                this.result = res.data
            })
            return this.result
        }
    }
}
</script>
