describe('test', () => {
  it('testnado...', () => {
    const reason = 'reason';

    const postAction = {
      data: {
        reason: `${reason}`,
      },
    };

    expect(postAction).toEqual(
      expect.objectContaining({
        data: {
          reason: `${reason}`,
        },
      })
    );
  });
});
