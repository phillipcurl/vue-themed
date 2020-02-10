import { install } from "./install";
import Vue from "vue";
export default class VueUI {
    static install: typeof install;
    static installed: boolean;
    constructor(userPreset?: {});
    init(root: Vue, ssrContext?: object): void;
    use(Service: {}): void;
}
