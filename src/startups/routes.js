import express from 'express';
import { SERVER } from '../config';
const { BASE_URL } = SERVER;

import { suggestionRouter } from '../routers/';
const RouteData = [{ path: '/suggestion', router: suggestionRouter }];

export const Routes = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	RouteData.forEach((route) => app.use(BASE_URL + route.path, route.router));
};
