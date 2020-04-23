import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { retrieveAllPost, retrieveTopPost, retrieveNewPost, retrieveHotPost, retrieveControversialPost } from './src/logic'
import { PostList, NavigationBar } from './src/components'


function App () {
  const [view, setView] = useState()
  const [error, setError] = useState()
  const [post, setPost] = useState()
  const [search, setSearch] = useState()
  
  console.disableYellowBox = true

  useEffect(() => {
    handleAllPost()
  }, [])

  function __handleError__(message) {
    setError(message)
    setTimeout(() => {
      setError(null)
    }, 5000)
  } 

  function handleAllPost (page) {
   return retrieveAllPost(page)
    .then(allPost => {
      setPost(allPost)
      setSearch('all')
      setView('postList')
    })
    .catch(error => {
      __handleError__({ message })
    })
  }

  function handleTopPost(page) {
    return retrieveTopPost(page)
    .then( topPost => {
      setPost(topPost)
      setSearch('top')
      setView('postList')
    })
    .catch(error => {
      __handleError__({ message })
    })
  }

  function handleNewPost(page){
    return retrieveNewPost(page)
    .then(newPost => {
      setPost(newPost)
      setSearch('new')
      setView('postList')
    })
    .catch(error => {
      __handleError__({ message })
    })
  }

  function handleHotPost(page) {
    return retrieveHotPost(page)
    .then(hotPost => {
      setPost(hotPost)
      setSearch('hot')
      setView('postList')
    })
    .catch(error => {
      __handleError__({ message })
    })
  }

  function handleControversialPost(page){
    return retrieveControversialPost(page)
    .then(controversialPost => {
      setPost(controversialPost)
      setSearch('controversial')
      setView('postList')
    })
    .catch(error => {
      __handleError__({ message })
    })
  }

  function handlePages(page) {
    if (search === 'all') handleAllPost(page)
    if (search === 'top') handleTopPost(page)
    if (search === 'new') handleNewPost(page)
    if (search === 'hot') handleHotPost(page)
    if (search === 'controversial') handleControversialPost(page)
  }

  return (<>
    <View style={styles.appContainer}>
      <NavigationBar style={styles.navbar} toAll={handleAllPost} toTop={handleTopPost} toNew={handleNewPost} toHot={handleHotPost} toControversial={handleControversialPost}/>
      <ScrollView>
        { view === 'postList' && <PostList post ={post} onNextPage ={handlePages} onPrevious={handlePages} error={error}/> }
      </ScrollView>
    </View>  
  </>)
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#DAE0E6',
    height: '100%'
  },
  navbar: {
    flex: 1
  }
})

export default App
