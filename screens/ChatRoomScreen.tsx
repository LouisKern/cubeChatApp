import React from "react";
import { Text, View } from '../components/Themed';
import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground, ImageBackgroundBase } from "react-native";
import chatRoomData from "../data/Chats"
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {

    const route = useRoute();
    
    return (
        <><FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted /><InputBox />
        </>
    );
}

export default ChatRoomScreen;