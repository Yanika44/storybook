import { MyComponent } from './MyComponent';

// More on default export: https://storybook.js.org/docs/writing-stories/#default-export
export default {
  component: MyComponent,
};

export const Example = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/g4tpL4ZHEnA2s7Qy8ur36I/Design-System-For-Mobile?node-id=4432-32643&t=ruUPSalkjcPIasHB-1',
    },
  },
};