import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from '../../../components/Header';
import {container} from '../../../resource/style';
import {connect} from 'react-redux';
import {
  getChat,
  sendMessage,
  deleteMessage,
  updateMessage,
} from '../../../actions/chatActions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAttachment from 'react-native-vector-icons/Entypo';
import IconEdit from 'react-native-vector-icons/MaterialIcons';
import MessageList from '../../../components/MessageList';
import moment from 'moment';
import {
  backgroundImageStyle,
  chatContainerStyle,
  editMessageStyle,
  editTextContainer,
  editTitleStyle,
  iconEditStyle,
  iconSendImage,
  inputChatContainer,
  inputEditContainer,
  loadingImageStyle,
  modalBackgroundStyle,
  modalContainer,
  modalItemStyle,
  modalItemText,
  newDayStyle,
  replyImageStyle,
  sendBlockStyle,
  sendImageStyle,
  stickerContainer,
  stickerStyle,
  textInputChat,
} from '../../../resource/style/chat';
import {
  w,
  h,
  blueColor,
  remA,
  stickerArray,
  remH,
  remW,
} from '../../../resource/constants';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

class Chat extends Component {
  state = {
    message: '',
    modalVisible: false,
    x: 0,
    y: 0,
    modalItem: undefined,
    edit: false,
    itemsSelected: false,
    limit: 40,
    prevLimit: 0,
    reply: false,
    sticker: false,
    sourceImg: undefined,
    pathImg: undefined,
    el: undefined,
  };

  componentWillUnmount(): void {
    const {unsubscribe} = this.props;
    console.log('un')
    unsubscribe();
  }

  componentDidMount() {
    const {getChat} = this.props;
    getChat(this.state.limit);
  }

  _sendDefault() {
    const {message} = this.state;
    const {sendMessage, nick} = this.props;
    if (message.trim()) {
      let trimedmessage = message.trimEnd();
      trimedmessage = trimedmessage.trimStart();
      sendMessage(trimedmessage, nick, 'default');
      this.setState((prev) => ({...prev, message: ''}));
    }
  }

  _sendSticker(index) {
    const {sendMessage, nick} = this.props;
    sendMessage(null, nick, 'sticker', index);
  }

  _sendImage() {
    const {message, pathImg} = this.state;
    const {sendMessage, nick} = this.props;
    let trimedmessage = message.trimEnd();
    trimedmessage = trimedmessage.trimStart();
    sendMessage(trimedmessage, nick, 'image', pathImg);
    this.setState((prev) => ({
      ...prev,
      message: '',
      sourceImg: undefined,
      pathImg: undefined,
    }));
  }

  _pickImage() {
    ImagePicker.showImagePicker((res) => {
      res.uri &&
        ImageResizer.createResizedImage(res.uri, w, h, 'JPEG', 100, 0)
          .then((response) => {
            this.setState((prev) => ({
              ...prev,
              sourceImg: {uri: response.uri},
              pathImg: response.path,
            }));
          })
          .catch((err) => {
            console.log(err);
          });
    });
  }

  _showModal(event, item) {
    const {nick} = this.props;
    let el = 3;
    if (nick !== item.nick) {
      el = 2;
    } else if (item.messageType === 'sticker') {
      el = 2;
    }
    let xc = event.nativeEvent.pageX;
    let yc = event.nativeEvent.pageY;
    if (xc - 67 * remW > 0 && xc + 67 * remW < w - 30 * remW) {
      xc -= 67 * remW;
    } else if (xc + 67 * remW > w - 30 * remW) {
      xc -= 125 * remW;
    }
    if (yc - el * 30 * remH > 0 && yc + el * 30 * remH < h - 30 * remH) {
      yc -= el * 30 * remH;
    } else if (yc + el * 30 * remH > h - 30 * remH) {
      yc -= el * 60 * remH;
    }
    this.setState((prev) => ({
      ...prev,
      sourceImg: undefined,
      pathImg: undefined,
      modalVisible: true,
      x: xc,
      y: yc,
      reply: false,
      edit: false,
      modalItem: item,
      el,
    }));
  }

  _openDetails() {
    const {navigation} = this.props;
    const {nick} = this.state.modalItem;
    return (
      <TouchableOpacity
        style={modalItemStyle}
        onPress={() => {
          this.setState((prev) => ({...prev, modalVisible: false}));
          navigation.navigate('ProfileDetails', {nickDetails: nick});
        }}>
        <Icon size={26 * remA} name={'face-profile'} color={'grey'} />
        <Text style={modalItemText}>Open profile</Text>
      </TouchableOpacity>
    );
  }
  _generateModal() {
    const {modalItem} = this.state;
    const {messageType} = modalItem;
    const {nick} = this.props;

    switch (messageType) {
      case 'default':
        return (
          <View>
            {nick !== modalItem.nick && this._openDetails()}
            {this._generateReply()}
            {nick === modalItem.nick && this._generateEdit()}
            {nick === modalItem.nick && this._generateDelete()}
          </View>
        );
      case 'sticker':
        return (
          <View>
            {nick !== modalItem.nick && this._openDetails()}
            {this._generateReply()}
            {nick === modalItem.nick && this._generateDelete()}
          </View>
        );
      case 'image':
        return (
          <View>
            {nick !== modalItem.nick && this._openDetails()}
            {this._generateReply()}
            {nick === modalItem.nick && this._generateEdit()}
            {nick === modalItem.nick && this._generateDelete()}
          </View>
        );
      case 'reply':
        return (
          <View>
            {nick !== modalItem.nick && this._openDetails()}
            {this._generateReply()}
            {nick === modalItem.nick && this._generateEdit()}
            {nick === modalItem.nick && this._generateDelete()}
          </View>
        );
    }
  }

