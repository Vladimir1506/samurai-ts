import React from 'react';
import {connect} from 'react-redux';
import DialogsContainer from './DialogsContainer';
import {changeMessageTextValueAC, messagesPageStateType, sendMessageAC} from '../../redux/messagePage-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    messagePage: messagesPageStateType
}
type MapDispatchToPropsType = {
    onSendMessage: (contactId: string, text: string) => void
    onChangeMessageText: (contactId: string, text: string) => void
}
export type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    messagePage: state.messagePage
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onSendMessage: (contactId: string, text: string) => dispatch(sendMessageAC(contactId, text)),
    onChangeMessageText: (contactId: string, text: string) => dispatch(changeMessageTextValueAC(contactId, text))
})
const DialogsSuperContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)

export default DialogsSuperContainer;
