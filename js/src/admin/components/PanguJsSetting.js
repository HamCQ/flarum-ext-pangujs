import ExtensionPage from 'flarum/components/ExtensionPage';

export default class PanguJsSetting extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }

  content() {
    return (
      <div className="PangujsSettingsPage">
        <div className="container" style="margin-top:20px">
          <form>
            {this.buildSettingComponent({
              type: 'boolean',
              setting: 'contentPanguJs',
              label: "全站开启 PanguJs",
            })}
            <p>关闭之后，登录用户可在设置页面进行单独配置</p>
            {this.submitButton()}
          </form>
        </div>
      </div>
    );
  }
}
