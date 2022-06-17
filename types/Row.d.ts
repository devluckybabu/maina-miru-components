import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface RowsProps {
    backgroundColor?: string;
    border?: {
        top?: number;
        width?: number;
        color?: string;
        bottom?: number;
        right?: number;
        left?: number;
    };
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const Rows: ({ children, border, style }: RowsProps) => JSX.Element;
export default Rows;
