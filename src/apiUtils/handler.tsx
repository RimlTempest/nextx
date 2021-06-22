import { NextApiRequest, NextApiResponse } from 'next';
import NextConnect from 'next-connect';
import { errorMessageType } from '../types/errorMessageType';

const reqMethodErr = (method: string) => {
    const _mes: errorMessageType = {
        error: {
            message: `Error: ${method} Not Allowed`,
        },
    };
    return _mes;
};

const err = (mes: string) => {
    const _mes: errorMessageType = {
        error: {
            message: mes,
        },
    };
    return _mes;
};

export default NextConnect<NextApiRequest, NextApiResponse>({
    onNoMatch(req, res) {
        res.status(405).json(reqMethodErr(req.method!));
    },
    onError(error, req, res) {
        res.status(501).json(err(error.message));
    },
});
