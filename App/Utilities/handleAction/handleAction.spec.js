import { handleAction, createReducer } from './handleAction'

describe('handleAction Utility', () => {
  it('should add new values to the state tree, if they did not previously exist', () => {
    handleAction('SAMPLE_ACTION', (state, action) => ({
      sampleStateChange: 'sample value'
    }))

    const branchInitialState = null
    const applicationInitialState = null

    expect(createReducer(branchInitialState)(applicationInitialState, { type: 'SAMPLE_ACTION' }))
    .toEqual({ sampleStateChange: 'sample value' })
  })

  it('should patch values in the state tree, if they did previously exist', () => {
    handleAction('SAMPLE_ACTION', (state, action) => ({
      sampleStateChange: 'new sample value'
    }))

    const branchInitialState = null
    const applicationInitialState = { sampleStateChange: 'sample value' }

    expect(createReducer(branchInitialState)(applicationInitialState, { type: 'SAMPLE_ACTION' }))
    .toEqual({ sampleStateChange: 'new sample value' })
  })
})
