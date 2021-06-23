/**
* ButtonProps
* ボタンのProps
* @alias primary? プライマリ設定を使用するか
* @alias backgroundColor? ボタンの背景色
* @alias size? ボタンのサイズ
* @alias label ボタンのテキスト
* @alias onClick ボタンをクリックした際の動作
*/
export type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};