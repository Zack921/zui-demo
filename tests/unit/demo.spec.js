import { shallowMount } from '@vue/test-utils';
import ZDemo from '../../components/lib/demo/src/main.vue';
import expect from 'expect';

describe('ZDemo', () => {
  it('renders a message', () => {
    const wrapper = shallowMount(ZDemo, {
      propsData: {
        someProp: 'Hello World'
      }
    })

    // 确认是否渲染了 `someProp`
    expect(wrapper.text()).toEqual('Demo Hello World')
  })
})