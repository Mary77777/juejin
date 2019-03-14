let baseUrl = 'http://139.196.125.95:3000'

process.env.NODE_ENV === 'development' ? baseUrl = '/juejin' : baseUrl = 'http://139.196.125.95:3000'

export default baseUrl