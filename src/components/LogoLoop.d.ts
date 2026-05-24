declare module '@/components/LogoLoop.jsx' {
  import type { CSSProperties, ReactNode } from 'react';

  export type LogoLoopImage = {
    src: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
    alt?: string;
    title?: string;
    href?: string;
  };

  export type LogoLoopNode = {
    node: ReactNode;
    ariaLabel?: string;
    title?: string;
    href?: string;
  };

  export type LogoLoopItem = LogoLoopImage | LogoLoopNode;

  export type LogoLoopProps = {
    logos: LogoLoopItem[];
    speed?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
    width?: number | string;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoLoopItem, key: string) => ReactNode;
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
  };

  export function LogoLoop(props: LogoLoopProps): ReactNode;
  export default LogoLoop;
}
