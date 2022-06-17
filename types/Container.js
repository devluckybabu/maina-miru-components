"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
;
const Container = ({ loading, onLayout, footer, staticFooter, staticHeader, children, processing = false, header, indicatorColor, indicatorSize, loadingIndicator }) => {
    if (loading) {
        return (<react_native_1.View onLayout={onLayout} style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
        {loadingIndicator !== null && loadingIndicator !== void 0 ? loadingIndicator : <react_native_1.ActivityIndicator color={indicatorColor} size={indicatorSize}/>}
      </react_native_1.View>);
    }
    ;
    return (<react_native_1.View onLayout={onLayout} style={{ flex: 1, position: 'relative' }}>
      {staticHeader}
      <react_native_1.View style={{ flex: 1, position: 'relative' }}>
        {header}
        <react_native_1.View style={{ flex: 1, position: 'relative' }} children={children}/>
        {footer}
      </react_native_1.View>
      {staticFooter}
      <react_native_1.Modal animationType="none" transparent={true} visible={processing} statusBarTranslucent={true}>
        <react_native_1.View style={{
            flex: 1, position: 'relative',
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center', alignItems: 'center', padding: 10
        }}>
          {loadingIndicator !== null && loadingIndicator !== void 0 ? loadingIndicator : <react_native_1.ActivityIndicator color={indicatorColor} size={indicatorSize}/>}
        </react_native_1.View>
      </react_native_1.Modal>
    </react_native_1.View>);
};
exports.default = Container;
//# sourceMappingURL=Container.js.map