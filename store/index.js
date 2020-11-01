import firebase from '~/plugins/firebase'

export const state = () => ({
    userUid: '',
    userName: ''
})

export const mutations = {
    setUserUid(state, userUid) {
        state.userUid = userUid
        console.log('Uid is SET!')
    },
    setUserName(state, userName) {
        state.userName = userName
        console.log('userName is SET!')
    },
}

export const actions = {
  login({commit}) {
    console.log('login action')
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
        const user = result.user;
        console.log(user)
        console.log(user.displayName)
        // dispatch('checkLogin')
        commit('setUserUid', user.uid)
        commit('setUserName', user.displayName)
    }).catch(function (error) {
    })    
  },
//   checkLogin() {
//     firebase.auth().onAuthStatusChanged(function (user) {
//         if (user) {
//             console.log('log-in success!')
//         } else {
//             console.log('failed')
//         }
//     })
//   }
}

export const getters = {
    getUserUid(state) {
        return state.userUid
    },
    getUserName(state) {
        return state.userName
    }    
}