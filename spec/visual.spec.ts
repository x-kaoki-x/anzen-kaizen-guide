import path from 'path';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

// テストの実行
// npx jest ./spec/visual.spec.js
// （スナップショットを更新する場合）
// npx jest ./spec/visual.spec.js --updateSnapshot
describe('TODOアプリ', () => {
  beforeEach(async () => {
    await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
  });

  test('初期表示', async () => {
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  test('タスクの追加', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  test('タスクの入力', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    expect(await page.screenshot()).toMatchImageSnapshot();
  });

  it('タスクの削除', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    await page.click('.todo:nth-child(1) .delete');
    await page.click('.todo:nth-child(1) .delete');
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
