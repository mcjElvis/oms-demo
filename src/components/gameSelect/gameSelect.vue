<template>
    <div>
        <div class="game-name">{{ gameName }}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            gameLists: [
                {
                    name: '绝世战魂',
                    gid: 1,
                    key: 1
                },
                {
                    name: '剑侠缥缈录',
                    gid: 2,
                    key: 2
                }
            ],
            gameName: ''
        }
    },
    created () {
        this.select()
    },
    methods: {
        select (x) {
            this.gameLists.map((item) => {
                if (item.gid === x) {
                    this.gameName = item.name
                }
            })
        }
    }
}
</script>
