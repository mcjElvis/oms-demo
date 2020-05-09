import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Form from '@/components/form/form.vue'

const localVue = createLocalVue()

describe('测试表单', () => {
    it('测试输入框有内容', () => {
        const warpper = mount(Form, {
            stubs: {
                transition: false
            },
            localVue
        })
        warpper.find('.set-value').trigger('click')
        console.log(warpper.vm.setValue('hhhh'))
        return Vue.nextTick(function () {
            expect(warpper.findAll('.input-value').length).toBe(1)
        })
    })
    it('测试输入框没有内容', () => {
        const warpper = mount(Form, {
            stubs: {
                transition: false
            },
            localVue
        })
        warpper.find('.clear-value').trigger('click')
        return Vue.nextTick(function () {
            expect(warpper.findAll('.input-value').length).toBe(0)
        })
    })
})
