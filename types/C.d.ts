import React from 'react';
import { LayoutChangeEvent } from 'react-native';
export interface CProps {
    loading?: boolean;
    processing?: boolean;
    indicatorSize?: number;
    indicatorColor?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    staticHeader?: React.ReactNode;
    staticFooter?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
    onLayout?: (event: LayoutChangeEvent) => void;
}
declare const C: ({ loading, onLayout, footer, staticFooter, staticHeader, children, processing, header, indicatorColor, indicatorSize, loadingIndicator }: CProps) => JSX.Element;
export default C;
