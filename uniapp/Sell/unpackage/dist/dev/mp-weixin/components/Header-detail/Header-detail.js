"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Header-detail",
  data() {
    return {};
  },
  methods: {
    hideDetail() {
      this.$emit("hide", false);
    }
  }
};
if (!Array) {
  const _easycom_Support_icon2 = common_vendor.resolveComponent("Support-icon");
  const _component_transition = common_vendor.resolveComponent("transition");
  (_easycom_Support_icon2 + _component_transition)();
}
const _easycom_Support_icon = () => "../Support-icon/Support-icon.js";
if (!Math) {
  _easycom_Support_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: 1,
      type: 1
    }),
    b: common_vendor.p({
      size: 1,
      type: 2
    }),
    c: common_vendor.p({
      size: 1,
      type: 1
    }),
    d: common_vendor.p({
      size: 1,
      type: 2
    }),
    e: common_vendor.p({
      size: 3,
      type: 1
    }),
    f: common_vendor.p({
      size: 3,
      type: 1
    }),
    g: common_vendor.o((...args) => $options.hideDetail && $options.hideDetail(...args)),
    h: common_vendor.p({
      name: "fade"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/VS-Code-Study/codeSpace/uniapp/Sell/components/Header-detail/Header-detail.vue"]]);
wx.createComponent(Component);
