"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
;
const Rows = ({ children, border, style }) => {
    const borderStyle = {
        borderWidth: border === null || border === void 0 ? void 0 : border.width,
        borderColor: border === null || border === void 0 ? void 0 : border.color,
        borderTopWidth: border === null || border === void 0 ? void 0 : border.top,
        borderLeftWidth: border === null || border === void 0 ? void 0 : border.left,
        borderRightWidth: border === null || border === void 0 ? void 0 : border.right,
        borderBottomWidth: border === null || border === void 0 ? void 0 : border.bottom
    };
    return (<react_native_1.View style={[style, borderStyle, {
                maxWidth: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }]} children={children}/>);
};
exports.default = Rows;
//# sourceMappingURL=Rows.js.map