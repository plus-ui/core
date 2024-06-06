
    <script setup lang="ts">
      import { h, useSlots, reactive } from "vue";
      import { assignSlotNodes, Slots } from "@lit-labs/vue-utils/wrapper-utils.js";
      import '@plusui/core/dist/components/textarea/textarea.component.js';
      

      export interface Props {
     name?: string;
     value?: string;
     placeholder?: string;
     size?: string;
     clearable?: boolean;
     label?: string;
     minlength?: number;
     maxlength?: number;
     autocapitalize?: string;
     autocorrect?: string;
     autocomplete?: string;
     autofocus?: boolean;
     enterkeyhint?: string;
     inputmode?: string;
     spellcheck?: boolean;
     caption?: string;
     error?: boolean;
     rows?: number;
     cols?: number;
     resize?: string;
     fullWidth?: boolean
   }

      
  const vueProps = defineProps<Props>();

  const defaults = reactive({} as Props);
  const vDefaults = {
    created(el: any) {
      for (const p in vueProps) {
        defaults[p as keyof Props] = el[p];
      }
    }
  };

  let hasRendered = false;

      

      const slots = useSlots();

      const render = () => {
        const eventProps = {
    
  };
        const props = eventProps as (typeof eventProps & Props);

        
      for (const p in vueProps) {
        const v = vueProps[p as keyof Props];
        if ((v !== undefined) || hasRendered) {
          (props[p as keyof Props] as unknown) = v ?? defaults[p as keyof Props];
        }
      }

      hasRendered = true;
    

        return h(
          'plus-textarea',
          props,
          assignSlotNodes(slots as Slots)
        );
      };
    </script>
    <template><render v-defaults /></template>