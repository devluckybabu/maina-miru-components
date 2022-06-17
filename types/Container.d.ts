import React from 'react';
import { LayoutChangeEvent } from 'react-native';
export interface ContainerProps {
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
declare const Container: ({ loading, onLayout, footer, staticFooter, staticHeader, children, processing, header, indicatorColor, indicatorSize, loadingIndicator }: ContainerProps) => JSX.Element;
export default Container;
