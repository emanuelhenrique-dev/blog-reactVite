// svg-inject.d.ts
declare module '@iconfu/svg-inject' {
  type SVGInjectConfig = {
    beforeInject?: (img: HTMLImageElement, svg: SVGElement) => void;
    afterInject?: (img: HTMLImageElement, svg: SVGElement) => void;
    onFail?: (img: HTMLImageElement) => void;
  };

  function SVGInject(
    imgs: HTMLImageElement | HTMLImageElement[] | NodeListOf<HTMLImageElement>,
    config?: SVGInjectConfig
  ): void;

  export default SVGInject;
}
