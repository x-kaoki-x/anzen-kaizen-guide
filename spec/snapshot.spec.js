const path = require('path');

// テストの実行
// npx jest ./spec/snapshot.spec.js
describe('TODOアプリ', () => {
  beforeEach(async () => {
    await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
  });

  test('初期表示', async () => {
    expect(await page.content()).toMatchSnapshot();
  });

  test('タスクの追加', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    expect(await page.content()).toMatchSnapshot();
  });

  test('タスクの入力', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    expect(await page.content()).toMatchSnapshot();
  });

  test('タスクの削除', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    await page.click('.todo:nth-child(1) .delete');
    await page.click('.todo:nth-child(1) .delete');
    expect(await page.content()).toMatchSnapshot();
  });
});
