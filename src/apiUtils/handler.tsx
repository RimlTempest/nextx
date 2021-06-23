import { NextApiRequest, NextApiResponse } from 'next';
import NextConnect from 'next-connect';
import { errorMessageType } from '../types/errorMessageType';

/**
 * reqMethodErr
 * エラーメッセージをjson encodeするためにオブジェクトとして返す関数
 * @param mes エラーメッセージ
 * @return(_mes) errorMessageType型のオブジェクトを返却
 */
const reqMethodErr = (mes: string) => {
  const _mes: errorMessageType = {
    error: {
      message: mes,
    },
  };
  return _mes;
};

/**
 * handler
 * 共通化処理を行うhandler
 */
export default NextConnect<NextApiRequest, NextApiResponse>({
  onNoMatch(req, res) {
    res.status(405).json(reqMethodErr(req.method!));
  },
  onError(error, req, res) {
    res.status(501).json(reqMethodErr(error.message));
  },
});
