const mockAxios = jest.getMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)
mockAxios.get = jest.fn(() => Promise.resolve({ data: {}, code: 2000 }))
mockAxios.post = jest.fn(() => Promise.resolve({ data: {}, code: 2000 }))
mockAxios.put = jest.fn(() => Promise.resolve({ data: {}, code: 2000 }))
mockAxios.delete = jest.fn(() => Promise.resolve({ data: {}, code: 2000 }))
mockAxios.all = jest.fn(() => Promise.resolve())

export default mockAxios
// module.exports = {
//     get: jest.fn(() => Promise.resolve({ status: 200 }))
// }
