/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should be able to register new skill and show in screen', async () => {
    // text = input-skill
    const inputSkill = await element(by.id('input-skill'));

    // button-add-skill
    const buttonAddSkill = await element(by.id('button-add-skill'));

    // flatlist-skills
    const flatlistSkills = await element(by.id('flatlist-skills'));

    await inputSkill.tap();
    await inputSkill.typeText('React Native');
    await buttonAddSkill.tap();

    await flatlistSkills.tap();

    await expect(element(by.id('flatlist-skills'))).toBeVisible();
  });
});
