import express, {
    ExpressRequest,
    ExpressResponse,
} from 'CommonServer/utils/Express';

import WebHookHooks from '../types/WebhookHooks';

const router = express.getRouter();

const hook: WebHookHooks: $TSFixMe = {};

router.post(
    '/api/webhooks/:id',
    (req: ExpressRequest, res: ExpressResponse) => {
        const id = req.params['id'] as string;
        hook[id] = req.body;
        return res.status(200).json(req.body);
    }
);

router.get('/api/webhooks/:id', (req: ExpressRequest, res: ExpressResponse) => {
    const id = req.params['id'] as string;

    if (hook[id] === undefined) {
        return res.status(404).json({});
    }

    return res.status(200).json(hook[id]);
});

export default router;
