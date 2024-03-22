"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Support-icon",
  props: {
    // 接收父组件传过来的值
    size: {
      type: String,
      default: "1"
    },
    type: {
      type: Number,
      default: 0
    }
  },
  computed: {
    iconClass() {
      const classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
      return `icon-${this.size} ${classMap[this.type]}`;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($options.iconClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d2014ce8"], ["__file", "G:/VS-Code-Study/codeSpace/uniapp/Sell/components/Support-icon/Support-icon.vue"]]);
wx.createComponent(Component);
