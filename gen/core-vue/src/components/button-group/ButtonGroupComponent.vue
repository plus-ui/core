
    <script setup lang="ts">
      import { h, useSlots } from "vue";
      import { assignSlotNodes, Slots } from "@lit-labs/vue-utils/wrapper-utils.js";
      import '@plusui/core/dist/components/button-group/button-group.component.js';
      

      export interface Props {
     
   }

      

      

      const slots = useSlots();

      const render = () => {
        const eventProps = {
    
  };
        const props = eventProps as (typeof eventProps & Props);

        

        return h(
          'plus-button-group',
          props,
          assignSlotNodes(slots as Slots)
        );
      };
    </script>
    <template><render /></template>