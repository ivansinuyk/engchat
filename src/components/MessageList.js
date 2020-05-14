import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import moment from 'moment';
import {
  dateBlockImage,
  dateBlockSticker,
  imageContainer,
  messageBlock,
  messageBlockStyle,
  messageDateBlock,
  messageTextStyle,
  myMessageStyle,
  otherMessageStyle,
  otherNickBlock,
  otherNickText,
  replyBlockStyle,
  replyImageStyle,
  replyLineStyle,
  replyTextBlock,
  stickerMessageStyle,
} from '../resource/style/chat';
import {remH, stickerArray, w, h} from '../resource/constants';

const MessageList = ({
  item,
  mynick,
  sametitle,
  showModal,
  itemsSelected,
  showSticker,
    showIncreasedPhoto,
}) => {
  const {
    nick,
    date,
    message,
    edited,
    messageType,
    replyMessage,
    replyNick,
    sticker,
    image,
    replyImage,
  } = item;
  const side = mynick === nick;
  const author = side ? myMessageStyle : otherMessageStyle;
  return (
    <TouchableWithoutFeedback onPress={(evn) => showModal(evn, item)}>
      <View
        style={[
          messageBlockStyle,
          {
            flexDirection: !side ? 'row' : 'column',
            backgroundColor: itemsSelected && '#a1bce6',
            marginTop: sametitle ? 13 * remH : 0,
          },
        ]}>
        <View
          style={[
            author,
            {
              maxWidth: messageType === 'image' ? w - w / 3.33 : '100%',
              backgroundColor:
                messageType === 'sticker'
                  ? 'transparent'
                  : side
                  ? '#f0ee71'
                  : '#FFFFFF',
            },
          ]}>
          {messageType === 'image' && (
            <TouchableWithoutFeedback onPress={() => showIncreasedPhoto(item)}>
              <Image style={imageContainer} source={{uri: image}} />
            </TouchableWithoutFeedback>
          )}
          {messageType === 'reply' && (
            <View style={replyBlockStyle}>
              <View style={replyLineStyle} />
              {replyImage && (
                <Image source={{uri: replyImage}} style={replyImageStyle} />
              )}
              <View style={replyTextBlock}>
                <Text style={otherNickText}>{replyNick}</Text>
                <Text style={messageTextStyle} numberOfLines={1}>
                  {replyMessage}
                </Text>
              </View>
            </View>
          )}
          {!side && sametitle && (
            <View style={otherNickBlock}>
              <Text style={otherNickText}>{nick}</Text>
            </View>
          )}
          {messageType === 'sticker' ? (
            <TouchableWithoutFeedback onPress={showSticker}>
              <Image
                style={stickerMessageStyle}
                source={stickerArray[sticker]}
              />
            </TouchableWithoutFeedback>
          ) : message ? (
            <View style={messageBlock}>
              <Text style={messageTextStyle}>{message}</Text>
            </View>
          ) : (
            <View />
          )}
          <View
            style={
              messageType === 'sticker'
                ? dateBlockSticker
                : messageType === 'image' && !message
                ? dateBlockImage
                : messageDateBlock
            }>
            <Text
              style={[
                {
                  color:
                    messageType === 'sticker' ||
                    (messageType === 'image' && !message)
                      ? '#FFFFFF'
                      : side
                      ? '#247d09'
                      : 'grey',
                },
                messageTextStyle,
              ]}>
              {edited && 'edited '}
              {moment(date).format('H:mm')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageList;
