import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Axios from '@/components/axios/axios.vue'

const localVue = createLocalVue()

describe('模拟axios', () => {
    it('测试接口请求', () => {
        const warpper = mount(Axios, {
            stubs: {
                transition: false
            },
            localVue
        })
        const result = warpper.vm.handleSubmit()
        return Vue.nextTick(function () {
            expect(result).toEqual({ status: 200 })
        })
    })
})
