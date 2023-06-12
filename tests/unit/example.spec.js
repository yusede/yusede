import { shallowMount } from '@vue/test-utils'
import testCompVue from '@/components/testComp.vue'

describe('testCompVue.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'test code'
    const wrapper = shallowMount(testCompVue, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
