export class AppTab {
  constructor(
    public title: string,
    public link: string,
    public disabled: boolean
  ) {}

  static itemAppTab = new AppTab('Item', 'items', false);
  static rarityAppTab = new AppTab('Rarities', 'rarities', false);
  static attributeAppTab = new AppTab('Attributes', 'attributes', true);
}
