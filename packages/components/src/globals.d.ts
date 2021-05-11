/* eslint-disable max-len */
import {
  Component,
  PluginFunction,
  VueConstructor,
  DirectiveOptions,
  ComponentOptions,
  FunctionalComponentOptions,
  VNodeData
} from "vue";

import { CombinedVueInstance, Vue } from "vue/types/vue";
import {
  RecordPropsDefinition,
  ThisTypedComponentOptionsWithArrayProps,
  ThisTypedComponentOptionsWithRecordProps
} from "vue/types/options";

import ThemeProvider from "./../../core/src/themeProvider";

declare global {
  interface Window {
    Vue: VueConstructor;
  }

  interface HTMLCollection {
    [Symbol.iterator](): IterableIterator<Element>;
  }

  interface Element {
    getElementsByClassName(classNames: string): NodeListOf<HTMLElement>;
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject;
    _onResize?: {
      callback: () => void;
      options?: boolean | AddEventListenerOptions;
    };
    _observe?: {
      init: boolean;
      observer: IntersectionObserver;
    };
    _mutate?: {
      observer: MutationObserver;
    };
    _onScroll?: {
      callback: EventListenerOrEventListenerObject;
      options: boolean | AddEventListenerOptions;
      target: EventTarget;
    };
  }

  interface WheelEvent {
    path?: EventTarget[];
  }

  function parseInt(s: string | number, radix?: number): number;
  function parseFloat(string: string | number): number;

  export type Dictionary<T> = Record<string, T>;

  export const __VUEUI_VERSION__: string;
  export const __REQUIRED_VUE__: string;
}

declare module "vue/types/vnode" {
  export interface VNodeData {
    model?: {
      callback: (v: any) => void;
      expression: string;
      value: any;
    };
  }
}

declare const VueThemed: VueThemed;
export default VueThemed;
export interface VueThemed {
  // themeProvider: ThemeProvider;
  install: PluginFunction<{}>;
  // preset: VuetifyPreset;
  // userPreset: UserVuetifyPreset
  // version: string;
  // new (preset?: Partial<UserVuetifyPreset>): Vuetify
}

declare module "vue/types/vue" {
  export interface Vue {
    $theme: ThemeProvider;
  }
}

// declare module "vue/types/options" {
//   export interface ComponentOptions<
//     V extends Vue,
//     Data = DefaultData<V>,
//     Methods = DefaultMethods<V>,
//     Computed = DefaultComputed,
//     PropsDef = PropsDefinition<DefaultProps>,
//     Props = DefaultProps
//   > {
//     vueThemed?: VueThemed;
//   }
// }

declare module "vue/types/vue" {
  export type OptionsVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props,
    Options = {}
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue,
    Options
  >;

  export interface Vue {
    _uid: number;
    _isDestroyed: boolean;

    /** bindObjectProps */
    _b(
      data: VNodeData,
      tag: string,
      value: Dictionary<any> | Dictionary<any>[],
      asProp?: boolean,
      isSync?: boolean
    ): VNodeData;

    /** bindObjectListeners */
    _g(data: VNodeData, value: {}): VNodeData;
  }

  export interface RawComponentOptions<
    V extends Vue = Vue,
    Data = {} | undefined,
    Methods = {} | undefined,
    Computed = {} | undefined,
    Props = {} | undefined
  > {
    name?: string;
    data: Data;
    methods: Methods;
    computed: {
      [C in keyof Computed]: (this: V) => Computed[C];
    };
    props: Props;
  }

  interface VueConstructor<V extends Vue = Vue, Options = Record<string, any>> {
    version: string;
    /* eslint-disable-next-line camelcase */
    $_vuethemed_subcomponents?: Record<string, VueConstructor>;
    /* eslint-disable-next-line camelcase */
    $_vuethemed_installed?: true;
    options: Options;

    extend<Data, Methods, Computed, Options, PropNames extends string = never>(
      options?: ThisTypedComponentOptionsWithArrayProps<
        V,
        Data,
        Methods,
        Computed,
        PropNames
      > &
        Options
    ): OptionsVue<V, Data, Methods, Computed, Record<PropNames, any>, Options>;
    extend<Data, Methods, Computed, Props, Options>(
      options?: ThisTypedComponentOptionsWithRecordProps<
        V,
        Data,
        Methods,
        Computed,
        Props
      > &
        Options
    ): OptionsVue<V, Data, Methods, Computed, Props, Options>;
    extend<Options, PropNames extends string = never>(
      definition: FunctionalComponentOptions<
        Record<PropNames, any>,
        PropNames[]
      > &
        Options
    ): OptionsVue<V, {}, {}, {}, Record<PropNames, any>, Options>;
    extend<Props, Options>(
      definition: FunctionalComponentOptions<
        Props,
        RecordPropsDefinition<Props>
      > &
        Options
    ): OptionsVue<V, {}, {}, {}, Props, Options>;
    extend<V extends Vue = Vue>(
      options?: ComponentOptions<V> & Options
    ): OptionsVue<V, {}, {}, {}, {}, Options>;
  }
}