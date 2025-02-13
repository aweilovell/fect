import { computed, toRefs } from 'vue'
import { createNameSpace } from '../utils'
const [createComponent] = createNameSpace('Input')
import './input.less'

export default createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div>
        <input type="text" />
      </div>
    )
  },
})
