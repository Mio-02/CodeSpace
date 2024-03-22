"use strict";
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
}
const _sfc_main$1 = {
  name: "Header",
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    handle(val) {
      this.detailShow = val;
    }
  }
};
if (!Array) {
  const _easycom_Support_icon2 = common_vendor.resolveComponent("Support-icon");
  const _easycom_Header_detail2 = common_vendor.resolveComponent("Header-detail");
  (_easycom_Support_icon2 + _easycom_Header_detail2)();
}
const _easycom_Support_icon = () => "./components/Support-icon/Support-icon.js";
const _easycom_Header_detail = () => "./components/Header-detail/Header-detail.js";
if (!Math) {
  (_easycom_Support_icon + _easycom_Header_detail)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: 1,
      type: 1
    }),
    b: $data.detailShow,
    c: common_vendor.o($options.handle),
    d: common_vendor.o((...args) => $options.showDetail && $options.showDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-5ada1ca4"], ["__file", "G:/VS-Code-Study/codeSpace/uniapp/Sell/components/Header/Header.vue"]]);
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/VS-Code-Study/codeSpace/uniapp/Sell/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.Component = Component;
exports.createApp = createApp;
