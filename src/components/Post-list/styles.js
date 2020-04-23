import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  list: {
      flex: 1
  },

  imageView: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 5,
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    padding: 5,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  postLeft: {
    flex: 0.25
  },

  postRight: {
    flex: 0.75,
    flexDirection: 'column'
  },

  postRightTop: {
    flex: 0.25,
    alignSelf: 'flex-end',
    margin: 5
  },

  postRightBody: {
    flex: 0.5,
    margin: 5
  },

  postRightBottom: {
    flex: 0.25,
    flexDirection: 'row'
  },

  rightBottomAuthor: {
    flex: 0.5,
    margin: 5,
    paddingLeft: 10,
    alignSelf: 'center'
  },

  rightBottomScore: {
    flex: 0.25,
    margin: 5,
    alignSelf: 'center'
  },

  rightBottomComments: {
    flex: 0.25, 
    margin: 5,
    alignItems: 'center'
  },

  textSub : {
    fontSize: 10
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10
  },
  
  pagination: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10
  },

  webView: { 
    flex: 1,
    width: '100%',
    height: 500,
    marginTop:20
  }
})

export default styles