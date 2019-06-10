import { newNote } from 

describe('notes actions', ()=>{
  it('create an action to create a note', ()=>{
    const noteAction = newNote({
      title: 'hi',
      body: 'there'
    });
  });
  expect(noteAction).toEqual({
    type: 'NEW_NOTE',
    pendingType: 'NEW_NOTE_PENDING',
    rejectedType: 'NEW_NOTE_REJECTED',
    payload: expect.any(Promise)
  });
})
;
