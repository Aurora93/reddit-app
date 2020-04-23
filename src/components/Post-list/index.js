import React, {useState} from 'react'
import { View, Text, FlatList, List, Item, Image, TouchableOpacity} from 'react-native'
import moment from 'moment'
import { WebView } from 'react-native-webview'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'


function Landing ({ post, onNextPage, onPrevious, error }) {
    const [postInfo, setPostInfo] = useState()
    const arrPost = post.data.children

    return (
        <View>
            <View style={styles.pagination}>
                <TouchableOpacity onPress={() => onPrevious(post.data.before===null ? '' : `?count=25&before=${post.data.before}`)}><Icon name="chevron-left" size={24} color="#272B34" /></TouchableOpacity>
                <TouchableOpacity onPress={() => onNextPage(post.data.after===null ? '' : `?count=25&after=${post.data.after}`)}><Icon name="chevron-right" size={24} color="#272B34" /></TouchableOpacity>
            </View>

            {error && <Text style={ styles.error}>{error}</Text>}

            <FlatList
                style={styles.list}
                data = {arrPost}
                renderItem={({item})=>(<>
                    <TouchableOpacity style={styles.itemTouchable} onPress={() => {
                        if(postInfo === item.data.permalink) setPostInfo('undefined')
                        else setPostInfo(item.data.permalink)}}>

                    <View style= {styles.itemContainer}>
                        <View style={styles.postLeft}>
                            <Image source = {{uri: item.data.thumbnail}} style={styles.imageView}></Image>
                        </View>

                        <View style={styles.postRight}>
                            <View style={styles.postRightTop}>
                                <Text style={styles.textSub}>{moment(new Date(item.data.created_utc*1000)).fromNow().toString()}</Text>
                            </View>

                            <View style={styles.postRightBody}>
                                <Text style={styles.title}>{item.data.title}</Text>
                            </View>

                            <View style={styles.postRightBottom}>
                                <View style={styles.rightBottomAuthor}>
                                    <Text style={styles.textSub}>Posted by: {item.data.author}</Text>
                                </View>

                                <View style={styles.rightBottomScore}>
                                    <Text style={styles.textSub}>Votes: {item.data.score}</Text>
                                </View>

                                <View style={styles.rightBottomComments}>
                                    <Icon name="comment" size={24} color="#272B34" />
                                    <Text style={styles.textSub}>Comments: {item.data.num_comments}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                {postInfo === item.data.permalink && (<WebView source={{uri:`https://www.reddit.com${postInfo}`}} style={styles.webView} />)}
                </TouchableOpacity></>)}
            /> 

            <View style={styles.pagination}>
                <TouchableOpacity onPress={() => onPrevious(post.data.before===null ? '' : `?count=25&before=${post.data.before}`)}><Icon name="chevron-left" size={24} color="#272B34" /></TouchableOpacity>
                <TouchableOpacity onPress={() => onNextPage(post.data.after===null ? '' : `?count=25&after=${post.data.after}`)}><Icon name="chevron-right" size={24} color="#272B34" /></TouchableOpacity>
            </View>
            
        </View>  
    )   
}

export default Landing