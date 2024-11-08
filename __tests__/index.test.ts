/**
 * Unit tests for the action's entrypoint, src/index.ts
 */

import * as main from '../src/function-main'

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run').mockImplementation()

describe('index', () => {
  it('calls run when imported', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/function-index')

    expect(runMock).toHaveBeenCalled()
  })
})
