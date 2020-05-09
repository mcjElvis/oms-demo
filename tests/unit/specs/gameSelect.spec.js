import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import GameSelect from '@/components/gameSelect/gameSelect.vue'

const localVue = createLocalVue()

describe('测试游戏选择组件', () => {
    it('测试返回当前游戏的key值', () => {
        const warpper = mount(GameSelect, {
            stubs: {
                transition: false
            },
            localVue
        })
        return Vue.nextTick(function () {
            // expect(warpper.findAll('.game-name').innerHTML).toBe('绝世战魂')
            expect(warpper.vm.select(1)).toEqual('绝世战魂')
        })
    })
})
