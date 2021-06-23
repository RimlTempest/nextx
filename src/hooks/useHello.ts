import useSWR from "swr";
import { helloResponse } from '../types/helloResponse';

/**
 * useHello
 * /api/helloのレスポンスを返却するHook
 * @param name 名前
 * @param name 詳細文
 * @return({data, isLoading, isError}) dataではレスポンスを返却, isLoadingではuseSWRによって読み込み中を返却, isErrorではエラーが出た場合エラーを返却する
 */
export const useHello = (name: string, description: string) => {
    const { data, error } = useSWR<helloResponse>(
        `/api/hello?name=${name}&description=${description}`
        );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}