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
        const booleans = warpper.vm.booleans
        return Vue.nextTick(function () {
            expect(booleans).toBe(true)
            let url = 'http://yapi.youximao.cn/mock/509/web/common/initMenu'
            expect(Axios.post).toBeCalledWith(url)
        })
    })
})
