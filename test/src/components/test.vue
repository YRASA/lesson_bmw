<template>
<!-- 模板区域(DOM结构) -->
    <h2 class="red">test...{{msg}}</h2>
</template>

<script>
// 脚本区域
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: " test msg"
            }
        },
        methods:{

        },
        data() {
            return {

            }
        },
    }
</script>

<style>
/* 样式区域 */
    .red {
        color: #ff0000;
    }
</style>