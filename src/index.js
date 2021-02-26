import express from 'express';
import { startServer, setupDb, setupCors, Routes, seedSuggestions } from './startups';

const app = express();

// start server
startServer(app);

//  connect with database
setupDb();

// seed suggestions
seedSuggestions();

// cors
setupCors(app);

// setup Routes
Routes(app);
