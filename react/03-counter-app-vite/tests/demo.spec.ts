describe('Demo tests', () => {
  it('should return same string using trim', () => {
    // arrange
    const message = 'Hello world';

    // act
    const result = message.trim();

    // assert
    expect(message).toEqual(result);
  });
});
