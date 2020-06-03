const express = require('express');
const server = express();
const { PORT } = require('./config');
const { HomeRoutes, FlowersRoutes } = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');

server.use(express.static('./public'));
server.use(express.json());

server.use("/", HomeRoutes)
server.use("/", FlowersRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
});
