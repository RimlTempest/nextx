import { IOptions, RecursivePartial } from "react-tsparticles";

/**
* BackgroundProps
* Background(アニメーションコンポーネント)のProps
* @alias options アニメーションのオプション
*/
export type BackgroundProps = {
  options: RecursivePartial<IOptions> | undefined;
};