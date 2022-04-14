import express, {
    ExpressRequest,
    ExpressResponse,
} from 'CommonServer/Utils/Express';
const router = express.getRouter();

import SmsLogsService from '../services/smsCountService';
const getUser = require('../middlewares/user').getUser;
const isUserMasterAdmin = require('../middlewares/user').isUserMasterAdmin;

import { sendErrorResponse } from 'CommonServer/Utils/response';
import Exception from 'Common/Types/Exception/Exception';

import { sendListResponse } from 'CommonServer/Utils/response';

import { sendItemResponse } from 'CommonServer/Utils/response';

router.get(
    '/',
    getUser,
    isUserMasterAdmin,
    async (req: ExpressRequest, res: ExpressResponse) => {
        try {
            const selectSmsCount =
                'userId sentTo createdAt projectId parentProjectId deleted deletedAt deletedById content status error';
            const query: $TSFixMe = {};
            const skip = req.query['skip'];
            const limit = req.query['limit'];
            const [smsLogs, count] = await Promise.all([
                SmsLogsService.findBy({
                    query,
                    limit,
                    skip,
                    select: selectSmsCount,
                }),
                SmsLogsService.countBy(query),
            ]);
            return sendListResponse(req, res, smsLogs, count);
        } catch (error) {
            return sendErrorResponse(req, res, error as Exception);
        }
    }
);

router.post(
    '/',
    getUser,
    isUserMasterAdmin,
    async (req: ExpressRequest, res: ExpressResponse) => {
        try {
            const data = req.body;

            if (!data) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Values should not be null',
                });
            }
            if (!data.status || !data.status.trim()) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'SMS Log Status is required',
                });
            }
            if (!data.userId || !data.userId.trim()) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'SMS Log UserId is required',
                });
            }

            if (!data.sentTo || !data.sendTo.trim()) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Email Log Recipient name is required',
                });
            }

            if (!data.projectId || !data.projectId.trim()) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'SMS Log ProjectId is required',
                });
            }

            if (!data.content || !data.content.trim()) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'SMS Log Content is required',
                });
            }

            const smsLog = await SmsLogsService.create(data);
            return sendItemResponse(req, res, smsLog);
        } catch (error) {
            return sendErrorResponse(req, res, error as Exception);
        }
    }
);

router.post(
    '/search',
    getUser,
    isUserMasterAdmin,
    async (req: ExpressRequest, res: ExpressResponse) => {
        try {
            const filter = req.body.filter;
            const skip = req.query['skip'];
            const limit = req.query['limit'];

            const { searchedSmsLogs, totalSearchCount } =
                await SmsLogsService.search({ filter, skip, limit });

            return sendListResponse(
                req,
                res,
                searchedSmsLogs,
                totalSearchCount
            );
        } catch (error) {
            return sendErrorResponse(req, res, error as Exception);
        }
    }
);

router.delete(
    '/',
    getUser,
    isUserMasterAdmin,
    async (req: ExpressRequest, res: ExpressResponse) => {
        try {
            const query: $TSFixMe = {};

            const msg = await SmsLogsService.hardDeleteBy({ query });

            return sendItemResponse(req, res, msg);
        } catch (error) {
            return sendErrorResponse(req, res, error as Exception);
        }
    }
);

export default router;
