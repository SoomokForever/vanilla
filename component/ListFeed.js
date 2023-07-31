import React, { useState } from "react";
import { FlatList, View, StyleSheet, Image, Text, TouchableOpacity, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { w_width, w_height } = Dimensions.get('window');

const DATA = [
    {
        id: '1',
        title: 'hi',
        profileImage: '프로필사진',
        name: 'Camila',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5',
        comment: '3',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '2',
        title: 'bye',
        profileImage: '프로필사진',
        name: '안홍영',
        location: '창원시 마산',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '3',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정진우',
        location: '인천시 서구',
        feedImage: '피드이미지',
        likes: '1k',
        comment: '50',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '4',
        title: 'bye',
        profileImage: '프로필사진',
        name: '최승민',
        location: '강북 롯데캐슬',
        feedImage: '피드이미지',
        likes: '10k',
        comment: '1000',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '5',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정찬희',
        location: '구리시 자취',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '6',
        title: 'bye',
        profileImage: '프로필사진',
        name: '최승민2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '7',
        title: 'bye',
        profileImage: '프로필사진',
        name: '안홍영2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '8',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정진우2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
];

const Item = ({ title, profileImage, name, location, feedImage, likes, comment, likesProfile, likesName }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.firstColumn}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={styles.profileTexts}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
                <Ionicons name="ellipsis-horizontal-sharp" size={28} color="black" style={{ justifyContent: 'center', alignItems: 'center' }} />
            </View>
            <Image
                style={styles.feedImage}
                source={{
                    uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
                }}
            />
            <View style={styles.secondColumn}>
                <TouchableOpacity style={styles.likes}>
                    <Ionicons name="heart-outline" size={24} color="black" />
                    <Text>{likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.comment}>
                    <Ionicons name="md-chatbubble-outline" size={24} color="black" />
                    <Text>{comment}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.share}>
                    <Ionicons name="md-paper-plane-sharp" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmark}>
                    <Ionicons name="bookmark-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.thirdColumn}>
                <Image
                    style={styles.likesProfileHeader}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Image
                    style={styles.likesProfileSecond}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Image
                    style={styles.likesProfileThird}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.likesName}>{likesName}</Text>
                <TouchableOpacity style={styles.more}>
                    <Text style={{fontSize:13}}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const ListFeed = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item name={item.name} location={item.location} likes={item.likes} comment={item.comment} likesName={item.likesName} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 100, paddingTop: 55 }}
            style={{ overflow: 'hidden' }}
        />
    );
};

export default ListFeed

const styles = StyleSheet.create({
    container: {
        width: w_width,
        height: w_height,
        flex: 1,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        overflow: 'hidden',
    },
    firstColumn: {
        width: '92%',
        marginHorizontal: '4%',
        marginVertical: '4%',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    profileImage: {
        width: '10%',
        height: 32.7,
        borderRadius: 90,
    },
    profileTexts: {
        width: '71%',
        marginHorizontal: '2%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    location: {
        fontSize: 11,
        color: "#808e9b"
    },
    feedImage: {
        width: '92%',
        height: 300,
        marginHorizontal: '4%',
        marginBottom: '3%',
        borderRadius: 20,
    },
    secondColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        marginHorizontal: '5%',
        marginBottom: '2%',
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '23%',
        borderRadius: 10,
        marginRight: '5%',
        backgroundColor: "#d2dae2",
    },
    comment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '23%',
        borderRadius: 10,
        marginRight: '5%',
        backgroundColor: "#d2dae2",

    },
    share: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        marginRight: '24%',
    },
    bookmark: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
    },
    thirdColumn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginHorizontal: '5%',
        marginBottom: '3%',
    },
    likesProfileHeader: {
        width: '10%',
        height: 32,
        borderRadius: 90,
        borderColor: "#ffffff",
        borderWidth: 2,
        zIndex: 3,
    },
    likesProfileSecond: {
        width: '10%',
        height: 32,
        borderRadius: 90,
        borderColor: "#ffffff",
        borderWidth: 2,
        marginLeft: -12,
        overflow: 'hidden',
        zIndex: 2,
    },
    likesProfileThird: {
        width: '10%',
        height: 32,
        borderRadius: 90,
        borderColor: "#ffffff",
        borderWidth: 2,
        marginLeft: -12,
        overflow: 'hidden',
        zIndex: 1,
    },
    likesName: {
        fontSize: 15,
        width: '52%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    more: {
        backgroundColor:"#d2dae2",
        borderRadius: 15,
        paddingHorizontal: '5%',
        paddingVertical: '2%',
    },
});