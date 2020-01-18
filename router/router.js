import express from 'express';
import { routeHelpers } from 'channel-lib';
import ActivitytService from '../../../../services/activity-service';

const activitiesRouter = express.Router();

activitiesRouter.get('/:id', (req, res) => {
	new ActivitytService(req.$user)
		.find (req.params.id)
		.then((result) => res.json(result))
		.catch((err) => routeHelpers.routerOnError(err, res));
});

export default activitiesRouter;


