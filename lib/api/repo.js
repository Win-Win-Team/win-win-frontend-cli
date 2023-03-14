const axios = require('../utils/request');

console.log(axios.request)
const getRepoList = params => {
    return axios.request({
        url: 'https://api.github.com/users/Win-Win-Team/repos',
        params,
        method: 'get'
    })
}


module.exports = {
    getRepoList
}