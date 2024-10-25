const Alexa = require('ask-sdk-core');
const Util = require('./util.js');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const audioUrl = Util.getS3PreSignedUrl("Audio/eatfd.mp3").replace(/&/g,'&amp;');
        return handlerInput.responseBuilder
                .speak(`<audio src="${audioUrl}"/>`)
                .getResponse();
    }
};