  _generateReply() {
    return (
      <TouchableOpacity
        style={modalItemStyle}
        onPress={() => {
          this.inputRef.blur();
          setTimeout(() => this.inputRef.focus(), 400);
          this.setState((prev) => ({
            ...prev,
            reply: true,
            modalVisible: false,
          }));
        }}>
        <Icon size={26 * remA} name={'reply'} color={'grey'} />
        <Text style={modalItemText}>Reply</Text>
      </TouchableOpacity>
    );
  }

  _generateEdit() {
    const {message} = this.state.modalItem;
    return (
      <TouchableOpacity
        style={modalItemStyle}
        onPress={() => {
          this.inputRef.blur();
          setTimeout(() => this.inputRef.focus(), 400);
          this.setState((prev) => ({
            ...prev,
            edit: true,
            modalVisible: false,
            message,
          }));
        }}>
        <IconEdit size={26 * remA} name={'edit'} color={'grey'} />
        <Text style={modalItemText}>Edit</Text>
      </TouchableOpacity>
    );
  }

  _generateDelete() {
    return (
      <TouchableOpacity
        style={modalItemStyle}
        onPress={() => this._deleteMessage()}>
        <Icon size={26 * remA} name={'trash-can-outline'} color={'grey'} />
        <Text style={modalItemText}>Delete</Text>
      </TouchableOpacity>
    );
  }

  _deleteMessage() {
    const {deleteMessage} = this.props;
    const {date, messageType} = this.state.modalItem;
    deleteMessage(date, messageType);
    this.setState((prev) => ({
      ...prev,
      modalVisible: false,
      x: 0,
      y: 0,
      modalItem: undefined,
    }));
  }

  _updateMessage() {
    const {updateMessage} = this.props;
    const {message, modalItem} = this.state;
    if (message.trim() && message.trim() !== modalItem.message) {
      let trimedmessage = message.trimStart();
      trimedmessage = trimedmessage.trimEnd();
      updateMessage(modalItem.date, trimedmessage);
    }
    this.setState((prev) => ({
      ...prev,
      edit: false,
      modalItem: undefined,
      message: '',
    }));
  }

  _sendReply() {
    const {message, modalItem} = this.state;
    const {sendMessage, nick} = this.props;
    if (message.trim()) {
      let trimedmessage = message.trimEnd();
      trimedmessage = trimedmessage.trimStart();
      sendMessage(trimedmessage, nick, 'reply', modalItem);
      this.setState((prev) => ({
        ...prev,
        reply: false,
        modalVisible: false,
        edit: false,
        modalItem: undefined,
        message: '',
      }));
    }
  }

  _moreData() {
    const {unsubscribe, getChat, chatData} = this.props;
    const {limit, prevLimit} = this.state;
    if (chatData.length === limit && chatData.length !== prevLimit) {
      unsubscribe();
      getChat(limit + 40);
      this.setState((prev) => ({
        ...prev,
        limit: limit + 40,
        prevLimit: prevLimit + 40,
      }));
    }
  }

