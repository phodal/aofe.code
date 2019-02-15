describe('#API Contract Test', () => {
  it('should return correctly data', async () => {
    const data = await mockHttp.getBook('1')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('前端架构')
  });
});