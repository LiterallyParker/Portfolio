const express = require("express");
const apiRoutes = express.Router();
const { requireUser } = require("../auth");

const userRoutes = require('./user');
apiRoutes.use('/users', userRoutes);

const accountRoutes = require('./account');
apiRoutes.use('/account', requireUser, accountRoutes);

const chatroomRoutes = require('./chatroom');
apiRoutes.use('/chatroom', requireUser, chatroomRoutes);

const chatroomUserRoutes = require('./chatroomUsers');
apiRoutes.use('/chatroom-users', requireUser, chatroomUserRoutes);

const chatroomMessageRoutes = require('./chatroomMessages');
apiRoutes.use('/messages', chatroomMessageRoutes);

module.exports = apiRoutes;