  render() {
    const {
      navigation,
      error,
      loading,
      chatData,
      nick,
      fileLoading,
    } = this.props;
    const {
      message,
      modalVisible,
      x,
      y,
      edit,
      modalItem,
      itemsSelected,
      reply,
      sticker,
      sourceImg,
      el,
    } = this.state;
    return (
      <View style={container}>
        <Header
          navigate={() => navigation.toggleDrawer()}
          title={'Chat'}
          icon={'menu'}
        />
        <View style={chatContainerStyle}>
          <ImageBackground
            source={require('../../../resource/image/assets/background.jpg')}
            style={backgroundImageStyle}>
            <FlatList
              keyboardShouldPersistTaps={'always'}
              inverted={true}
              windowSize={16}
              onEndReached={(info: {distanceFromEnd: number}) =>
                this._moreData()
              }
              onEndReachedThreshold={0.1}
              data={chatData}
              renderItem={({item, index}) => {
                let sametitle = true;
                if (index < chatData.length - 1) {
                  if (chatData[index + 1].nick === item.nick) {
                    sametitle = false;
                  }
                }
                let newdate = true;
                if (index < chatData.length - 1) {
                  if (
                    moment(chatData[index + 1].date).format('MMMM Do YYYY') ===
                    moment(item.date).format('MMMM Do YYYY')
                  ) {
                    newdate = false;
                  }
                }
                return (
                  <View>
                    {newdate && (
                      <Text style={newDayStyle}>
                        {moment(item.date).year() === moment().year()
                          ? moment(item.date).format('Do MMMM')
                          : moment(item.date).format('Do MMMM, YYYY')}
                      </Text>
                    )}
                    <MessageList
                      item={item}
                      mynick={nick}
                      sametitle={sametitle}
                      showModal={(ev, it) => this._showModal(ev, it)}
                      showIncreasedPhoto={(el) => navigation.navigate('IncreasedPhoto', {nick: el.nick, avatar: el.image, date: el.date})}
                      showSticker={() =>
                        this.setState((prev) => ({...prev, sticker: true}))
                      }
                      itemsSelected={itemsSelected}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.date.toString()}
            />
          </ImageBackground>

          {(edit || reply) && (
            <View style={inputEditContainer}>
              <View style={iconEditStyle}>
                <IconEdit
                  size={26 * remA}
                  name={edit ? 'edit' : 'reply'}
                  color={blueColor}
                />
              </View>
              {modalItem.messageType === 'image' && (
                <Image
                  source={{uri: modalItem.image}}
                  style={replyImageStyle}
                />
              )}
              <View style={editTextContainer}>
                <Text style={editTitleStyle}>
                  {edit && 'Edit Message'}
                  {reply && modalItem.nick}
                </Text>
                <Text style={editMessageStyle} numberOfLines={1}>
                  {modalItem.messageType === 'sticker' ? (
                    <Text style={{color: '#247d09'}}>Sticker</Text>
                  ) : modalItem.messageType === 'image' ? (
                    <Text style={{color: '#247d09'}}>Photo</Text>
                  ) : (
                    modalItem.message
                  )}
                </Text>
              </View>
              <View style={iconEditStyle}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState((prev) => ({
                      ...prev,
                      edit: false,
                      message: edit ? '' : message,
                      reply: false,
                      modalItem: undefined,
                    }))
                  }>
                  <Icon name={'close'} size={26 * remA} color={'grey'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={inputChatContainer}>
            <View style={sendBlockStyle}>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  this.setState((prev) => ({
                    ...prev,
                    sticker: !sticker,
                    sourceImg: undefined,
                    pathImg: undefined,
                  }));
                }}>
                <Icon
                  size={26 * remA}
                  color={'gray'}
                  name={sticker ? 'close' : 'sticker-emoji'}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              ref={(input) => {
                this.inputRef = input;
              }}
              onFocus={() =>
                this.setState((prev) => ({...prev, sticker: false}))
              }
              maxLength={4000}
              multiline={true}
              returnKeyType={'done'}
              style={textInputChat}
              placeholderTextColor={'gray'}
              placeholder={'Message'}
              value={message}
              blurOnSubmit={false}
              onChangeText={(val) =>
                this.setState((prev) => ({...prev, message: val}))
              }
            />
            {message.length || edit || sourceImg ? (
              <View
                style={[
                  sendBlockStyle,
                  {
                    paddingBottom: sourceImg ? 6 * remH : 11 * remH,
                    paddingRight: sourceImg ? 6 * remW : 0,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() =>
                    edit
                      ? this._updateMessage()
                      : reply
                      ? this._sendReply()
                      : sourceImg
                      ? this._sendImage()
                      : this._sendDefault()
                  }>
                  {sourceImg ? (
                    <View>
                      <Image style={sendImageStyle} source={sourceImg} />
                      <View style={iconSendImage}>
                        <Icon
                          size={26 * remA}
                          color={blueColor}
                          name={'send'}
                        />
                      </View>
                    </View>
                  ) : (
                    <Icon
                      size={26 * remA}
                      color={blueColor}
                      name={edit ? 'check-circle' : 'send'}
                    />
                  )}
                </TouchableOpacity>
              </View>
            ) : fileLoading ? (
              <View style={loadingImageStyle}>
                <ActivityIndicator size={'large'} color={blueColor} />
              </View>
            ) : (
              <View style={sendBlockStyle}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState((prev) => ({...prev, reply: false}));
                    this._pickImage();
                  }}>
                  <IconAttachment
                    size={26 * remA}
                    color={'#30618a'}
                    name={'attachment'}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          {sticker && (
            <View style={stickerContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={5}
                data={stickerArray}
                renderItem={({item, index}) => (
                  <TouchableOpacity onPress={() => this._sendSticker(index)}>
                    <Image style={stickerStyle} source={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.toString()}
              />
            </View>
          )}
        </View>
        {modalVisible && (
          <TouchableOpacity
            style={modalBackgroundStyle}
            onPress={() =>
              this.setState((prev) => ({...prev, modalVisible: false}))
            }>
            <View
              style={[
                modalContainer,
                {height: el * 60 * remH, marginTop: y, marginLeft: x},
              ]}>
              {this._generateModal()}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const actionsCreators = {
  getChat,
  sendMessage,
  deleteMessage,
  updateMessage,
};

const mapState = (state) => {
  const {chatData, error, loading, unsubscribe, fileLoading} = state.chat;
  const {nick} = state.profile.profileData;
  return {
    unsubscribe,
    nick,
    chatData,
    error,
    loading,
    fileLoading,
  };
};

export default connect(mapState, actionsCreators)(Chat);
