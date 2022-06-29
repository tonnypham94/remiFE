import { youtubeParserID } from './actions'

describe('utils/actions', () => {
  describe('youtubeParserID', () => {
    it('get the ID from the Youtube URL', () => {
      const url = 'https://www.youtube.com/watch?v=_a0T5qwxANg&list=RDMM&index=10'
      const expectedData = '_a0T5qwxANg'
      expect(youtubeParserID(url)).toEqual(expectedData)
    })

    it('get the no data from the wrong URL', () => {
      const url = 'https://www.google.com/'
      const expectedData = false
      expect(youtubeParserID(url)).toEqual(expectedData)
    })

    it('get the no data from the empty URL', () => {
      const url = 'https://www.google.com/'
      const expectedData = false
      expect(youtubeParserID(url)).toEqual(expectedData)
    })
  })
})
