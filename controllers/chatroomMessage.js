const { ChatroomMessage, ChatroomUser, Chatroom } = require("../models");
const { errorResponse, ERROR_MESSAGES, successResponse, validateChatroomUser } = require("../util");

const getMessages = async ( req, res ) => {
    const { chatroomId } = req.params

    const chunkIndex = parseInt(req.body.chunkIndex, 10) || 0;
    const limit = parseInt(req.body.chunkSize, 10) || 30;
    const offset = chunkIndex * limit;

    const { id: userId } = req.user;
    try {
        const chatroom = await Chatroom.findOne({
            where: {
                id: chatroomId
            }
        });

        if (!chatroom) {
            return res.status(404).json(errorResponse("FetchMessages", ERROR_MESSAGES.chatroomNotFound));
        };
        
        if (chatroom.isPrivate) {
            const chatroomUser = await validateChatroomUser(chatroomId, userId)
            console.log(chatroomUser)
            if (!chatroomUser) {
                return res.status(400).json(errorResponse("FetchMessages", ERROR_MESSAGES.privateChatroom));
            };
        };

        const messages = await ChatroomMessage.findAll({
            where: {
                chatroomId
            },
            order: [["createdAt", "DESC"]],
            limit,
            offset
        });

        if (messages.length === 0 && chunkIndex === 0) {
            return res.status(200).json(successResponse({
                message: "No messages in this chatroom.",
                messages: []
            }));
        };

        return res.status(200).json(successResponse({
            message: "Messages fetched successfully.",
            messages
        }));

    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json(errorResponse("GetMessages", ERROR_MESSAGES.getMessages));
    };
};

const addMessage = async ( req, res ) => {
    const { chatroomId } = req.params;
    const { content } = req.body;
    const { id: userId } = req.user;
    if (!content) {
        return res.status(400).json(errorResponse("AddMessage", ERROR_MESSAGES.emptyMessage));
    };

    try {
        const chatroomUser = await ChatroomUser.findOne({
            where: {
                chatroomId,
                userId
            }
        });

        if (!chatroomUser) {
            return res.status(400).json(errorResponse("AddMessage", ERROR_MESSAGES.userNotInChatroom));
        };

        const newMessage = await ChatroomMessage.create({
            userId,
            chatroomId,
            content
        });

        return res.status(200).json(successResponse({
            message: "Message added successfully.",
            chatroomMessage: newMessage
        }));

    } catch (error) {
        console.error("Error adding message:", error);
        return res.status(500).json(errorResponse("AddMessage", ERROR_MESSAGES.addingMessage));
    };
};

const removeMessage = async ( req, res ) => {
    const { messageId } = req.params;
    const { id: userId } = req.user;

    try {
        const message = await ChatroomMessage.findOne({
            where: {
                id: messageId
            }
        });

        if (!message) {
            return res.status(404).json("RemoveMessage", ERROR_MESSAGES.messageNotFound);
        };

        const chatroom = await Chatroom.findOne({
            where: {
                id: message.chatroomId
            }
        });

        if (chatroom.createdBy !== userId) {
            return res.status(403).json(errorResponse("RemoveMessage", ERROR_MESSAGES.chatroomOwnerOnly));
        };

        await ChatroomMessage.destroy({
            where: {
                id: messageId
            }
        });

        return res.status(200).json(successResponse({
            message: "Message removed successfully."
        }));

    } catch (error) {
        console.error("Error removing message:", error);
        return res.status(500).json(errorResponse("RemoveMessage", ERROR_MESSAGES.removingMessage));
    };
};

module.exports = {
    getMessages,
    addMessage,
    removeMessage
};