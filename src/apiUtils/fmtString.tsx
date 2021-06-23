/**
 * fmtString
 * queryの文字列または文字配列をstringで返却する関数
 * @param value queryの文字列、文字配列
 * @return(value) 配列なら0番目を返却し文字ならそのまま返却する
 */
const fmtString = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value[0];
  }
  console.log('--- fmtString: ', value);
  return value;
};

export default fmtString;
