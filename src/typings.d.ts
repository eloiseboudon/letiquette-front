/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare module noUiSlider {
  interface noUiSlider {
  }

  interface Instance extends HTMLElement {
      noUiSlider: noUiSlider
  }
}
