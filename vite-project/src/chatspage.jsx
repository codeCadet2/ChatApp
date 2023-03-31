import{ MultiChatSocket, MultiChatWindow, useMultiChatLogic  }from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('816c9153-be51-4ca4-b310-b2738088c64f', props.user.username, props.user.secret);
    return <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
}

export default ChatsPage