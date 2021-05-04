import env from '../src';

describe('cow', () => {
  it('work when pass object as input', () => {
    const { PORT, DB_NAME } = env({
      envsForDefault: ['test', 'dev', 'qa'],
      defaultValues: {
        PORT: 8080,
        DB_NAME: 'yourDB',
      },
    });
    expect(PORT).toEqual(8080);
    expect(DB_NAME).toEqual('yourDB');
  });
  it('work when pass string as input', () => {
    const port = env('PORT', 8080);
    expect(port).toEqual(8080);
    const dbName = env('DB_NAME');
    expect(dbName).toEqual(undefined);
  });
});
