import useSWR from "swr";
import { helloResponse } from '../types/helloResponse';

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